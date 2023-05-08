// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
    // Iterative solution
    // if (n <= 2) return 1;
    // let curr = 1;
    // let prev = 1;
    // for (let i = 3; i <= n; i++) {
    //     let temp = curr;
    //     curr += prev;
    //     prev = temp;
    // }
    // return curr;

    // Inefficient recursive solution
    // if (n <= 2) return 1;
    // return fib(n - 1) + fib(n - 2);

    // Recursive solution with memoization
    return fibMemo(n);
}

function fibMemo(n, memo = {}) {
    if (n <= 2) {
        memo[n] = 1;
        return 1;
    }
    let fibNMinus1 = memo[n - 1] || fibMemo(n - 1, memo);
    let fibNMinus2 = memo[n - 2] || fibMemo(n - 2, memo);
    memo[n] = fibNMinus1 + fibNMinus2;
    return memo[n];
}

module.exports = fib;
