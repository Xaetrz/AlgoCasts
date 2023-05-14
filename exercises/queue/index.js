// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
    queue = [];
    start = 0;
    end = 0;
    maxLength = 2;

    add(e) {
        this.queue.push(e);
        this.end++;
        // To (help) avoid a large memory leak at the start of the array, will recreate the array with all the elements shifted back to the start
        if (this.end > this.maxLength) {
            let newArr = this.queue.slice(this.start, this.end);
            this.end = this.end - this.start;
            this.start = 0;
            this.queue = newArr;
            this.maxLength *= 2; // Will double the maxLength each time this is done to prevent resizing too often
        }
    }

    remove() {
        let e = this.queue[this.start];
        delete this.queue[this.start];
        this.start++;
        return e;
    }
}

module.exports = Queue;
