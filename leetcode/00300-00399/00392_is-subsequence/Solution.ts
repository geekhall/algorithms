/**
 * ID:    00392
 * Title: Is Subsequence
 * Difficulty: Easy
 * Description: Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
 *
 * A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of " a b c d e" while "aec" is not).
 *
 * Example 1:
 *
 * Input: s = "abc", t = "ahbgdc" Output: true
 *
 * Example 2:
 *
 * Input: s = "axc", t = "ahbgdc" Output: false
 *
 * Constraints:
 *
 * 0 <= s.length <= 100
 * 0 <= t.length <= 10 4
 * s and t consist only of lowercase English letters.
 *
 * Follow up: Suppose there are lots of incoming s, say s 1, s 2, ..., s k where k >= 10 9, and you want to check one by one to see if t has its subsequence. In this scenario, how would you change your code?
 */
function isSubsequence(s: string, t: string): boolean {
  let index: number = 0
  for (let i = 0; i < t.length; i++) {
    if (t.charAt(i) === s.charAt(index)) {
      index++
    }
  }

  return index === s.length
};

function test_00392() {
  let s = "abc", t = "ahbgdc"
  console.log(isSubsequence(s, t));
  s = "axc", t = "ahbgdc"
  console.log(isSubsequence(s, t));

}

test_00392()
