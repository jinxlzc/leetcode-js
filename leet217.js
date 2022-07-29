/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const map = {};
    for (let i = 0; i < nums.length; i++) {
        if (map[nums[i]]) {
            return true;
        }
        map[nums[i]] = 1;
    }
    return false;
};
const nums = [1,2,3,1];
console.log(containsDuplicate(nums));