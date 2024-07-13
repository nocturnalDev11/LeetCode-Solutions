# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def maxPathSum(self, root: TreeNode) -> int:
        self.max_sum = float('-inf')
        
        def maxPathSumHelper(node):
            if not node:
                return 0
            
            left_sum = max(maxPathSumHelper(node.left), 0)
            right_sum = max(maxPathSumHelper(node.right), 0)
            
            max_single_path = node.val + max(left_sum, right_sum)
            
            max_path_through_node = node.val + left_sum + right_sum
            
            self.max_sum = max(self.max_sum, max_path_through_node)
            
            return max_single_path
        
        maxPathSumHelper(root)
        
        return self.max_sum
