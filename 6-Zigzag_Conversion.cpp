#include <string>

class Solution {
public:
    /**
     * Converts the input string to a new string arranged in a zigzag pattern on a given number of rows.
     * 
     * @param s Input string to be converted.
     * @param numRows The number of rows in which the string will be rearranged into a zigzag pattern.
     * @return A string representing the zigzag pattern.
     */
    std::string convert(std::string s, int numRows) {
        if (numRows == 1) return s;
      
        std::string ans;
        int cycleLength = 2 * numRows - 2;
      
        // Loop through each row.
        for (int currentRow = 1; currentRow <= numRows; ++currentRow) {
            int interval = (currentRow == numRows) ? cycleLength : 2 * numRows - 2 * currentRow;
            int currentIndex = currentRow - 1;

            while (currentIndex < s.length()) {
                ans.push_back(s[currentIndex]);
                currentIndex += interval;
                interval = cycleLength - interval;
                if (interval == 0) {
                    interval = cycleLength;
                }
            }
        }
      
        return ans;
    }
};
