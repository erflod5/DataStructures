import { MatrixHeadboard } from './MatrixHeadBoard';

export class MatrixNode<T>{
    public value: T;
    public next : MatrixNode<T> | null;
    public up : MatrixNode<T> | null;
    public down : MatrixNode<T> | null;
    public left : MatrixNode<T> | null;
    public right : MatrixNode<T> | null;
    public Xaxis:MatrixHeadboard<T> | null;
    public Yaxis:MatrixHeadboard<T> | null;
    public x:number;
    public y:number;

    constructor(value : T, x: number, y:number){
        this.value = value;
        this.x =x;
        this.y = y;
        this.next = this.up = this.down = this.left = this.right = this.Xaxis = this.Yaxis = null;
    }
}