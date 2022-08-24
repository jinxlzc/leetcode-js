/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function(target, arr) {
    const map = {};
    for (let i = 0; i < target.length; i++) {
        if (map[target[i]]) {
            map[target[i]]++;
        } else {
            map[target[i]] = 1;
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (map[arr[i]]) {
            map[arr[i]]--;
        } else {
            return false;
        }
    }
    return true;

};
const target = [1,2,3,4], arr = [2,4,1,3];
console.log(canBeEqual(target, arr));