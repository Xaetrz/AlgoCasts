// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);
    }

    size() {
        let num = 0;
        let curNode = this.head;
        while (curNode) {
            num++;
            curNode = curNode.next;
        }
        return num;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        if (this.head === null) return null;  // Alternatively: !this.head

        let curNode = this.head;
        while (curNode.next) {
            curNode = curNode.next;
        }
        return curNode;
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        if (this.head === null) return;
        this.head = this.head.next;
    }

    removeLast() {
        if (!this.head || !this.head.next) {
            this.head = null;
            return;
        }

        let curNode = this.head.next;
        let prevNode = this.head;
        while (curNode.next) {
            prevNode = curNode;
            curNode = curNode.next;
        }
        prevNode.next = null;
    }

    insertLast(e) {
        let newNode = new Node(e);
        
        // Handled manually
        // if (!this.head) {
        //     this.head = newNode;
        //     return;
        // }

        // let curNode = this.head;
        // while (curNode.next) {
        //     curNode = curNode.next;
        // }
        // curNode.next = newNode;

        // Handled using already-created getLast method
        let lastNode = this.getLast();
        if (lastNode) {
            lastNode.next = newNode;
        }
        else {
            this.head = newNode;
        }
    }

    getAt(i) {
        //if (!this.head) return null;  // Not needed, already handled by loop

        let curNode = this.head;
        while (curNode) {
            if (i === 0) return curNode;
            i--;
            curNode = curNode.next;
        }
        return null;
    }

    removeAt(i) {
        if (!this.head) return;
        
        if (i === 0) {
            this.head = this.head.next;
            return;
        }

        let prevNode = this.getAt(i-1);
        if (!prevNode || !prevNode.next) return; // Index doesn't exist, so nothing to do
        prevNode.next = prevNode.next.next;
    }

    insertAt(e, i) {
        
    }
}

module.exports = { Node, LinkedList };
