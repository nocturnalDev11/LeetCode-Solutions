class Solution {
    int lengthOfLastWord(String s) {
      String trimmedString = s.trim();
      int lastIndex = trimmedString.lastIndexOf(' ');
  
      String lastWord = lastIndex == -1 ? trimmedString : trimmedString.substring(lastIndex + 1);
      
      return lastWord.length;
    }
}
