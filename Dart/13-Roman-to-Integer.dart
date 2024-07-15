class Solution {
  int romanToInt(String s) {
      Map<String, int> romanValues = {
          'I': 1,
          'V': 5,
          'X': 10,
          'L': 50,
          'C': 100,
          'D': 500,
          'M': 1000
      };
      
      int result = 0;
      
      for (int i = 0; i < s.length; i++) {
          int currentValue = romanValues[s[i]] ?? 0;
        
          // If next character exists and has higher value, it's a subtractive pair
          if (i + 1 < s.length) {
              int nextValue = romanValues[s[i + 1]] ?? 0;
              if (currentValue < nextValue) {
                  result -= currentValue;
              }
              else {
                  result += currentValue;
              }
          }
          else {
              result += currentValue;
          }
      }
      return result;
    }
}
