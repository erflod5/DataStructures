import { MatrixNode } from "./MatrixNode";
import { SparseMatrix } from './SparseMatrix';

export class MatrixHeadboard<T>{
    private previous : MatrixHeadboard<T> | null;
    private next : MatrixHeadboard<T> | null;
    private coordinate: number;
    private firstnode: MatrixNode<T> | null;
    private matrix: SparseMatrix<T> | null;

    constructor(next : MatrixHeadboard<T> | null){
        this.next = next;
        this.previous = this.firstnode = this.matrix = null;
        this.coordinate = -1;
    }
}