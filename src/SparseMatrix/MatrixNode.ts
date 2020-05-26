import { MatrixHeadboard } from './MatrixHeadBoard';

export class MatrixNode<T>{
    private value: T;
    private next : MatrixNode<T> | null;
    private up : MatrixNode<T> | null;
    private down : MatrixNode<T> | null;
    private left : MatrixNode<T> | null;
    private right : MatrixNode<T> | null;
    private Xaxis:MatrixHeadboard<T> | null;
    private Yaxis:MatrixHeadboard<T> | null;

    constructor(value : T, next : MatrixNode<T> | null){
        this.value = value;
        this.next = next;
        this.up = this.down = this.left = this.right = this.Xaxis = this.Yaxis = null;
    }
}