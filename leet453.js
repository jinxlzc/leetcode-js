/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
    const minNum = Math.min(...nums);
    let res = 0;
    for (const num of nums) {
        res += num - minNum;
    }
    return res;
};