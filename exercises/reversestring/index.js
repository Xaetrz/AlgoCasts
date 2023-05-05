// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    // lol - the lazy man's implementation via str->arr->str
    //return str.split('').reverse().join('');  
    
    // Simple reverse loop
    // A stringbuilder would be much better in other languages, but JS optimizes string concatenation
    // let revStr = "";
    // for (let i = str.length - 1; i >= 0; i--) {
    //     revStr += str[i];
    // }
    // return revStr;

    // Cleaner for syntax
    // let revStr = "";
    // for (let char of str) {
    //     revStr = char + revStr;
    // }
    // return revStr;

    // Fun with the reduce function
    // return str.split('').reduce( (previousValue, currentValue) => { 
    //     return currentValue + previousValue; 
    // }, "" );

    // Fun with the reduce function, newer syntax
    return str.split('').reduce( (rev, char) => char + rev, "" );
}

module.exports = reverse;
