/**
 * ID:    00516
 * Title: Longest Palindromic Subsequence
 * Difficulty: Medium
 * Description: Given a string s, find the longest palindromic subsequence 's length in s.
 *
 * A subsequence is a sequence that can be derived from another sequence by deleting some or no elements without changing the order of the remaining elements.
 *
 * Example 1:
 *
 * Input: s = "bbbab" Output: 4 Explanation: One possible longest palindromic subsequence is "bbbb".
 *
 * Example 2:
 *
 * Input: s = "cbbd" Output: 2 Explanation: One possible longest palindromic subsequence is "bb".
 *
 * Constraints:
 *
 * 1 <= s.length <= 1000
 * s consists only of lowercase English letters.
 */
function longestPalindromeSubseq(s: string): number {
  let m = s.length
  let dp = new Array(m + 1).fill(0).map(() => new Array(m + 1).fill(0))
  for (let i = 1; i <= m; i++) {
    dp[i][i] = 1
  }
  for (let i = m - 1; i >= 0; i--) {
    for (let j = i + 1; j <= m; j++) {
      if (s[i] === s[j]) {
        dp[i][j] = dp[i + 1][j - 1] + 2
      } else {
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1])
      }
    }
  }
  return dp[0][m]
};

function test_00516() {
  // dp :
  // [0, 0, 0, 0, 0, 0]        [0, 2, 3, 3, 4, 4],
  // [0, 1, 0, 0, 0, 0]        [0, 1, 2, 2, 3, 3],
  // [0, 0, 1, 0, 0, 0]   =>   [0, 0, 1, 1, 3, 3],
  // [0, 0, 0, 1, 0, 0]        [0, 0, 0, 1, 1, 1],
  // [0, 0, 0, 0, 1, 0]        [0, 0, 0, 0, 1, 1],
  // [0, 0, 0, 0, 0, 1]        [0, 0, 0, 0, 0, 1]
  let s = "bbbab"
  console.log(longestPalindromeSubseq(s));
  s = "cbbd"
  console.log(longestPalindromeSubseq(s));
}

test_00516()
