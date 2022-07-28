/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
    const sorted =Array.from(new Set(arr)).sort((a, b) => a - b);
    let map = {};
    for (let i = 0; i < sorted.length; i++) {
        map[sorted[i]] = i + 1;
    }
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(map[arr[i]]);
    }
    return result;
};
const arr = [10,40,10,20,30,10];
console.log(arrayRankTransform(arr));