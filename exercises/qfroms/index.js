// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
    constructor() {
        this.stack1 = new Stack();
        this.stack2 = new Stack();
    }

    add(e) {
        this.stack1.push(e);
    }

    remove() {
        Queue.#transfer(this.stack1, this.stack2);
        let e = this.stack2.pop();
        Queue.#transfer(this.stack2, this.stack1);
        return e;
    }

    peek() {
        Queue.#transfer(this.stack1, this.stack2);
        let e = this.stack2.peek();
        Queue.#transfer(this.stack2, this.stack1);
        return e;
    }

    // Pop all elements from s1 and add them to s2
    static #transfer(s1, s2) {
        while (s1.peek()) {
            s2.push(s1.pop());
        }
    }
}

module.exports = Queue;
