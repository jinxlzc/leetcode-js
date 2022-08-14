/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var largestLocal = function (grid) {
    let result = [];
    for (let i = 0; i < grid.length - 2; i++) {
        const row = [];
        for (let j = 0; j < grid[0].length - 2; j++) {
            const max = getMax(grid.slice(i, i + 3).map(row => row.slice(j, j + 3)));
            row.push(max);
        }
        result.push(row);
    }
    return result;
};

function getMax(grid) {
    let max = grid[0][0];
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] > max) {
                max = grid[i][j];
            }
        }
    }
    return max;
}

const grid = [[9, 9, 8, 1], [5, 6, 2, 6], [8, 2, 6, 4], [6, 2, 2, 2]];
console.log(largestLocal(grid));