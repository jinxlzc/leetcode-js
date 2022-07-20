/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function(grid, k) {
    let n = grid.length;
    let m = grid[0].length;
    const line = [];
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            line.push(grid[i][j]);
        }
    }
    line.reverse();
    for (let i = 0; i < k; i++) {
        line.push(line.shift());
    }
    line.reverse();
    let res = [];
    let index = 0;
    for (let i = 0; i < n; i++) {
        let row = [];
        for (let j = 0; j < m; j++) {
            row.push(line[index++]);
        }
        res.push(row);
    }
    return res;
};
const grid = [[1,2,3],[4,5,6],[7,8,9]];
const k = 2;
console.log(shiftGrid(grid, k));