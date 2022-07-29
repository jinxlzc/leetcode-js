/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    const dp = [];
    dp[0] = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (dp[i-1]+nums[i] > nums[i]) {
            dp[i] = dp[i-1]+nums[i];
        }else {
            dp[i] = nums[i];
        }
    }
    return Math.max(...dp);
};
const nums = [-2,1,-3,4,-1,2,1,-5,4];
console.log(maxSubArray(nums));