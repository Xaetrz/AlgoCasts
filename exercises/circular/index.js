// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

function circular(list) {
    let curNode = list.getFirst();
    let lead = list.getFirst();

    while (lead && lead.next && lead.next.next) {
        curNode = curNode.next;
        lead = lead.next.next;
        if (curNode === lead) return true;
    }
    return false;
}

module.exports = circular;
