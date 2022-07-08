/**
 * @param {number[]} position
 * @return {number}
 */
var minCostToMoveChips = function(position) {
    let even = 0, odd = 0;
    for (const pos of position) {
        if ((pos & 1) !== 0) {
            odd++;
        } else {
            even++;
        }
    }
    return Math.min(odd, even);
};
const position = [1,1000000000];
console.log(minCostToMoveChips(position));