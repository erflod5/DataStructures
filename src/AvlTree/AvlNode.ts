export class AvlNode<T>{
    protected value: T;
    protected left: AvlNode<T> | null;
    protected right: AvlNode<T> | null;
    protected quantity: number;
    protected b_factor: number;
    protected property: string;

    constructor(value: T, property: string);
    constructor(value: T, property: string, b_factor: number);
    constructor(value: T, property: string, leftbranch: AvlNode<T>, rightbranch: AvlNode<T>);
    constructor(value: T, property: string, leftbranch: AvlNode<T>, rightbranch: AvlNode<T>, b_factor: number);
    constructor(...args: Array<any>) {
        let value = args[0];
        this.value = value;
        this.property = args[1];
        switch (args.length) {
            case 2:
                this.left = this.right = null;
                this.b_factor = 0;
                this.quantity = 1;
                break;
            case 3:
                this.left = this.right = null;
                this.b_factor = args[2];
                this.quantity = 1;
                break;
            case 4:
                this.left = args[2];
                this.right = args[3];
                this.b_factor = 0;
                this.quantity = 1;
                break;
            case 5:
                this.left = args[2];
                this.right = args[3];
                this.b_factor = args[4];
                this.quantity = 1;
                break;
            default:
                throw new Error("Incorrect amount of arguments");
        }
    }

    nodeValue(): T { return this.value; }
    nodeProperty(): any { return JSON.parse(JSON.stringify(this.value))[this.property]; };
    subLeft(): AvlNode<T> | null { return this.left; }
    subRight(): AvlNode<T> | null { return this.right; }
    newValue(value: T): void { this.value = value; }
    leftBranch(left: AvlNode<T> | null): void { this.left = left; }
    rightBranch(right: AvlNode<T> | null): void { this.right = right; }
    setFactor(b_factor: number): void { this.b_factor = b_factor; }
    getFactor(): number { return this.b_factor; }

}