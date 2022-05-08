/**
 * ID:    02223
 * Title: Sum of Scores of Built Strings
 * Difficulty: Hard
 * Description: You are building a string s of length n one character at a time, prepending each new character to the front of the string. The strings are labeled from 1 to n, where the string with length i is labeled s i.
 * 
 * For example, for s = "abaca", s 1 == "a", s 2 == "ca", s 3 == "aca", etc.
 * 
 * The score of s i is the length of the longest common prefix between s i and s n (Note that s == s n).
 * 
 * Given the final string s, return the sum of the score of every s i.
 * 
 * Example 1:
 * 
 * Input: s = "babab" Output: 9 Explanation: For s 1 == "b", the longest common prefix is "b" which has a score of 1. For s 2 == "ab", there is no common prefix so the score is 0. For s 3 == "bab", the longest common prefix is "bab" which has a score of 3. For s 4 == "abab", there is no common prefix so the score is 0. For s 5 == "babab", the longest common prefix is "babab" which has a score of 5. The sum of the scores is 1 + 0 + 3 + 0 + 5 = 9, so we return 9.
 * 
 * Example 2:
 * 
 * Input: s = "azbazbzaz" Output: 14 Explanation: For s 2 == "az", the longest common prefix is "az" which has a score of 2. For s 6 == "azbzaz", the longest common prefix is "azb" which has a score of 3. For s 9 == "azbazbzaz", the longest common prefix is "azbazbzaz" which has a score of 9. For all other s i, the score is 0. The sum of the scores is 2 + 3 + 9 = 14, so we return 14.
 * 
 * Constraints:
 * 
 * 1 <= s.length <= 10 5
 * s consists of lowercase English letters.
 */
function solution() {
  
}

function test_02223() {
  
}

test_02223()
