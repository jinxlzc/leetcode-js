/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    const res = [];
    let zero = 0;
    for (num of nums) {
        if(num===0){
            zero++;
        }else{
            res.push(num);
        }
    }
    for(let i=0;i<zero;i++){
        res.push(0);
    }
    for(let i = 0;i<nums.length;i++) {
        nums[i]=res[i];
    }
};