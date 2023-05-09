// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    // Initialize a multi-dimensional array the standard way with nested loops
    // let mat = [];
    // for (let i = 0; i < n; i++) {
    //     mat[i] = [];
    //     for (let j = 0; j < n; j++) {
    //         mat[i][j] = 0;
    //     }
    // }

    // Initialize a multi-dimensional array the javascript way
    let mat = Array(n).fill(0).map(x => Array(n).fill(0));

    // Alternative solution that cycles between directions in a clockwise pattern
    const Direction = {
        Up: 'Up',
        Down: 'Down',
        Left: 'Left',
        Right: 'Right'
      };

    let row = 0, col = 0, nextDir = Direction.Right; // Need to prioritize going a specific direction until we bump into either the end of the matrix or to an index we already assigned to
    for (let iterator = 1; iterator <= n * n; iterator++) {
        mat[row][col] = iterator;

        if (nextDir === Direction.Right && col + 1 < n && !mat[row][col + 1]) {
            col++;
            continue;
        }
        else if (nextDir === Direction.Right) {
            nextDir = Direction.Down;
        }

        if (nextDir === Direction.Down && row + 1 < n && !mat[row + 1][col]) {
            row++;
            continue;
        }
        else if (nextDir === Direction.Down) {
            nextDir = Direction.Left;
        }

        if (nextDir === Direction.Left && col - 1 >= 0 && !mat[row][col - 1]) {
            col--;
            continue;
        }
        else if (nextDir === Direction.Left) {
            nextDir = Direction.Up;
        }
        
        if (nextDir === Direction.Up && row - 1 >= 0 && !mat[row - 1][col] ) {
            row--;
            continue;
        }
        else if (nextDir === Direction.Up) {
            nextDir = Direction.Right;
            col++;  // Very important to move E here since we're assigning the iterator on each iteration of the loop
        }
    }

    // Solution that works through the matrix in layers, starting with the outmost layer
    // let startCol = 0, startRow = 0;
    // let endCol = n - 1, endRow = n - 1;
    // let curNum = 1;
    // while (curNum <= n * n) {
    //     // Top side
    //     for (let curCol = startCol; curCol <= endCol; curCol++) {
    //         mat[startRow][curCol] = curNum;
    //         curNum++;
    //     }

    //     // Right side
    //     for (let curRow = startRow + 1; curRow <= endRow; curRow++) {
    //         mat[curRow][endCol] = curNum;
    //         curNum++;
    //     }
    //     // Bottom side
    //     for (let curCol = endCol - 1; curCol >= startCol; curCol--) {
    //         mat[endRow][curCol] = curNum;
    //         curNum++;
    //     }

    //     // Left side
    //     for (let curRow = endRow - 1; curRow >= startRow + 1; curRow--) {
    //         mat[curRow][startCol] = curNum;
    //         curNum++;
    //     }

    //     // Shift a layer deeper
    //     startCol++, startRow++;
    //     endCol--, endRow--;
    // }

    return mat;
}

module.exports = matrix;
