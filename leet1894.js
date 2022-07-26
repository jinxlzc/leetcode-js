/**
 * @param {number[]} chalk
 * @param {number} k
 * @return {number}
 */
var chalkReplacer = function(chalk, k) {
    let sum = 0;
    for(let i =0 ; i<chalk.length;i++ ) {
        sum += chalk[i];
    }
    if(k % sum=== 0) {
        return 0;
    }
    sum =k%sum ;
    for(let j=0 ;j< chalk.length;j++) {
        if(sum<chalk[j]){
            return j;
        }
        sum=sum-chalk[j];
    }
};