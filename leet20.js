/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let stack = [];
    let map = {
        '(': ')',
        '[': ']',
        '{': '}'
    };
    for (let i = 0; i < s.length; i++) {
        if (s[i] in map) {
            stack.push(s[i]);
        } else {
            if (stack.length === 0) {
                return false;
            }
            let last = stack.pop();
            if (map[last] !== s[i]) {
                return false;
            }
        }
    }
    return stack.length === 0;
};
const s = "()ww";
console.log(isValid(s));