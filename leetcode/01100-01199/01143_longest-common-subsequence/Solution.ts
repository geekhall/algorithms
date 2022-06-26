/**
 * ID:    01143
 * Title: Longest Common Subsequence
 * Difficulty: Medium
 * Description: Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0.
 *
 * A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.
 *
 * For example, "ace" is a subsequence of "abcde".
 *
 * A common subsequence of two strings is a subsequence that is common to both strings.
 *
 * Example 1:
 *
 * Input: text1 = "abcde", text2 = "ace" Output: 3 Explanation: The longest common subsequence is "ace" and its length is 3.
 *
 * Example 2:
 *
 * Input: text1 = "abc", text2 = "abc" Output: 3 Explanation: The longest common subsequence is "abc" and its length is 3.
 *
 * Example 3:
 *
 * Input: text1 = "abc", text2 = "def" Output: 0 Explanation: There is no such common subsequence, so the result is 0.
 *
 * Constraints:
 *
 * 1 <= text1.length, text2.length <= 1000
 * text1 and text2 consist of only lowercase English characters.
 */
function longestCommonSubsequence(text1: string, text2: string): number {
  // dp[i][j] = longest common subsequence of text1[0..i] and text2[0..j]
  let dp = Array.from({ length: text1.length + 1 }, () => Array.from({ length: text2.length + 1 }, () => 0))
  for (let i = 1; i <= text1.length; ++i) {
    for (let j = 1; j <= text2.length; ++j) {
      if (text1[i - 1] === text2[j - 1])
        dp[i][j] = dp[i - 1][j - 1] + 1
      else
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
    }
  }
  console.log(dp)
  return dp[text1.length][text2.length]
};

function test_01143() {
  let text1 = "abcde", text2 = "ace"
  console.log(longestCommonSubsequence(text1, text2));
  text1 = "abc", text2 = "abc"
  console.log(longestCommonSubsequence(text1, text2));
  text1 = "abc", text2 = "def"
  console.log(longestCommonSubsequence(text1, text2));
}

test_01143()
