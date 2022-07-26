/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    const flag = ['a', 'e', 'i', 'u', 'o','A', 'E', 'I', 'U', 'O'];
    let begin = 0;
    let end = s.length - 1;
    const arr = s.split('');
    while (end > begin) {
        if (flag.includes(arr[begin]) && flag.includes(arr[end])) {
            const t = arr[end];
            arr[end] = arr[begin];
            arr[begin] = t;
            begin++;
            end--;
        }
        if (!flag.includes(arr[begin])) {
            begin++;
        }
        if (!flag.includes(arr[end])) {
            end--;
        }
    }
    return arr.join('');
};