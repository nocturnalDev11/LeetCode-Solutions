class Solution {
public:
    string shortestPalindrome(string s) {
        string rev_s = s;
        reverse(rev_s.begin(), rev_s.end());

        string concat = s + "#" + rev_s;

        vector<int> lps(concat.size(), 0);
        int len = 0;
        int i = 1;
        
        while (i < concat.size()) {
            if (concat[i] == concat[len]) {
                len++;
                lps[i] = len;
                i++;
            } else {
                if (len != 0) {
                    len = lps[len - 1];
                } else {
                    lps[i] = 0;
                    i++;
                }
            }
        }

        int longest_suffix_len = lps.back();
        
        string shortest_palindrome = rev_s.substr(0, rev_s.size() - longest_suffix_len) + s;
        
        return shortest_palindrome;
    }
};
