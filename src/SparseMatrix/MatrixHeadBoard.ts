import { MatrixNode } from "./MatrixNode";
import { SparseMatrix } from './SparseMatrix';

export class MatrixHeadboard<T>{
    public previous : MatrixHeadboard<T> | null;
    public next : MatrixHeadboard<T> | null;
    public coordinate: number;
    public firstnode: MatrixNode<T> | null;
    public matrix: SparseMatrix<T> | null;

    constructor(coordinate: number){
        this.next = this.previous = this.firstnode = this.matrix = null;
        this.coordinate = coordinate;
    }
}