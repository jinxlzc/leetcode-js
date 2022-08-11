/**
 * @param {string} s
 * @return {string}
 */
var reformat = function(s) {
    const arr = s.split('');
    const nums = [];
    const chars = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= '0' && arr[i] <= '9') {
            nums.push(arr[i]);
        }else {
            chars.push(arr[i]);
        }
    }
    if(Math.abs(nums.length - chars.length) > 1) {
        return '';
    }
    const result = [];
    if (nums.length > chars.length) {
        for (let i = 0; i < chars.length; i++) {
            result.push(nums[i]);
            result.push(chars[i]);
        }
        result.push(nums[nums.length-1]);
    }else if (nums.length < chars.length) {
        for (let i = 0; i < nums.length; i++) {
            result.push(chars[i]);
            result.push(nums[i]);
        }
        result.push(chars[chars.length-1]);
    } else {
        for (let i = 0; i < nums.length; i++) {
            result.push(chars[i]);
            result.push(nums[i]);
        }
    }
    return result.join('');
};
const s = "a0b1c2";
console.log(reformat(s));