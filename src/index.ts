import {LinkedList} from './LinkedList/LinkedList';

// import { AvlNode } from './AvlTree/AvlNode';

// let node = new AvlNode({value : 2, name : 'Gerardo'}, 'name');
// console.log(node.nodeProperty());

let list = new LinkedList();
list.insertLast({value : 2, name : 'Gerardo'});
list.insertLast({value : 3, name : 'Flores'});
list.insertLast({value : 4, name : 'Diaz'});
list.insertFirst({value : 1, name : 'Erik'});
list.displayList();