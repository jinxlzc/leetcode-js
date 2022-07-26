/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function (sentence) {
    let result = [];
    const words = sentence.split(' ');
    let i = 1;
    for (const word of words) {
        let t = '';
        if (['a', 'e', 'i', 'o', 'u'].includes(word.slice(0,1).toLowerCase())) {
            t = word;
        } else {
            t = word.slice(1) + word.slice(0, 1);
        }
        t = t + 'ma';
        for (let j = 0; j < i; j++) {
            t = t + 'a';
        }
        i++;
        result.push(t);
    }
    return result.join(' ');
};