/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
var distanceBetweenBusStops = function(distance, start, destination) {
    if (start > destination) {
        const temp = start;
        start = destination;
        destination = temp;
    }
    if (distance.length === 1) return distance[0];
    let sumAll = 0;
    for (let i = 0; i < distance.length; i++) {
        sumAll += distance[i];
    }
    let sum = 0;
    for (let i=start; i<destination; i++) {
        sum += distance[i];
    }
    console.log(sum, sumAll);
    return Math.min(sum, sumAll - sum);
};
const distance = [1,2,3,4];
const start = 0;
const destination = 1;
distanceBetweenBusStops(distance, start, destination);