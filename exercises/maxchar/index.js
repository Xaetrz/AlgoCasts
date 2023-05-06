// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let countMap = {};
    let maxChar = str[0];
    for (let c of str) {
        if (countMap[c] === undefined) countMap[c] = 0;
        else countMap[c]++;
        if (countMap[maxChar] < countMap[c]) maxChar = c;
    }
    return maxChar;
}

module.exports = maxChar;
