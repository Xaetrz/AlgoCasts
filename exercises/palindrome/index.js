// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    // for (let i = 0; i < str.length / 2; i++) {
    //     if (str[i] !== str[str.length - i - 1]) return false;
    // }
    // return true;

    // Completely absurd alternative solution. Reverse the second half of the string and compares it to the first half.
    // floor/ceiling of the middle index necessary to handle palindromes with an odd number of characters. Note that the end index of the slice method is non-inclusive.
    let strArr = str.split('');
    let midIdx = strArr.length / 2;
    let firstHalf = strArr.slice(0, Math.ceil(midIdx)).join('');
    let revSecondHalf = strArr.slice(Math.floor(midIdx), strArr.length).reverse().join('')
    return firstHalf === revSecondHalf;
}

module.exports = palindrome;
