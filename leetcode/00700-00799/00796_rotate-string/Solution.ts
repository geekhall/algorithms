/**
 * ID:    00796
 * Title: Rotate String
 * Difficulty: Easy
 * Description: Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.
 *
 * A shift on s consists of moving the leftmost character of s to the rightmost position.
 *
 * For example, if s = "abcde", then it will be "bcdea" after one shift.
 *
 * Example 1:
 *
 * Input: s = "abcde", goal = "cdeab" Output: true
 *
 * Example 2:
 *
 * Input: s = "abcde", goal = "abced" Output: false
 *
 * Constraints:
 *
 * 1 <= s.length, goal.length <= 100
 * s and goal consist of lowercase English letters.
 */
function rotateString(s: string, goal: string): boolean {
  if (s === goal)
    return true
  if (s.length === 1 && goal.length === 1) {
    return s === goal
  }
  let arr = Array.from(s)
  for (let i = 1; i < s.length; i++) {
    if ((arr.slice(i).join('') + arr.slice(0, i).join('')) === goal) {
      return true
    }
  }
  return false
};

function test_00796() {
  let s = "abcde", goal = "cdeab"
  console.log(rotateString(s, goal));
  s = "abcde", goal = "abced"
  console.log(rotateString(s, goal));
}

test_00796()
