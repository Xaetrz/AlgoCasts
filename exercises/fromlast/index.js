// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

function fromLast(list, n) {
    let curNode = list.getFirst();
    let lead = list.getFirst();

    // Move lead n spaces forward
    for (let i = 0; i < n; i++) {
        lead = lead.next;
    }

    // Use lead to detect the end of the list while being n spaces in front of curNode
    while (lead && lead.next) {
        curNode = curNode.next;
        lead = lead.next;
    }

    return curNode;
}

module.exports = fromLast;
