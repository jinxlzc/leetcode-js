/**
 * @param {number} n
 * @return {number}
 */
var countSpecialNumbers = function (n) {
    let begin = 1;
    let count = 0;
    if (n <= 10) {
        return n;
    } else {
        begin = 11;
    }
    if (n > 500000) {
        begin = 500001;
        count = 407030;
    }
    if (n > 5000000) {
        begin = 5000001;
        count = 4589510;
    }
    if (n > 8000000) {
        begin = 8000001;
        count = 7408070;
    }
    if (n > 10000000) {
        begin = 10000001;
        count = 9287110;
    }
    if (n > 70000000) {
        begin = 70000001;
        count = 68198470;
    }
    for (let i = begin; i <= n; i++) {
        const str = i.toString();
        for (let j = 9; j >= 0; j--) {
            const t = j.toString();
            const newStr = str.replace(t, '');
            if (newStr.replace(t, '') !== newStr) {
                count++;
                break;
            }
        }
    }
    console.log(count);
    return n - count;
};
const n = 70000000;
console.log(countSpecialNumbers(n));