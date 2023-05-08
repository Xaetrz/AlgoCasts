// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
    let numCols = (2 * n) - 1;
    for (let i = 0; i < n; i++) {
        let step = "";
        let numSpaces = n - i - 1;
        for (let j = 0; j < numCols; j++) {
            if (j < numSpaces || j >= numCols - numSpaces) step += ' ';
            else step += '#';
        }
        console.log(step);
    }
    //pyramidRecursive(n);
}

// Recursive solution
function pyramidRecursive(n, row = 1, step = '') {
    if (n < row) return;

    // Print completed step
    let numCols = (2 * n) - 1;
    if (step.length === numCols) {
        console.log(step);
        // Proceed to next step
        pyramidRecursive(n, row + 1, '');
        return;
    }

    // Build step string
    let numSpaces = n - row;  // Row starts at 1 (unlike i in iterative solution), so don't need to subtract 1
    if (step.length < numSpaces || step.length >= numCols - numSpaces) pyramidRecursive(n, row, step + ' ');
    else pyramidRecursive(n, row, step + '#');    
}

module.exports = pyramid;
