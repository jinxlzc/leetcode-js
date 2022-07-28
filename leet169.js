/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let count = 0;
    let candidate = null;
    for (let i = 0; i < nums.length; ++i) {
        if (count === 0) {
            candidate = nums[i];
        }
        if (nums[i] === candidate) {
            ++count;
        } else {
            --count;
        }
    }
    return candidate;
};
const nums = [2, 2, 1, 1, 1, 2, 2, 1, 1];
console.log(majorityElement(nums));