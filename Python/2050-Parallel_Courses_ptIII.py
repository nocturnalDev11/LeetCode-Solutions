from collections import defaultdict, deque
from typing import List

class Solution:
    def minimumTime(self, n: int, relations: List[List[int]], time: List[int]) -> int:
        graph = defaultdict(list)
        indegree = [0] * (n + 1)
        for prev, nxt in relations:
            graph[prev].append(nxt)
            indegree[nxt] += 1
        
        topo_order = []
        queue = deque([i for i in range(1, n+1) if indegree[i] == 0])
        
        while queue:
            node = queue.popleft()
            topo_order.append(node)
            for neighbor in graph[node]:
                indegree[neighbor] -= 1
                if indegree[neighbor] == 0:
                    queue.append(neighbor)
        
        dp = [0] * (n + 1)
        
        for course in topo_order:
            dp[course] += time[course - 1]
            for neighbor in graph[course]:
                dp[neighbor] = max(dp[neighbor], dp[course])
        
        return max(dp)

sol = Solution()
print(sol.minimumTime(3, [[1,3],[2,3]], [3,2,5]))
