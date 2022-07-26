/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    return generate(rowIndex + 1)[rowIndex];
};
var generate = function (numRows) {
    const res = [];
    for (let i = 0; i < numRows; i++) {
        let row = [];
        for (let j = 0; j <= i; j++) {
            if (j === 0 || j === i) {
                row.push(1);
            } else {
                row.push(res[i - 1][j - 1] + res[i - 1][j]);
            }
        }
        res.push(row);
    }
    return res;
};
console.log(getRow(1));