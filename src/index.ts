import {LinkedList} from './LinkedList/LinkedList';
import {Queue} from './Queue/Queue';

import {AvlTree} from './AvlTree/AvlTree';
import { SparseMatrix } from './SparseMatrix/SparseMatrix';

console.log("LinkedList");
let list = new LinkedList();
list.insertLast({value : 2, name : 'Gerardo'});
list.insertLast({value : 3, name : 'Flores'});
list.insertLast({value : 4, name : 'Diaz'});
list.insertFirst({value : 1, name : 'Erik'});
list.displayList();

console.log("\n\nAvlTree Number");
let avl = new AvlTree('value');
avl.insert({value : 2, name : 'Estuardo'});
avl.insert({value : 3, name : 'Gomez'});
avl.insert({value : 1, name : 'Diego'});
avl.insert({value : 4, name : 'Fernandez'});
console.log("\nAvlTree [level]: ");
avl.displayTree();
console.log("\nLength: "+avl.length());
console.log("Height: "+avl.height());
console.log("Leaves: "+avl.leavesCount());

console.log("\nAvlTree Inorder: ");
avl.displayInorder();
console.log("\nAvlTree Preorder: ");
avl.displayPreorder();
console.log("\nAvlTree Postorder: ");
avl.displayPostorder();

console.log("\n\nAvlTree String");
let avlstr = new AvlTree('name');
avlstr.insert({value : 2, name : 'Estuardo'});
avlstr.insert({value : 3, name : 'Gomez'});
avlstr.insert({value : 1, name : 'Diego'});
avlstr.insert({value : 4, name : 'Fernandez'});
console.log("\nAvlTree [level]: ");
avlstr.displayTree();
console.log("\nLength: "+avlstr.length());
console.log("Height: "+avlstr.height());
console.log("Leaves: "+avlstr.leavesCount());

console.log("\nAvlTree Inorder: ");
avlstr.displayInorder();
console.log("\nAvlTree Preorder: ");
avlstr.displayPreorder();
console.log("\nAvlTree Postorder: ");
avlstr.displayPostorder();
console.log('Deleted: ', list.deleteTail());
console.log('Deleted: ', list.deleteTail());
console.log('Deleted: ', list.deleteHead());
list.displayList();

let queue = new Queue();
queue.enqueue({value : 1, name : 'Erik'});
queue.enqueue({value : 2, name : 'Gerardo'});
queue.enqueue({value : 3, name : 'Flores'});
queue.enqueue({value : 4, name : 'Diaz'});

queue.displayQueue();
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.peek());
queue.displayQueue();



console.log("\n\nSparse Matrix\n");
let matrix = new SparseMatrix();
matrix.insertValue(2,1,{value : 1, name : 'Diego'});
matrix.insertValue(4,4,{value : 2, name : 'Estuardo'});
matrix.insertValue(1,4,{value : 3, name : 'Gomez'});
matrix.insertValue(5,1,{value : 4, name : 'Fernandez'});
matrix.displayMatrix();