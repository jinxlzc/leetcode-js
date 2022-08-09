/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function (nums) {
    for (let i = 1; true; i++) {
        let sum = i;
        for (const num of nums) {
            sum += num;
            console.log(sum, num, i);
            if (sum < 1) {
                break;
            }
        }
        if (sum > 0) {
            return i;
        }
    }
};
const nums = [1,-2,-3];
console.log(minStartValue(nums));