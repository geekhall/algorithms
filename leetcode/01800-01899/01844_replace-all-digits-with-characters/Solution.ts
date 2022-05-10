/**
 * ID:    01844
 * Title: Replace All Digits with Characters
 * Difficulty: Easy
 * Description: You are given a 0-indexed string s that has lowercase English letters in its even indices and digits in its odd indices.
 *
 * There is a function shift(c, x), where c is a character and x is a digit, that returns the x th character after c.
 *
 * For example, shift('a', 5) = 'f' and shift('x', 0) = 'x'.
 *
 * For every odd index i, you want to replace the digit s[i] with shift(s[i-1], s[i]).
 *
 * Return s after replacing all digits. It is guaranteed that shift(s[i-1], s[i]) will never exceed 'z'.
 *
 * Example 1:
 *
 * Input: s = "a1c1e1" Output:"abcdef" Explanation: The digits are replaced as follows: - s[1] -> shift('a',1) = 'b' - s[3] -> shift('c',1) = 'd' - s[5] -> shift('e',1) = 'f'
 *
 * Example 2:
 *
 * Input: s = "a1b2c3d4e" Output:"abbdcfdhe" Explanation: The digits are replaced as follows: - s[1] -> shift('a',1) = 'b' - s[3] -> shift('b',2) = 'd' - s[5] -> shift('c',3) = 'f' - s[7] -> shift('d',4) = 'h'
 *
 * Constraints:
 *
 * 1 <= s.length <= 100
 * s consists only of lowercase English letters and digits.
 * shift(s[i-1], s[i]) <= 'z' for all odd indices i.
 */
function replaceDigits(s: string): string {
  let res = ""
  for (let i = 0; i < s.length - 1; i += 2) {
    res += s[i]
    res += String.fromCharCode(s[i].charCodeAt(0) + parseInt(s[i + 1]))
  }
  if (s.length % 2) {
    res += s[s.length - 1]
  }
  return res
};

function test_01844() {
  let s = "a1c1e1"
  console.log(replaceDigits(s));
  s = "a1b2c3d4e"
  console.log(replaceDigits(s));

}

test_01844()
