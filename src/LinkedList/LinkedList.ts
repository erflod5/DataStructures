import {Node} from './Node';

export class LinkedList<T>{
    private head : Node<T> | null;
    private tail : Node<T> | null;

        constructor(){
            this.head = this.tail = null;
        }

    public isEmpty() : boolean{
        return this.head === null;
    }

    public insertFirst(value : T){
        if(this.isEmpty()){
            this.head = this.tail = new Node(value,null);
            return;
        }
        this.head = new Node(value,this.head);
    }

    public insertLast(value : T){
        if(this.isEmpty()){
            this.head = this.tail = new Node(value,null);
            return;
        }
        let newNode = new Node(value,null);
        this.tail?.setNext(newNode);
        this.tail = newNode;
    }

    public deleteTail() : Node<T> | null{
        const deletedNode = this.tail;
        if(this.head === this.tail){
            this.head = this.tail = null;
            return deletedNode;
        }

        let currentNode = this.head, previousNode = this.head;
        while(currentNode?.getNext()){
            currentNode = currentNode.getNext();
            if(!currentNode?.getNext()){
                previousNode?.setNext(null);
                break;
            }
            previousNode = currentNode;
        }
        this.tail = previousNode;
        return deletedNode;
    }

    public deleteHead() : Node<T> | null{
        if(this.isEmpty()){
            return null;
        }
        const deletedNode = this.head;
        this.head = this.head?.getNext() ? this.head.getNext() : this.tail = null;
        return deletedNode;
    }

    public displayList(){
        let currentNode = this.head;
        while(currentNode != null){
            console.log(currentNode.getValue());
            currentNode = currentNode.getNext();
        }
    }
}