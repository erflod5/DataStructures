import { AvlNode } from './AvlNode';
export class LinkedList<T>{
    private root: AvlNode<T> | null;

    constructor();
    constructor(root: AvlNode<T>);
    constructor(...args: Array<any>) {
        if (args.length == 0) this.root = null;
        else this.root = args[0];
    }

    getRoot(): AvlNode<T> | null {
        return this.root;
    }

    insert(value: T) {
        this.insertAvlNode(this.root, value, false, 1);
    }

    drawAvlTree(root: AvlNode<T> | null, h: number): string {
        if (root != null) {
            return this.drawAvlTree(root.subLeft(), h + 1) + " " + root.nodeValue() + " " + this.drawAvlTree(root.subRight(), h + 1);
        }
        return "";
    }
     
    private leftleftRotation(node1: AvlNode<T>, node2:AvlNode<T>): AvlNode<T>{
        node1.leftBranch(node2.subRight());
        node2.leftBranch(node1);
        if(node2.getFactor() == -1){
            node1.setFactor(0);
            node2.setFactor(0);
        }else{
            node1.setFactor(-1);
            node2.setFactor(1);
        }
        return node1;
    }

    private righrightRotation(node1: AvlNode<T>, node2:AvlNode<T>): AvlNode<T>{
        node1.rightBranch(node2.subLeft());
        node2.leftBranch(node1);
        if(node2.getFactor() == 1){
            node1.setFactor(0);
            node2.setFactor(0);
        }else{
            node1.setFactor(1);
            node2.setFactor(-1);
        }
        return node1;
    }

    private righleftRotation(node1: AvlNode<T>, node2:AvlNode<T>): AvlNode<T>{
        let tempNode: AvlNode<T> | null;
        tempNode = node2.subLeft();
        if(tempNode!=null){
            node1.rightBranch(tempNode.subLeft());
            tempNode.leftBranch(node1);
            node2.leftBranch(tempNode.subRight());
            tempNode.rightBranch(node2);
            if(tempNode.getFactor() == 1) node1.setFactor(-1);
            else node1.setFactor(0);
            if(tempNode.getFactor()==-1) node2.setFactor(1);
            else node2.setFactor(0);
            tempNode.setFactor(0);
            return tempNode;
        }
        return node1;
    }

    private leftrightRotation(node1: AvlNode<T>, node2:AvlNode<T>): AvlNode<T>{
        let tempNode: AvlNode<T> | null;
        tempNode = node2.subRight();
        if(tempNode!=null){
            node1.leftBranch(tempNode.subRight());
            tempNode.rightBranch(node1);
            node2.rightBranch(tempNode.subLeft());
            tempNode.leftBranch(node2);
            if(tempNode.getFactor() == 1) node2.setFactor(-1);
            else node2.setFactor(0);
            if(tempNode.getFactor()==-1) node1.setFactor(1);
            else node1.setFactor(0);
            tempNode.setFactor(0);
            return tempNode;
        }
        return node1;
    }

    private insertAvlNode(root: AvlNode<T> | null, value: T, hc: boolean, quantity: number) {

    }
}