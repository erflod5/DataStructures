import { MatrixHeadboard } from './MatrixHeadBoard';

export class SparseMatrix<T>{
    private Xaxis:MatrixHeadboard<T> | null;
    private Yaxis:MatrixHeadboard<T> | null;

    constructor(value : T, next : SparseMatrix<T> | null){
        this.Xaxis = this.Yaxis = null;
    }
}