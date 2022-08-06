/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function (words) {
    const result = [];
    for (const word of words) {
        const t=words.find(w => w !== word && w.includes(word));
        if (t) {
            result.push(word);
        }
    }
    return result;
};
const words = ["leetcode", "et", "code"];
console.log(stringMatching(words));