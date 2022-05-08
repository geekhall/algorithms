/**
 * ID:    00459
 * Title: Repeated Substring Pattern
 * Difficulty: Easy
 * Description: Given a string s, check if it can be constructed by taking a substring of it and appending multiple copies of the substring together.
 *
 * Example 1:
 *
 * Input: s = "abab" Output: true Explanation: It is the substring "ab" twice.
 *
 * Example 2:
 *
 * Input: s = "aba" Output: false
 *
 * Example 3:
 *
 * Input: s = "abcabcabcabc" Output: true Explanation: It is the substring "abc" four times or the substring "abcabc" twice.
 *
 * Constraints:
 *
 * 1 <= s.length <= 10 4
 * s consists of lowercase English letters.
 */
function repeatedSubstringPattern(s: string): boolean {
  let n = s.length
  for (let i = 1; i < n; i++) {
    let pattern = s.substring(0, i)
    let len = Math.floor(s.length / pattern.length)
    let new_str = ""
    while (len > 0) {
      new_str += pattern
      len--
    }
    if (s === new_str) {
      return true
    }
  }
  return false
};

function test_00459() {
  let s = "abab"
  console.log(repeatedSubstringPattern(s));
  s = "aba"
  console.log(repeatedSubstringPattern(s));
  s = "abcabcabcabc"
  console.log(repeatedSubstringPattern(s));
  s = "bb"
  console.log(repeatedSubstringPattern(s));
}

test_00459()
