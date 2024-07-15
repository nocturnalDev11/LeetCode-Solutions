class Solution {
    String countAndSay(int n) {
        if (n == 1) {
          return "1";
        }
        
        String currentSeq = "1";
        
        for (int i = 2; i <= n; i++) {
            StringBuffer nextSeq = StringBuffer();
            int start = 0;
            int end = 0;
          
            while (end < currentSeq.length) {
                while (end < currentSeq.length && currentSeq[start] == currentSeq[end]) {
                    end++;
                }
                int count = end - start;
                nextSeq.write('$count${currentSeq[start]}');
                start = end;
            }
            currentSeq = nextSeq.toString();
        }
        return currentSeq;
    }
}
