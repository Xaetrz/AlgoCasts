// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
    // Straightforward iterative solution
    for (let i = 1; i <= n; i++) {
        let str = '#'; //First column always has #, so can skip a step
        for (let j = 2; j <= n; j++) {
            str += (i >= j) ? '#': ' ';
        }
        console.log(str);
    }

    // Fun with recursion, neither option is very efficient with higher number of steps due to number of calls on the call stack
    //stepsRow(n);
    //stepsCombined(n);
}

// Solution that seperates the looping across rows and building of each step
function stepsRow(n, row = 1) {
    if (n < row) return;
    console.log(stepsBuildString(n, row, 1));
    stepsRow(n, row + 1)
}

function stepsBuildStep(n, row, col) {
    if (n < col) return '';
    else if (row < col) return ' ' + stepsBuildStep(n, row, col + 1);
    else return '#' + stepsBuildStep(n, row, col + 1);
}


// Cleaner solution that combines rows and building of steps
function stepsCombined(n, row = 1, step = '') {
    if (n < row) return;

    // Print completed step
    if (n === step.length) {
        console.log(step);
        // Proceed to next step
        stepsCombined(n, row + 1, '');
        return;
    }

    // Build step string
    if (row <= step.length) stepsCombined(n, row, step + ' ');
    else stepsCombined(n, row, step + '#');    
}

module.exports = steps;
