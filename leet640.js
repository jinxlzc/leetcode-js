/**
 * @param {string} equation
 * @return {string}
 */
var solveEquation = function(equation) {
    const arr= equation.split('=');
    let left = arr[0];
    let right = arr[1];
    if (!right.startsWith('-')){
        right = '+' + right;
    }
    if (!left.startsWith('-')){
        left = '+' + left;
    }
    right=right.replace(/-/g,'A');
    right=right.replace(/\+/g,'-');
    right=right.replace(/A/g,'+');
    left =left+right;
    const arrLeft = left.split('');
    const nums = [];
    let xCount=0;
    for (let i = arrLeft.length-1; i >=0; i--) {
        if(arrLeft[i] === 'x') {
            const index=[];
            i--;
            while (arrLeft[i] !== '+' && arrLeft[i] !== '-') {
                index.unshift(arrLeft[i]);
                i--;
            }
            let indexNum = 1;
            if (index.length !== 0) {
                indexNum=Number(index.join(''));
            }
            if (arrLeft[i] === '+') {
                xCount += indexNum;
            }else {
                xCount-=indexNum;
            }
        }else {
            nums.unshift(arrLeft[i]);
        }
    }
    let num = 0;
    if (nums.length>1) {
        num = eval(nums.join(''));
    }
    if (xCount === 0 && num === 0) {
        return 'Infinite solutions';
    }
    if (xCount === 0 && num !== 0) {
        return 'No solution';
    }
        return 'x=' + -num/xCount;
};
const equation = "2x+3x-6x=x+2";
console.log(solveEquation(equation));