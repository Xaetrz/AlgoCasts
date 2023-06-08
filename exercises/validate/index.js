// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

function validate(node, min = null, max = null) {
    // Reached leaf node
    if (!node) return true;

    // Validate current node
    if ((max && node.data > max) || (min && node.data < min)) return false;

    // Validate left and right children, bounded by the current node's data as the new max or min, respectively
    return validate(node.left, min, node.data) && validate(node.right, node.data, max);
}

module.exports = validate;
