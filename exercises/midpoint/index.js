// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }

function midpoint(list) {
    let curNode = list.getFirst();
    let lead = list.getFirst();
    
    while (lead && lead.next && lead.next.next) {
        curNode = curNode.next; // Advance by 1
        lead = lead.next.next; // Advance by 2
    }

    return curNode;
}

module.exports = midpoint;
