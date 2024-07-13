class Solution:
    def maximalRectangle(self, matrix: List[List[str]]) -> int:
        if not matrix or not matrix[0]:
            return 0
        
        rows, cols = len(matrix), len(matrix[0])
        max_area = 0
        heights = [0] * cols
        
        for i in range(rows):
            for j in range(cols):

                if matrix[i][j] == '1':
                    heights[j] += 1
                else:
                    heights[j] = 0
            
            max_area = max(max_area, self.largestRectangleArea(heights))
        
        return max_area
    
    def largestRectangleArea(self, heights: List[int]) -> int:
        heights.append(0)
        stack = [-1]
        max_area = 0
        
        for i in range(len(heights)):
            while heights[i] < heights[stack[-1]]:
                h = heights[stack.pop()]
                w = i - stack[-1] - 1
                max_area = max(max_area, h * w)
            stack.append(i)
        
        heights.pop()
        return max_area
