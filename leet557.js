/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const arr=s.split(' ');
    const res=[];
    for (let arrElement of arr) {
        const tArr=arrElement.split('');
        res.push(tArr.reverse().join(''))
    }
    return res.join(' ');
};