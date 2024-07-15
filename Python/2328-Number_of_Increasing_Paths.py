#2328. Number of Increasing Paths in a Grid

from typing import List

MOD = 10**9 + 7

class Solution:
    def countPaths(self, grid: List[List[int]]) -> int:
        m, n = len(grid), len(grid[0])
        memo = [[-1] * n for _ in range(m)]
        
        def dfs(x, y):
            if memo[x][y] != -1:
                return memo[x][y]
            
            result = 1
            for dx, dy in [(-1, 0), (1, 0), (0, -1), (0, 1)]:
                nx, ny = x + dx, y + dy
                if 0 <= nx < m and 0 <= ny < n and grid[nx][ny] > grid[x][y]:
                    result = (result + dfs(nx, ny)) % MOD
            
            memo[x][y] = result
            return result
        
        total_paths = 0
        for i in range(m):
            for j in range(n):
                total_paths = (total_paths + dfs(i, j)) % MOD
        
        return total_paths

sol = Solution()
print(sol.countPaths([[1,1],[3,4]]))
print(sol.countPaths([[1],[2]]))
