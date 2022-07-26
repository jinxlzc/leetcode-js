/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length===0){
        return '';
    }
    if(strs.length===1){
        return strs[0];
    }
    for(let i=1;i<=strs[0].length;i++){
        const str=strs[0].slice(0,i);
        for(let j = 1;j<strs.length;j++){
            if(!strs[j].startsWith(str)){
                return strs[0].slice(0,i-1);
            }
        }
    }
    return strs[0];
};