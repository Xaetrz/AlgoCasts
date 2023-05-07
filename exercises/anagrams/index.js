// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    let filteredStringA = stringA.replace(/[^\w]/g, "").toLowerCase();
    let filteredStringB = stringB.replace(/[^\w]/g, "").toLowerCase();

    // Test for anagrams using sort. Inefficient but simple
    // let sortStr1 = filteredStringA.split('').sort().join('');
    // let sortStr2 = filteredStringB.split('').sort().join('');
    // return sortStr1 === sortStr2;

    // Alternative solution that counts characters in first string, then confirms if there are the same number of characters by subtracting 1 for each character in the second string.
    // Note: Must check if lengths of filtered strings are equal first
    if (filteredStringA.length !== filteredStringB.length) return false;

    let charMap = {};
    for (let c of filteredStringA) {
        //if (charMap[c] === undefined) charMap[c] = 1;
        //else charMap[c]++;
        charMap[c] = charMap[c] + 1 || 1;  // Cleaner alternative to above
    }
    for (let c of filteredStringB) {
        charMap[c]--;
        if (charMap[c] === undefined || charMap[c] < 0) return false;
    }
    return true;
}

module.exports = anagrams;
