class Solution {
  List<int> productExceptSelf(List<int> nums) {
        int n = nums.length;
        List<int> leftProducts = List<int>.filled(n, 1);
        List<int> rightProducts = List<int>.filled(n, 1);
        List<int> answer = List<int>.filled(n, 1);
        
        for (int i = 1; i < n; i++) {
            leftProducts[i] = leftProducts[i - 1] * nums[i - 1];
        }
        
        for (int i = n - 2; i >= 0; i--) {
            rightProducts[i] = rightProducts[i + 1] * nums[i + 1];
        }
        
        for (int i = 0; i < n; i++) {
            answer[i] = leftProducts[i] * rightProducts[i];
        }
        
        return answer;
  }
}
