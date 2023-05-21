// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
    constructor(data) {
        this.data = data;
        this.children = [];
    }

    add(data) {
        this.children.push(new Node(data));
    }

    remove(data) {
        // Standard loop to remove every child in the array that matches the given element
        // for (let i = 0; i <= this.children.length; i++) {
        //     if (this.children[i].data === data) {
        //         this.children.splice(i, 1);
        //     }
        // }

        // Another method using filter
        this.children = this.children.filter( child => child.data !== data );
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    // Run the given function on all the nodes in the tree in breadth-first order
    traverseBF(fn) {
        if (!this.root) return;
        const queue = [this.root];

        while (queue.length > 0) {
            const curNode = queue.shift();
            fn(curNode);
            queue.push(...curNode.children);  // The cleaner JS way with the spread operator

            // The standard loop way
            // for (let child of curNode.children) {
            //     queue.push(child);
            // }
        }
    }

    // Run the given function on all the nodes in the tree in depth-first order
    traverseDF(fn) {
        if (!this.root) return;
        const arr = [this.root];

        while (arr.length > 0) {
            const curNode = arr.shift();
            fn(curNode);
            arr.unshift(...curNode.children);
        }        
    }
}

module.exports = { Tree, Node };
