/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function (arr, k, x) {
    const list = [];
    let left = 0;
    let right = 0;
    const index = arr.findIndex(item => item >= x);
    if (arr[index] === x) {
        list.push(arr[index]);
        left = index - 1;
        right = index + 1;
    } else {
        if (index >= 0) {
            left = index - 1;
            right = index;
        }else {
            if (arr[0] >= x) {
                left = 0;
                right = 1;
            }else {
                left = arr.length - 1;
                right = arr.length;
            }
        }
    }
    while (list.length < k) {
        if (left < 0) {
            list.push(arr[right]);
            right++;
        } else if (right >= arr.length) {
            list.push(arr[left]);
            left--;
        } else {
            if (Math.abs(arr[left] - x) <= Math.abs(arr[right] - x)) {
                list.push(arr[left]);
                left--;
            } else {
                list.push(arr[right]);
                right++;
            }
        }
    }
    return list.sort((a, b) => a - b);

};
const arr = [3,5,8,10];
const k = 2;
const x = 15;
console.log(findClosestElements(arr, k, x));