// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    let chunkedArr = [];
    
    // Standard solution with nested loop that assigns each index in each chunk one-by-one
    // let numChunks = Math.ceil(array.length / size);
    // for (let chunk = 0; chunk < numChunks; chunk++) {
    //     chunkedArr[chunk] = [];
    //     // Handles final chunk, which could be less than size. Fun fact: tests will still pass if I just use size, the remaining indices in the final chunk would be set to undefined.
    //     let chunkSize = Math.min(size, array.length - (chunk * size));
    //     //let chunkSize = (chunk === numChunks - 1) ? array.length - (chunk * size) : size;  // Alternative way to calculate chunkSize
    //     for (let i = 0; i < size; i++) {
    //         chunkedArr[chunk][i] = array[i + (size * chunk)];
    //     }
    // }
    // return chunkedArr;

    // Cleaner solution using JS helper slice. Slice automatically handles case where final chunk is smaller than size, simply copies remaining elements.
    let numChunks = Math.ceil(array.length / size);
    for (let chunk = 0; chunk < numChunks; chunk++) {
        chunkedArr[chunk] = array.slice(chunk * size, (chunk * size) + size);
    }
    return chunkedArr;

    // Alternative from course, loop that iterates over array instead of chunked array
    // for (let val of array) {
    //     let lastChunk = chunkedArr[chunkedArr.length - 1];
    //     if (!lastChunk || lastChunk.length === size) {
    //         chunkedArr.push([val]);
    //     }
    //     else {
    //         lastChunk.push(val);
    //     }
    // }
    // return chunkedArr;
}

module.exports = chunk;
