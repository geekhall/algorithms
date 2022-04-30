/**
 * ID:    00844
 * Title: Backspace String Compare
 * Difficulty: Easy
 * Description: Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.
 *
 * Note that after backspacing an empty text, the text will continue empty.
 *
 * Example 1:
 *
 * Input: s = "ab#c", t = "ad#c" Output: true Explanation: Both s and t become "ac".
 *
 * Example 2:
 *
 * Input: s = "ab##", t = "c#d#" Output: true Explanation: Both s and t become "".
 *
 * Example 3:
 *
 * Input: s = "a#c", t = "b" Output: false Explanation: s becomes "c" while t becomes "b".
 *
 * Constraints:
 *
 * 1 <= s.length, t.length <= 200
 * s and t only contain lowercase letters and '#' characters.
 *
 * Follow up: Can you solve it in O(n) time and O(1) space?
 */
function backspaceCompare(s: string, t: string): boolean {
  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) === "#") {
      s = s.substring(0, i - 1) + s.substring(i + 1)
      i -= 2
    }
  }
  for (let i = 0; i < t.length; i++) {
    if (t.charAt(i) === "#") {
      t = t.substring(0, i - 1) + t.substring(i + 1)
      i -= 2
    }
  }
  if (s === t)
    return true
  return false
};

function test_00844() {
  let s = "ab#c", t = "ad#c"
  console.log(backspaceCompare(s, t));
  s = "ab##", t = "c#d#"
  console.log(backspaceCompare(s, t));
  s = "a#c", t = "b"
  console.log(backspaceCompare(s, t));

}

test_00844()
