/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {
    let ans = 0;
    const n = s.length;
    for (let i = 1; i < n; i++) {
        let score = 0;
        for (let j = 0; j < i; j++) {
            if (s[j] === '0') {
                score++;
            }
        }
        for (let j = i; j < n; j++) {
            if (s[j] === '1') {
                score++;
            }
        }
        ans = Math.max(ans, score);
    }
    return ans;
};
const s = '1';
console.log(maxScore(s));