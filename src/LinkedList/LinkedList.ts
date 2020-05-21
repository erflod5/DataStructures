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

    public displayList(){
        let currentNode = this.head;
        while(currentNode != null){
            console.log(currentNode.getValue());
            currentNode = currentNode.getNext();
        }
    }
}