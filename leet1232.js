/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function (coordinates) {
    if (coordinates.length === 2) {
        return true;
    }
    const x1= coordinates[0][0];
    const y1= coordinates[0][1];
    const x2= coordinates[1][0];
    const y2= coordinates[1][1];
    const slope = (y2 - y1) / (x2 - x1);
    for (let i = 2; i < coordinates.length; i++) {
        const tSlop= (coordinates[i][1] - coordinates[i-1][1]) / (coordinates[i][0] - coordinates[i-1][0]);
        if (!isFinite(slope)&&!isFinite(tSlop)) {
            continue;
        }
        if (slope!==tSlop){
            return false
        }
    }
    return true;
};
const coordinates = [[3,1],[6,2],[9,3]];
console.log(checkStraightLine(coordinates));