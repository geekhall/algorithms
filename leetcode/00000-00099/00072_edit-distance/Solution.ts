/**
 * ID:    00072
 * Title: Edit Distance
 * Difficulty: Hard
 * Description: Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2.
 *
 * You have the following three operations permitted on a word:
 *
 * Insert a character
 * Delete a character
 * Replace a character
 *
 * Example 1:
 *
 * Input: word1 = "horse", word2 = "ros" Output: 3 Explanation: horse -> rorse (replace 'h' with 'r') rorse -> rose (remove 'r') rose -> ros (remove 'e')
 *
 * Example 2:
 *
 * Input: word1 = "intention", word2 = "execution" Output: 5 Explanation: intention -> inention (remove 't') inention -> enention (replace 'i' with 'e') enention -> exention (replace 'n' with 'x') exention -> exection (replace 'n' with 'c') exection -> execution (insert 'u')
 *
 * Constraints:
 *
 * 0 <= word1.length, word2.length <= 500
 * word1 and word2 consist of lowercase English letters.
 */
function minDistance(word1: string, word2: string): number {
  // dp[i][j] is the minimum number of operations to convert word1[0..i) to word2[0..j).
  let dp = Array.from({ length: word1.length + 1 }, () => Array.from({ length: word2.length + 1 }, () => 0))
  for (let i = 1; i <= word1.length; ++i) {
    dp[i][0] = i
  }
  for (let j = 1; j <= word2.length; ++j) {
    dp[0][j] = j
  }
  for (let i = 1; i <= word1.length; ++i) {
    for (let j = 1; j <= word2.length; ++j) {
      if (word1[i - 1] === word2[j - 1])
        dp[i][j] = dp[i - 1][j - 1]
      else
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1
    }
  }
  return dp[word1.length][word2.length]
};

function test_00072() {
  let word1 = "horse", word2 = "ros"
  console.log(minDistance(word1, word2));
  word1 = "intention", word2 = "execution"
  console.log(minDistance(word1, word2));

}

test_00072()
