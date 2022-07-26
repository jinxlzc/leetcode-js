/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function (nums) {
    function sortNumber(a, b) {
        return a - b
    }
    nums.sort(sortNumber);
    let max = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        if ((nums[i + 1] - nums[i]) > max) {
            max = nums[i + 1] - nums[i];
        }
    }
    return max;
};
