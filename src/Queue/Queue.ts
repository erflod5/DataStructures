import {Node} from './Node';

export class Queue<T>{
    private head : Node<T> | null;
    private tail : Node<T> | null;

    constructor(){
        this.head = this.tail = null;
    }

    public isEmpty() : boolean{
        return this.head == null;
    }

    public enqueue(value : T){
        if(this.isEmpty()){
            this.head = this.tail = new Node(value,null);
            return;
        }
        let newNode = new Node(value,null);
        this.tail?.setNext(newNode);
        this.tail = newNode;
    }

    public dequeue() : T | null{
        if(this.isEmpty()){
            return null;
        }
        const deletedNode = this.head;
        this.head = this.head?.getNext() ? this.head.getNext() : this.tail = null;
        return deletedNode?.getValue() || null;
    }

    public displayQueue(){
        let currentNode = this.head;
        let index = 0;
        while(currentNode != null){
            console.log(`[${index++}] = `,currentNode.getValue());
            currentNode = currentNode.getNext();
        }
    }

    public peek() : T | null{
        return this.head?.getValue() || null;
    }
}