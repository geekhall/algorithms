/**
 * ID:    00583
 * Title: Delete Operation for Two Strings
 * Difficulty: Medium
 * Description: Given two strings word1 and word2, return the minimum number of steps required to make word1 and word2 the same.
 *
 * In one step, you can delete exactly one character in either string.
 *
 * Example 1:
 *
 * Input: word1 = "sea", word2 = "eat" Output: 2 Explanation: You need one step to make "sea" to "ea" and another step to make "eat" to "ea".
 *
 * Example 2:
 *
 * Input: word1 = "leetcode", word2 = "etco" Output: 4
 *
 * Constraints:
 *
 * 1 <= word1.length, word2.length <= 500
 * word1 and word2 consist of only lowercase English letters.
 */
/**
 * To make them identical, just find the longest common subsequence.
 * The rest of the characters have to be deleted from the both the strings,
 * which does not belong to longest common subsequence.
 * @param word1
 * @param word2
 * @returns
 */
function minDistance(word1: string, word2: string): number {
  let dp = new Array(word1.length + 1).fill(0).map(() => new Array(word2.length + 1).fill(0))

  for (let i = 0; i <= word1.length; i++) {
    for (let j = 0; j <= word2.length; j++) {
      if (i == 0 || j == 0) dp[i][j] = 0;
      else dp[i][j] = (word1.charAt(i - 1) === word2.charAt(j - 1)) ? dp[i - 1][j - 1] + 1
        : Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
  }
  let val = dp[word1.length][word2.length];
  return word1.length - val + word2.length - val;
};

function test_00583() {
  let word1 = "sea", word2 = "eat"
  console.log(minDistance(word1, word2))
  word1 = "leetcode", word2 = "etco"
  console.log(minDistance(word1, word2))
  word1 = "a", word2 = "b"
  console.log(minDistance(word1, word2))
  word1 = "ab", word2 = "bc"
  console.log(minDistance(word1, word2))
  word1 = "park", word2 = "spake"
  console.log(minDistance(word1, word2))
}

test_00583()
