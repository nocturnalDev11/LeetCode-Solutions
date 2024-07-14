#Non-negative Integers without Consecutive Ones
class Solution:
    def findIntegers(self, n: int) -> int:
        binary = bin(n)[2:]
        k = len(binary)

        dp = [0] * (k + 1)
        dp[0] = 1
        dp[1] = 2

        for i in range(2, k + 1):
            dp[i] = dp[i - 1] + dp[i - 2]

        result = 0
        prev_bit = 0

        for i in range(k):
            if binary[i] == '1':
                result += dp[k - i - 1]
                if prev_bit == 1:
                    return result
                prev_bit = 1
            else:
                prev_bit = 0

        return result + 1

# Example usage:
solution = Solution()
print(solution.findIntegers(5))
print(solution.findIntegers(1))
print(solution.findIntegers(2))
