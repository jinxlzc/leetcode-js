/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let arr = [];
    while (n !== 1) {
        if (arr.includes(n)) {
            return false;
        }
        arr.push(n);
        n = getNext(n);
    }
    return true;
};
var getNext = function(n) {
    let sum = 0;
    while (n > 0) {
        let temp = n % 10;
        sum += temp * temp;
        n = Math.floor(n / 10);
    }
    return sum;
}
const n = 19;
console.log(isHappy(n));