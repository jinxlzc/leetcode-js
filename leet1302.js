/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var deepestLeavesSum = function(root) {
    let maxLevel = -1;
    let sum = 0;
    const dfs = (node, level) => {
        if (!node) {
            return;
        }
        if (level > maxLevel) {
            maxLevel = level;
            sum = node.val;
        } else if (level === maxLevel) {
            sum += node.val;
        }
        dfs(node.left, level + 1);
        dfs(node.right, level + 1);
    }
    dfs(root, 0);
    return sum;
};