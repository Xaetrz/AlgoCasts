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
        //if (countMap[c] === undefined) countMap[c] = 1;
        //else countMap[c]++;
        countMap[c] = countMap[c] + 1 || 1; // Cleaner alternative to above
        if (countMap[maxChar] < countMap[c]) maxChar = c;
    }
    return maxChar;
}

module.exports = maxChar;
