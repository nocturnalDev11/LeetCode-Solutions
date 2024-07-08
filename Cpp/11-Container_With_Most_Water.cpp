#include <vector>
#include <algorithm>

class Solution {
public:
    int maxArea(vector<int>& height) {
        int n = height.size();
        int left = 0, right = n - 1;
        int maxArea = 0;
        
        while (left < right) {
            int minHeight = min(height[left], height[right]);
            int width = right - left;
            int currentArea = minHeight * width;
            maxArea = max(maxArea, currentArea);
            
            if (height[left] < height[right]) {
                left++;
            } else {
                right--;
            }
        }
        
        return maxArea;
    }
};
