/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const sArr = s.split('');
    const tArr = t.split('');
    const map = {};
    for (const sChar of sArr) {
        if (map[sChar]) {
            map[sChar]++;
        }else {
            map[sChar] = 1;
        }
    }
    for (const tChar of tArr) {
        if (map[tChar]) {
            if (map[tChar] === 0) {
                return false;
            }
            map[tChar]--;
        }else {
            return false;
        }
    }
    for (const key in map) {
        if (map[key] !== 0) {
            return false;
        }
    }
    return true;
};
const s = "anagram";
const t = "nagaram";
console.log(isAnagram(s, t));