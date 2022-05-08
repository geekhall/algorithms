/**
 * ID:    01796
 * Title: Second Largest Digit in a String
 * Difficulty: Easy
 * Description: Given an alphanumeric string s, return the second largest numerical digit that appears in s, or -1 if it does not exist.
 *
 * An alphanumeric string is a string consisting of lowercase English letters and digits.
 *
 * Example 1:
 *
 * Input: s = "dfa12321afd" Output: 2 Explanation: The digits that appear in s are [1, 2, 3]. The second largest digit is 2.
 *
 * Example 2:
 *
 * Input: s = "abc1111" Output: -1 Explanation: The digits that appear in s are [1]. There is no second largest digit.
 *
 * Constraints:
 *
 * 1 <= s.length <= 500
 * s consists of only lowercase English letters and/or digits.
 */
function secondHighest(s: string): number {
  let first = -1
  let second = -1
  let n = s.length
  for (let i = 0; i < n; i++) {
    if (s[i] >= '0' && s[i] <= '9') {
      if (parseInt(s[i]) > first) {
        second = first
        first = parseInt(s[i])
      } else if (parseInt(s[i]) === first) {
        continue
      } else if (parseInt(s[i]) > second) {
        second = parseInt(s[i])
      }
    }
  }
  return second
};

function test_01796() {
  let s = "dfa12321afd"
  console.log(secondHighest(s));
  s = "abc1111"
  console.log(secondHighest(s));
}

test_01796()
