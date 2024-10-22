/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function kthLargestLevelSum(root: TreeNode | null, k: number): number {
    if (root === null) return -1;
    
    const levelSums: number[] = [];
    const queue: TreeNode[] = [root];

    while (queue.length > 0) {
        let levelSum = 0;
        const levelSize = queue.length;

        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift()!;
            levelSum += node.val;

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        levelSums.push(levelSum);
    }

    levelSums.sort((a, b) => b - a);

    return k <= levelSums.length ? levelSums[k - 1] : -1;
}
