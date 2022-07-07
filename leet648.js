/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function(dictionary, sentence) {
    let dict = new Set(dictionary);
    let words = sentence.split(' ');
    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < dictionary.length; j++) {
            const word = words[i].substring(0, j+1);
            if (dict.has(word)) {
                words[i] = word;
                break;
            }
        }
    }
    return words.join(' ');
};
const dictionary = ["cat","bat","rat"];
const sentence = "the cattle was rattled by the battery";
console.log(replaceWords(dictionary, sentence));