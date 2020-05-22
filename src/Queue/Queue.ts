import {Node} from './Node';

export class Queue<T>{
    private head : Node<T> | null;
    private tail : Node<T> | null;
    private size : number;

    constructor(){
        this.head = this.tail = null;
        this.size = 0;
    }

    public isEmpty() : boolean{
        return this.head == null;
    }

    public enqueue(value : T){
        if(this.isEmpty()){
            this.head = this.tail = new Node(value,null,this.size++);
            return;
        }
        let newNode = new Node(value,null,this.size++);
        this.tail?.setNext(newNode);
        this.tail = newNode;
    }

    public dequeue() : Node<T> | null{
        const deletedNode = this.tail;
        if(this.head === this.tail){
            this.head = this.tail = null;
            this.size--;
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
        this.size--;
        return deletedNode;
    }

    public displayQueue(){
        let currentNode = this.head;
        while(currentNode != null){
            console.log(`[${currentNode.getIndex()}] = `,currentNode.getValue());
            currentNode = currentNode.getNext();
        }
    }
}