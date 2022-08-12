/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {
    const map = {};
    for (let i = 0; i <groupSizes.length; i++) {
        if (map[groupSizes[i]]) {
            map[groupSizes[i]].push(i);
        }else {
            map[groupSizes[i]] = [i];
        }
    }
    const result = [];
    for (const key in map) {
        const arr = map[key];
        let temp = [];
        for (let i = 0; i < arr.length; i++) {
            temp.push(arr[i]);
            if (temp.length === Number(key)) {
                result.push(temp);
                temp = [];
            }
        }
    }
    return result;
};
const groupSizes = [3,3,3,3,3,1,3];
console.log(groupThePeople(groupSizes));