// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    let vowelsObj = {'a':1, 'e':1, 'i':1, 'o':1, 'u':1};
    let vowelsArr = ['a', 'e', 'i', 'o', 'u'];
    let vowelsStr = "aeiou";
    let count = 0;
    for (let c of str.toLowerCase()) {
        // Multiple ways to check for vowels
        //if (c === 'a' || c === 'e' || c === 'i' || c === 'o' || c === 'u') count++;
        //if (vowelsObj[c] !== undefined) count++;
        //if (vowelsArr.includes(c)) count++;
        if (vowelsStr.includes(c)) count++;
    }
    return count;

    // Regex solution for course
    // const matches = str.match(/[aeiou]/gi);
    // return matches ? matches.length: 0; // Handle null case

    // Attemp at a solution using reduce. Broken, need to go back and fix this.
    //return str.toLowerCase().split('').reduce( (count, char) => vowelsArr.includes(char) ? 1: 0 );
}

module.exports = vowels;
