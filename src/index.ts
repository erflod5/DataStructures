import {LinkedList} from './LinkedList/LinkedList';
import {Queue} from './Queue/Queue';
import { Stack } from './Stack/Stack';

let list = new LinkedList();
console.log('\n------------ LINKEDLIST ------------');
list.insertLast({value : 2, name : 'Gerardo'});
list.insertLast({value : 3, name : 'Flores'});
list.insertLast({value : 4, name : 'Diaz'});
list.insertFirst({value : 1, name : 'Erik'});
list.displayList();

console.log('Deleted: ', list.deleteTail());
console.log('Deleted: ', list.deleteTail());
console.log('Deleted: ', list.deleteHead());
list.displayList();

let queue = new Queue();
console.log('\n------------ QUEUE ------------');
queue.enqueue({value : 1, name : 'Erik'});
queue.enqueue({value : 2, name : 'Gerardo'});
queue.enqueue({value : 3, name : 'Flores'});
queue.enqueue({value : 4, name : 'Diaz'});

queue.displayQueue();
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.peek());
queue.displayQueue();

let stack = new Stack();
console.log('\n------------ STACK ------------');
stack.push({value : 1, name : 'Erik'});
stack.push({value : 2, name : 'Gerardo'});
stack.push({value : 3, name : 'Flores'});
stack.push({value : 4, name : 'Diaz'});
stack.displayStack();
console.log(stack.pop());
console.log(stack.pop());
stack.displayStack();