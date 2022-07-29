/**
 * @param {number[]} p1
 * @param {number[]} p2
 * @param {number[]} p3
 * @param {number[]} p4
 * @return {boolean}
 */
var validSquare = function(p1, p2, p3, p4) {
    if (p1[0] === p2[0] && p1[1] === p2[1]) {
        return false;
    }
    if (p1[0] === p3[0] && p1[1] === p3[1]) {
        return false;
    }
    if (p1[0] === p4[0] && p1[1] === p4[1]) {
        return false;
    }
    if (p2[0] === p3[0] && p2[1] === p3[1]) {
        return false;
    }
    if (p2[0] === p4[0] && p2[1] === p4[1]) {
        return false;
    }
    if (p3[0] === p4[0] && p3[1] === p4[1]) {
        return false;
    }
    const p1p2 = Math.pow(p1[0]-p2[0],2)+Math.pow(p1[1]-p2[1],2);
    const p1p3 = Math.pow(p1[0]-p3[0],2)+Math.pow(p1[1]-p3[1],2);
    const p2p3 = Math.pow(p1[0]-p4[0],2)+Math.pow(p1[1]-p4[1],2);
    const p1p4 = Math.pow(p1[0]-p4[0],2)+Math.pow(p1[1]-p4[1],2);
    const p2p4 = Math.pow(p2[0]-p4[0],2)+Math.pow(p2[1]-p4[1],2);
    const p3p4 = Math.pow(p3[0]-p4[0],2)+Math.pow(p3[1]-p4[1],2);
    const group1 = [p1p2,p1p3,p2p3];
    group1.sort((a,b)=>a-b);
    if (group1[0] !== group1[1] || (group1[1]+group1[0]) !== group1[2]) {
        return false;
    }
    const a=group1[0];
    const l=group1[2];
    const group2 = [p1p4,p2p4,p1p2];
    group2.sort((a,b)=>a-b);
    if(group2[0]!==a||group2[1]!==a||group2[2]!==l){
        return false;
    }
    const group3 = [p1p3,p1p4,p3p4];
    group3.sort((a,b)=>a-b);
    if(group3[0]!==a||group3[1]!==a||group3[2]!==l){
        return false;
    }
    const group4 = [p2p3,p2p4,p3p4];
    group4.sort((a,b)=>a-b);
    return !(group4[0] !== a || group4[1] !== a || group4[2] !== l);
};


const p1 = [0,5];
const p2 = [1,0];
const p3 = [1,1];
const p4 = [0,1];
console.log(validSquare(p1, p2, p3, p4));