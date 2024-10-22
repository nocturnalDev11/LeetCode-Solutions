function maxPathSum(root: TreeNode | null): number {
    let maxSum = -Infinity;

    function helper(node: TreeNode | null): number {
        if (!node) return 0;

        const leftMax = Math.max(helper(node.left), 0);
        const rightMax = Math.max(helper(node.right), 0);

        const currentMax = node.val + leftMax + rightMax;

        maxSum = Math.max(maxSum, currentMax);

        return node.val + Math.max(leftMax, rightMax);
    }

    helper(root);
    return maxSum;
}

const root = new TreeNode(1, new TreeNode(2), new TreeNode(3));
console.log(maxPathSum(root));
