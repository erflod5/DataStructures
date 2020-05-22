export class Node<T>{
    private value: T;
    private next : Node<T> | null;
    private index : number;

    constructor(value : T, next : Node<T> | null, index : number){
        this.value = value;
        this.next = next;
        this.index = index;
    }

    public setValue(value : T){
        this.value = value;
    }

    public getValue() : T{
        return this.value;
    }

    public setNext(next : Node<T> | null){
        this.next = next;
    }

    public getNext() : Node<T> | null{
        return this.next;
    }

    public getIndex() : number{
        return this.index;
    }

    public toString(){
        return this.value;
    }
}