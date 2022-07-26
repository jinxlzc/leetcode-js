/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
    if (num < 10) {
        return num;
    }
    let res = 0;
    while (num>0) {
        res+=num%10
        num=parseInt(num/10);
        console.log(num)
    }
    if (res>9){
        console.log(res);
        res=addDigits(res);
    }
    return res;
};