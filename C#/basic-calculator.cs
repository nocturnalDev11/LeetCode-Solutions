public class Solution {
    public int Calculate(string s) {
        int result = 0;
        int sign = 1;
        int currentNumber = 0;
        Stack<int> stack = new Stack<int>();
        
        for (int i = 0; i < s.Length; i++) {
            char ch = s[i];
            
            if (char.IsDigit(ch)) {
                currentNumber = currentNumber * 10 + (ch - '0');
            } else if (ch == '+') {
                result += sign * currentNumber;
                sign = 1;
                currentNumber = 0;
            } else if (ch == '-') {
                result += sign * currentNumber;
                sign = -1;
                currentNumber = 0;
            } else if (ch == '(') {
                stack.Push(result);
                stack.Push(sign);
                result = 0;
                sign = 1;
            } else if (ch == ')') {
                result += sign * currentNumber;
                result *= stack.Pop();
                result += stack.Pop();
                currentNumber = 0;
            }
        }
        
        result += sign * currentNumber;
        
        return result;
    }
}
