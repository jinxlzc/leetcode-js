/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function (nums) {
    if (nums.length < 3) {
        return 0;
    }
    let count = 0;
    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                if ((nums[i] + nums[j] > nums[k]) && Math.abs(nums[i] - nums[j]) < nums[k]) {
                    count++;
                }
            }
        }
    }
    return count;
};