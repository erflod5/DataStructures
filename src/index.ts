import {LinkedList} from './LinkedList/LinkedList';

let list = new LinkedList();
list.insertLast({value : 2, name : 'Gerardo'});
list.insertLast({value : 3, name : 'Flores'});
list.insertLast({value : 4, name : 'Diaz'});
list.insertFirst({value : 1, name : 'Erik'});
list.displayList();

console.log('Deleted: ', list.deleteTail());
console.log('Deleted: ', list.deleteTail());
console.log('Deleted: ', list.deleteHead());
list.displayList();