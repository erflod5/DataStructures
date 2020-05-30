import { MatrixHeadboard } from './MatrixHeadBoard';
import { MatrixNode } from './MatrixNode';

export class SparseMatrix<T>{
    private Xaxis: MatrixHeadboard<T> | null;
    private Yaxis: MatrixHeadboard<T> | null;

    constructor() {
        this.Xaxis = this.Yaxis = null;
    }

    displayMatrix() {
        let aux: MatrixHeadboard<T> | null = this.Xaxis;
        process.stdout.write("\t");
        while (aux != null) {
            process.stdout.write(aux.coordinate + "\t");
            aux = aux.next;
        }
        console.log();
        aux = this.Yaxis;
        while (aux != null) {
            process.stdout.write(aux.coordinate + " ");
            let node: MatrixNode<T> | null = aux.firstnode;
            while (node != null) {
                process.stdout.write(JSON.stringify(node.value) + "(" + node.x + "," + node.y + ") ");
                node = node.right;
            }
            console.log();
            aux = aux.next;
        }
    }

    insertValue(x: number, y: number, value: T) {
        let Xpivot: MatrixHeadboard<T> = this.searchX(x);
        let Ypivot: MatrixHeadboard<T> = this.searchY(y);
        let newnode = new MatrixNode(value, x, y);
        if (Xpivot.firstnode == null && Ypivot.firstnode == null) {
            Xpivot.firstnode = newnode;
            Ypivot.firstnode = newnode;
            newnode.Xaxis = Xpivot;
            newnode.Yaxis = Ypivot;
            return true;
        } else if (Xpivot.firstnode == null) {
            Xpivot.firstnode = newnode;
            newnode.Xaxis = Xpivot;
            let aux: MatrixNode<T> | null = Ypivot.firstnode;
            while (aux?.right?.x != null) {
                if (x == aux.x) return false;
                if (x < aux.x) {
                    if (aux.Yaxis == null) {
                        if (aux.left != null) aux.left.right = newnode;
                        newnode.left = aux.left;
                        newnode.right = aux;
                        aux.left = newnode;
                        return true;
                    } else {
                        aux.left = newnode;
                        newnode.right = aux;
                        Ypivot.firstnode = newnode;
                        newnode.Yaxis = Ypivot;
                        aux.Yaxis = null;
                        return true;
                    }
                }
                aux = aux.right;
            }
            if (aux != null) {
                if (x == aux.x) return false;
                if (x < aux.x) {
                    if (aux.Yaxis == null) {
                        if (aux.left != null) aux.left.right = newnode;
                        newnode.left = aux.left;
                        newnode.right = aux;
                        aux.left = newnode;
                        return true;
                    } else {
                        aux.left = newnode;
                        newnode.right = aux;
                        Ypivot.firstnode = newnode;
                        newnode.Yaxis = Ypivot;
                        aux.Yaxis = null;
                        return true;
                    }
                }
                aux.right = newnode;
                newnode.left = aux;
                return true;
            }
        } else if (Ypivot.firstnode == null) {
            Ypivot.firstnode = newnode;
            newnode.Yaxis = Ypivot;
            let aux: MatrixNode<T> | null = Xpivot.firstnode;
            while (aux.down != null) {
                if (y == aux.y) return false;
                if (y < aux.y) {
                    if (aux.Xaxis == null) {
                        if (aux.up != null) aux.up.down = newnode;
                        newnode.up = aux.up;
                        newnode.down = aux;
                        aux.up = newnode;
                        return true;
                    } else {
                        aux.up = newnode;
                        newnode.down = aux;
                        Xpivot.firstnode = newnode;
                        newnode.Xaxis = Xpivot;
                        aux.Xaxis = null;
                        return true;
                    }
                }
                aux = aux?.down;
            }
            if (y == aux.y) return false;
            if (y < aux.y) {
                if (aux.Xaxis == null) {
                    if (aux.up != null) aux.up.down = newnode;
                    newnode.up = aux.up;
                    newnode.down = aux;
                    aux.up = newnode;
                    return true;
                } else {
                    aux.up = newnode;
                    newnode.down = aux;
                    Xpivot.firstnode = newnode;
                    newnode.Xaxis = Xpivot;
                    aux.Xaxis = null;
                    return true;
                }
            }
            aux.down = newnode;
            newnode.up = aux;
            return true;
        } else {
            let flag: boolean = false;
            let aux: MatrixNode<T> | null = Ypivot.firstnode;
            while (aux.right != null) {
                if (x == aux.x) {
                    return false;
                }
                if (x < aux.x) {
                    if (aux.Yaxis == null) {
                        if (aux.left != null) aux.left.right = newnode;
                        newnode.left = aux.left;
                        newnode.right = aux;
                        aux.left = newnode;
                        flag = true;
                        break;
                    } else {
                        aux.left = newnode;
                        newnode.right = aux;
                        Ypivot.firstnode = newnode;
                        newnode.Yaxis = Ypivot;
                        aux.Yaxis = null;
                        flag = true;
                        break;
                    }
                }
                aux = aux?.right;
            }
            if (!flag) {
                if (x == aux.x) return false;
                if (x < aux.x) {
                    if (aux.Yaxis == null) {
                        if (aux.left != null) aux.left.right = newnode;
                        newnode.left = aux.left;
                        newnode.right = aux;
                        aux.left = newnode;
                        flag = true;
                    } else {
                        aux.left = newnode;
                        newnode.right = aux;
                        Ypivot.firstnode = newnode;
                        newnode.Yaxis = Ypivot;
                        aux.Yaxis = null;
                        flag = true;
                    }
                }
            }
            if (!flag) {
                aux.right = newnode;
                newnode.left = aux;
                flag = true;
            }

            aux = Xpivot.firstnode;
            while (aux.down != null) {
                if (y == aux.y) return false;
                if (y < aux.y) {
                    if (aux.Xaxis == null) {
                        if (aux.up != null) aux.up.down = newnode;
                        newnode.up = newnode.up;
                        newnode.down = aux;
                        aux.up = newnode;
                        return flag;
                    } else {
                        aux.up = newnode;
                        newnode.down = aux;
                        Xpivot.firstnode = newnode;
                        newnode.Xaxis = Xpivot;
                        aux.Xaxis = null;
                        return flag;
                    }
                }
                aux = aux?.down;
            }
            if (y == aux.y) return false;
            if (y < aux.y) {
                if (aux.Xaxis == null) {
                    if (aux.up != null) aux.up.down = newnode;
                    newnode.up = aux.up;
                    newnode.down = aux;
                    aux.down = newnode;
                    return flag;
                } else {
                    aux.up = newnode;
                    newnode.down = aux;
                    Xpivot.firstnode = newnode;
                    newnode.Xaxis = Xpivot;
                    aux.Xaxis = null;
                    return flag;
                }
            }
            aux.down = newnode;
            newnode.up = aux;
            return true;
        }
    }

