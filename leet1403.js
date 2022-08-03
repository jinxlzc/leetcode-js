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
    // let sum2 = 0;
    // let i = 0;
    // while (sum2 < sum / 2) {
    //     sum2 += sorted[i];
    //     i++;
    // }
    // const res = [];
    // for (let j = i - 1; j >= 0; j--) {
    //     res.push(sorted[j]);
    // }
    // return res;


};
const nums = [4,3,2,6,5,1];
console.log(minSubsequence(nums));