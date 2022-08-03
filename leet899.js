/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var orderlyQueue = function (s, k) {
    if (k === 1) {
        let max = s;
        const arr = s.split('');
        for (let i = 0; i < s.length; i++) {
            arr.push(arr.shift());
            if (arr.join('') < max) {
                max = arr.join('');
            }
        }
        return max;
    }
    const arr = s.split('');
    arr.sort();
    return arr.join('');
};
const s = "cba";
const k = 1;
console.log(orderlyQueue(s, k));