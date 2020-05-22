import {Node} from './Node';

export class Stack<T>{
    private head : Node<T> | null;

    constructor(){
        this.head = null;
    }

    public isEmpty() : boolean{
        return this.head == null;
    }

    public push(value : T){
        if(this.isEmpty()){
            this.head  = new Node(value);
            return;
        }
        const newNode = new Node(value,this.head);
        this.head = newNode;
    }

    public pop() : T | null {
        if(this.isEmpty()){
            return null;
        }
        const remove = this.head;
        this.head = this.head?.getNext() ? this.head.getNext() : null;
        return remove ? remove.getValue() : null;
    }

    public displayStack(){
        let currentNode = this.head;
        let index = 0;
        while(currentNode != null){
            console.log(`[${index++}] = `,currentNode.getValue());
            currentNode = currentNode.getNext();
        }
    }
}