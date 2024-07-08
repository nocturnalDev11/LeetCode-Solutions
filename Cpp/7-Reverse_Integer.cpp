#include <climits>

class Solution {
public:
    int reverse(int x) {
        int reversedNumber = 0;
      
        while (x != 0) {
            if (reversedNumber < INT_MIN / 10 || reversedNumber > INT_MAX / 10) {
                return 0;
            }
            reversedNumber = reversedNumber * 10 + x % 10;

            x /= 10;
        }
      
        return reversedNumber;
    }
};
