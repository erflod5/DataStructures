import {LinkedList} from './LinkedList/LinkedList';
import {Queue} from './Queue/Queue';

let list = new LinkedList();
list.insertLast({value : 2, name : 'Gerardo'});
list.insertLast({value : 3, name : 'Flores'});
list.insertLast({value : 4, name : 'Diaz'});
list.insertFirst({value : 1, name : 'Erik'});
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