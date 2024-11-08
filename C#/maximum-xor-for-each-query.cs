public class Solution {
    public int[] GetMaximumXor(int[] nums, int maximumBit) {
        int n = nums.Length;
        int maxValue = (1 << maximumBit) - 1;
        int[] answer = new int[n];

        int xorSum = 0;
        for (int i = 0; i < n; i++) {
            xorSum ^= nums[i];
        }

        for (int i = 0; i < n; i++) {
            answer[i] = xorSum ^ maxValue;
            xorSum ^= nums[n - 1 - i];
        }
        
        return answer;
    }
}