    private searchX(x: number): MatrixHeadboard<T> {
        if (this.Xaxis == null) {
            this.Xaxis = new MatrixHeadboard(x);
            return this.Xaxis;
        } else {
            let aux: MatrixHeadboard<T> | null = this.Xaxis;
            while (aux != null) {
                if (aux.coordinate == x) return aux;
                aux = aux.next;
            }
            aux = this.Xaxis;
            if (x < aux.coordinate) {
                let newheadboard: MatrixHeadboard<T> = new MatrixHeadboard(x);
                newheadboard.matrix = this;
                this.Xaxis = newheadboard;
                newheadboard.next = aux;
                aux.matrix = null;
                aux.previous = newheadboard;
                return newheadboard;
            }
            let aux2: MatrixHeadboard<T> | null = aux.next;
            while (aux2 != null) {
                if (x < aux2.coordinate) {
                    let newheadboard: MatrixHeadboard<T> = new MatrixHeadboard(x);
                    newheadboard.next = aux2;
                    aux2.previous = newheadboard;
                    aux.next = newheadboard;
                    newheadboard.previous = aux;
                    return newheadboard;
                }
                aux = aux2;
                aux2 = aux2.next;
            }
            let newheadboard: MatrixHeadboard<T> = new MatrixHeadboard(x);
            aux.next = newheadboard;
            newheadboard.previous = aux;
            return newheadboard;
        }
    }

    private searchY(y: number): MatrixHeadboard<T> {
        if (this.Yaxis == null) {
            this.Yaxis = new MatrixHeadboard(y);
            return this.Yaxis;
        } else {
            let aux: MatrixHeadboard<T> | null = this.Yaxis;
            while (aux != null) {
                if (aux.coordinate == y) return aux;
                aux = aux.next;
            }
            aux = this.Yaxis;
            if (y < aux.coordinate) {
                let newheadboard: MatrixHeadboard<T> = new MatrixHeadboard(y);
                newheadboard.matrix = this;
                this.Yaxis = newheadboard;
                newheadboard.next = aux;
                aux.matrix = null;
                aux.previous = newheadboard;
                return newheadboard;
            }
            let aux2: MatrixHeadboard<T> | null = aux.next;
            while (aux2 != null) {
                if (y < aux2.coordinate) {
                    let newheadboard: MatrixHeadboard<T> = new MatrixHeadboard(y);
                    newheadboard.next = aux2;
                    aux2.previous = newheadboard;
                    aux.next = newheadboard;
                    newheadboard.previous = aux;
                    return newheadboard;
                }
                aux = aux2;
                aux2 = aux2.next;
            }
            let newheadboard: MatrixHeadboard<T> = new MatrixHeadboard(y);
            aux.next = newheadboard;
            newheadboard.previous = aux;
            return newheadboard;
        }
    }
}