/**
 * @param {string} s
 * @param {string[]} words
 * @return {boolean}
 */
var isPrefixString = function(s, words) {
    let str='';
    for(const word of words) {
        str +=word
        if(s===str){
            return true;
        }
    }
    return false;
};