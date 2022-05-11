/**
 * ID:    01446
 * Title: Consecutive Characters
 * Difficulty: Easy
 * Description: The power of the string is the maximum length of a non-empty substring that contains only one unique character.
 *
 * Given a string s, return the power of s.
 *
 * Example 1:
 *
 * Input: s = "leetcode" Output: 2 Explanation: The substring "ee" is of length 2 with the character 'e' only.
 *
 * Example 2:
 *
 * Input: s = "abbcccddddeeeeedcba" Output: 5 Explanation: The substring "eeeee" is of length 5 with the character 'e' only.
 *
 * Constraints:
 *
 * 1 <= s.length <= 500
 * s consists of only lowercase English letters.
 */
function maxPower(s: string): number {
  let max = 1
  let left = 0, right = 1;
  while (right < s.length) {
    if (s[left] !== s[right]) {
      if (max < right - left) {
        max = right - left
      }
      left = right
    }
    right++
  }
  if (max < right - left) {
    max = right - left
  }
  return max
};

function test_01446() {
  let s = "abbcccddddeeeeedcba"
  console.log(maxPower(s));
  s = "leetcode"
  console.log(maxPower(s));
  s = 'a'
  console.log(maxPower(s));
  s = 'cc'
  console.log(maxPower(s));
  s = "ccbccbb"
  console.log(maxPower(s));

}

test_01446()
