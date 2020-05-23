import {LinkedList} from './LinkedList/LinkedList';

import {AvlTree} from './AvlTree/AvlTree';

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
