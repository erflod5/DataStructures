import { MatrixHeadboard } from './MatrixHeadBoard';
import { MatrixNode } from './MatrixNode';

export class SparseMatrix<T>{
    private Xaxis:MatrixHeadboard<T> | null;
    private Yaxis:MatrixHeadboard<T> | null;

    constructor(){
        this.Xaxis = this.Yaxis = null;
    }

    insertValue(x:number,y:number,value:T){
        let Xpivot:MatrixHeadboard<T> = this.searchX(x);
        let Ypivot:MatrixHeadboard<T> = this.searchY(y);
        let newnode = new MatrixNode(value,x,y);
        if(Xpivot.firstnode==null && Ypivot.firstnode==null){
            Xpivot.firstnode=newnode;
            Ypivot.firstnode=newnode;
            newnode.Xaxis=Xpivot;
            newnode.Yaxis=Ypivot;
            return true;
        }
    }

    private searchX(x: number){
        if(this.Xaxis==null){
            this.Xaxis = new MatrixHeadboard(x);
            return this.Xaxis;
        }else{
            let aux:MatrixHeadboard<T> | null = this.Xaxis;
            while(aux!=null){
                if(aux.coordinate==x) return aux;
                aux = aux.next;
            }
            aux = this.Xaxis;
            if(x<aux.coordinate){
                let newheadboard:MatrixHeadboard<T> = new MatrixHeadboard(x);
                newheadboard.matrix = this;
                this.Xaxis=newheadboard;
                newheadboard.next=aux;
                aux.matrix=null;
                aux.previous=newheadboard;
                return newheadboard;
            }
            let aux2:MatrixHeadboard<T> | null = aux.next;
            while(aux2!=null){
                if(x<aux2.coordinate){
                    let newheadboard:MatrixHeadboard<T> = new MatrixHeadboard(x);
                    newheadboard.next=aux2;
                    aux2.previous=newheadboard;
                    aux.next=newheadboard;
                    newheadboard.previous=aux;
                    return newheadboard;
                }
                aux = aux2;
                aux2 = aux2.next;
            }
            let newheadboard:MatrixHeadboard<T> = new MatrixHeadboard(x);
            aux.next=newheadboard;
            newheadboard.previous=aux;
            return newheadboard;
        }
    }

    private searchY(y: number):MatrixHeadboard<T>{
        if(this.Yaxis==null){
            this.Yaxis = new MatrixHeadboard(y);
            return this.Yaxis;
        }else{
            let aux:MatrixHeadboard<T> | null = this.Yaxis;
            while(aux!=null){
                if(aux.coordinate==y) return aux;
                aux = aux.next;
            }
            aux = this.Yaxis;
            if(y<aux.coordinate){
                let newheadboard:MatrixHeadboard<T> = new MatrixHeadboard(y);
                newheadboard.matrix = this;
                this.Yaxis=newheadboard;
                newheadboard.next=aux;
                aux.matrix=null;
                aux.previous=newheadboard;
                return newheadboard;
            }
            let aux2:MatrixHeadboard<T> | null = aux.next;
            while(aux2!=null){
                if(y<aux2.coordinate){
                    let newheadboard:MatrixHeadboard<T> = new MatrixHeadboard(y);
                    newheadboard.next=aux2;
                    aux2.previous=newheadboard;
                    aux.next=newheadboard;
                    newheadboard.previous=aux;
                    return newheadboard;
                }
                aux = aux2;
                aux2 = aux2.next;
            }
            let newheadboard:MatrixHeadboard<T> = new MatrixHeadboard(y);
            aux.next=newheadboard;
            newheadboard.previous=aux;
            return newheadboard;
        }
    }
}