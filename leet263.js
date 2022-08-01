/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function(n) {
    if (n<=0) {
        return false;
    }
    const arr = [2,3,5];
    for (let i = 0; i < arr.length; i++) {
        while (n%arr[i] === 0) {
            n = n/arr[i];
        }
    }
    return n === 1;
};
const n = 6;
console.log(isUgly(n));