/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function (s) {
    let flag = false;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'A') {
            if (flag) {
                return false;
            }
            flag = true;
        }
    }
    return !s.includes('LLL');
};