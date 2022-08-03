/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minSubsequence = function(nums) {
    const sum = nums.reduce((acc, cur) => acc + cur, 0);
    const sorted = nums.sort((a, b) => b - a);
    const result = [];
    for (let i = 0; i < sorted.length; i++) {
        result.push(sorted[i]);
        if (result.reduce((acc, cur) => acc + cur, 0) > sum / 2) {
            break;
        }
    }
    return result;
};
const nums = [4,3,2,6,5,1];
console.log(minSubsequence(nums));