#2196. Create Binary Tree From Descriptions
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def createBinaryTree(self, descriptions):
        nodes = {}
        children = set()
        
        for parent_val, child_val, is_left in descriptions:
            if parent_val not in nodes:
                nodes[parent_val] = TreeNode(parent_val)
            if child_val not in nodes:
                nodes[child_val] = TreeNode(child_val)
                
            if is_left == 1:
                nodes[parent_val].left = nodes[child_val]
            else:
                nodes[parent_val].right = nodes[child_val]
                
            children.add(child_val)
        
        root_val = None
        for parent_val in nodes:
            if parent_val not in children:
                root_val = parent_val
                break
                
        return nodes[root_val]

descriptions = [[20, 15, 1], [20, 17, 0], [50, 20, 1], [50, 80, 0], [80, 19, 1]]
sol = Solution()
root = sol.createBinaryTree(descriptions)

def print_tree(root):
    if not root:
        return []
    result, queue = [], [root]
    while queue:
        node = queue.pop(0)
        if node:
            result.append(node.val)
            queue.append(node.left)
            queue.append(node.right)
        else:
            result.append(None)
    while result and result[-1] is None:
        result.pop()
    return result

print(print_tree(root))
