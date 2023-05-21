// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
    let arr = [{node: root, depth: 0}];
    let widths = [];

    while (arr.length) {
        const cur = arr.shift();
        widths[cur.depth] = widths[cur.depth] + 1 || 1;

        for (let child of cur.node.children) {
            arr.push({node: child, depth: cur.depth + 1});
        }
    }
    return widths;
}

module.exports = levelWidth;
