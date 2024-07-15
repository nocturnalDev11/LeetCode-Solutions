#2183. Count Array Pairs Divisible by K

from collections import defaultdict
from math import gcd
from typing import List

class Solution:
    def countPairs(self, nums: List[int], k: int) -> int:
        count = defaultdict(int)
        result = 0
        
        for num in nums:
            gcd1 = gcd(num, k)
            for gcd2, cnt in count.items():
                if gcd1 * gcd2 % k == 0:
                    result += cnt
            
            count[gcd1] += 1
        
        return result

sol = Solution()
print(sol.countPairs([1, 2, 3, 4, 5], 2))
print(sol.countPairs([1, 2, 3, 4], 5))
