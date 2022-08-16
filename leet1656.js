/**

 @param {number} n
 */
var OrderedStream = function (n) {
    this.ptr = 0;
    this.arr = new Array(n);
};
/**

 @param {number} idKey
 @param {string} value
 @return {string[]}
 */
OrderedStream.prototype.insert = function (idKey, value) {
    this.arr[idKey - 1] = value;
    if (idKey - 1 === this.ptr) {
        let end = this.ptr;
        while (this.arr[end]) {
            end++;
        }
        let result = this.arr.slice(this.ptr, end);
        this.ptr = end;
        return result;
    } else {
        return [];
    }
};
/**

 Your OrderedStream object will be instantiated and called as such:
 var obj = new OrderedStream(n)
 var param_1 = obj.insert(idKey,value)
 */