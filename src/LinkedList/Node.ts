export class Node<T>{
    private value: T;
    private next : Node<T> | null;

    constructor(value : T, next : Node<T> | null){
        this.value = value;
        this.next = next;
    }

    public setValue(value : T){
        this.value = value;
    }

    public getValue() : T{
        return this.value;
    }

    public setNext(next : Node<T>){
        this.next = next;
    }

    public getNext() : Node<T> | null{
        return this.next;
    }

    public toString(){
        return this.value;
    }
}