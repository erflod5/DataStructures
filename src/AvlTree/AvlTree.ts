import { AvlNode } from './AvlNode';
export class AvlTree<T>{
    private root: AvlNode<T> | null;
    private property: string;

    constructor(property: string);
    constructor(property: string, root: AvlNode<T>);
    constructor(...args: Array<any>) {
        if (args.length == 1) this.root = null;
        else this.root = args[1];
        this.property = args[0];
    }

    getRoot(): AvlNode<T> | null {
        return this.root;
    }

    insert(value: T) {
        this.root = this.insertAvlNode(this.root, value, false, 1);
    }

    displayTree(){
        console.log(this.drawAvlTree(this.root,0));
    }

    displayInorder(){
        console.log(this.drawInorder(this.root));
    }

    displayPreorder(){
        console.log(this.drawPreorder(this.root));
    }

    displayPostorder(){
        console.log(this.drawPostorder(this.root));
    }

    length(){
        return this.avlLength(this.root);
    }

    height(): number{
        return this.avlHeight(this.root);
    }

    leavesCount():number{
        return this.avlLeaves(this.root);
    }

    private avlLeaves(root: AvlNode<T> | null): number{
        if(root){
            if(root.subLeft() == null && root.subRight() == null) return 1 + this.avlLeaves(root.subLeft()) + this.avlLeaves(root.subRight());
            return this.avlLeaves(root.subLeft()) + this.avlLeaves(root.subRight());
        }
        return 0;
    }

    private avlHeight(root: AvlNode<T> | null): number{
        if(root){
            return this.higher(this.avlHeight(root.subLeft()),this.avlHeight(root.subRight())) + 1;
        }
        return 0;
    }

    private higher(x:number, y:number): number{
        return (x > y ? x : y);
    }

    private drawInorder(root: AvlNode<T> | null): string{
        if(root){
            return this.drawInorder(root.subLeft()) + JSON.stringify(root.nodeValue()) + " " + this.drawInorder(root.subRight());
        }
        return "";
    }

    private drawPreorder(root: AvlNode<T> | null): string{
        if(root){
            return JSON.stringify(root.nodeValue()) + " " + this.drawPreorder(root.subLeft()) + this.drawPreorder(root.subRight());
        }
        return "";
    }

    private drawPostorder(root: AvlNode<T> | null): string{
        if(root){
            return this.drawPostorder(root.subLeft()) + this.drawPostorder(root.subRight()) + JSON.stringify(root.nodeValue()) + " ";
        }
        return "";
    }

    private drawAvlTree(root: AvlNode<T> | null, h: number): string {
        if (root) {
            
            return this.drawAvlTree(root.subLeft(), h + 1) + " " + JSON.stringify(root.nodeValue()) + "["+h+"] " + this.drawAvlTree(root.subRight(), h + 1);
        }
        return "";
    }

    private avlLength(root: AvlNode<T> | null): number{
        if(root){
            let leftlength, rightlength;
            leftlength = this.avlLength(root.subLeft());
            rightlength = this.avlLength(root.subRight());
            return leftlength + rightlength + 1;
        }else return 0;
    }

    private insertAvlNode(root: AvlNode<T> | null, value: T, height_growth: boolean, quantity: number): AvlNode<T> {
        let node1: AvlNode<T> | null;
        let key = JSON.stringify(JSON.parse(JSON.stringify(value))[this.property]);
        if (root == null) {
            root = new AvlNode(value, this.property);
            height_growth = true;
        } else if (key.localeCompare(JSON.stringify(root.nodeKeyValue())) < 0) {
            let left: AvlNode<T>;
            left = this.insertAvlNode(root.subLeft(), value, height_growth, quantity);
            root.leftBranch(left);
            if (height_growth) {
                switch (root.getFactor()) {
                    case 1:
                        root.setFactor(0);
                        height_growth = false;
                        break;
                    case 0:
                        root.setFactor(-1);
                        break;
                    case -1:
                        node1 = root.subLeft();
                        if (node1 != null) {
                            if (node1.getFactor() == -1) root = this.leftleftRotation(root, node1);
                            else root = this.leftrightRotation(root, node1);
                            height_growth = false;
                        }
                        break;
                }
            }
        } else if (key.localeCompare(JSON.stringify(root.nodeKeyValue())) > 0) {
            let right: AvlNode<T>;
            right = this.insertAvlNode(root.subRight(), value, height_growth, quantity);
            root.rightBranch(right);
            if (height_growth) {
                switch (root.getFactor()) {
                    case 1:
                        node1 = root.subRight();
                        if (node1 != null) {
                            if (node1.getFactor() == 1) root = this.rightrightRotation(root, node1);
                            else root = this.rightleftRotation(root, node1);
                            height_growth = false;
                        }
                        break;
                    case 0:
                        root.setFactor(1);
                        break;
                    case -1:
                        root.setFactor(0);
                        height_growth = false;
                        break;
                }
            }
        } else {
            root.addQ(quantity);
        }

        return root;
    }

    private leftleftRotation(node1: AvlNode<T>, node2: AvlNode<T>): AvlNode<T> {
        node1.leftBranch(node2.subRight());
        node2.leftBranch(node1);
        if (node2.getFactor() == -1) {
            node1.setFactor(0);
            node2.setFactor(0);
        } else {
            node1.setFactor(-1);
            node2.setFactor(1);
        }
        return node1;
    }

    private rightrightRotation(node1: AvlNode<T>, node2: AvlNode<T>): AvlNode<T> {
        node1.rightBranch(node2.subLeft());
        node2.leftBranch(node1);
        if (node2.getFactor() == 1) {
            node1.setFactor(0);
            node2.setFactor(0);
        } else {
            node1.setFactor(1);
            node2.setFactor(-1);
        }
        return node1;
    }

    private rightleftRotation(node1: AvlNode<T>, node2: AvlNode<T>): AvlNode<T> {
        let tempNode: AvlNode<T> | null;
        tempNode = node2.subLeft();
        if (tempNode != null) {
            node1.rightBranch(tempNode.subLeft());
            tempNode.leftBranch(node1);
            node2.leftBranch(tempNode.subRight());
            tempNode.rightBranch(node2);
            if (tempNode.getFactor() == 1) node1.setFactor(-1);
            else node1.setFactor(0);
            if (tempNode.getFactor() == -1) node2.setFactor(1);
            else node2.setFactor(0);
            tempNode.setFactor(0);
            return tempNode;
        }
        return node1;
    }

    private leftrightRotation(node1: AvlNode<T>, node2: AvlNode<T>): AvlNode<T> {
        let tempNode: AvlNode<T> | null;
        tempNode = node2.subRight();
        if (tempNode != null) {
            node1.leftBranch(tempNode.subRight());
            tempNode.rightBranch(node1);
            node2.rightBranch(tempNode.subLeft());
            tempNode.leftBranch(node2);
            if (tempNode.getFactor() == 1) node2.setFactor(-1);
            else node2.setFactor(0);
            if (tempNode.getFactor() == -1) node1.setFactor(1);
            else node1.setFactor(0);
            tempNode.setFactor(0);
            return tempNode;
        }
        return node1;
    }
}