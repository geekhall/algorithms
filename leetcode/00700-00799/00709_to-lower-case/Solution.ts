/**
 * ID:    00709
 * Title: To Lower Case
 * Difficulty: Easy
 * Description: Given a string s, return the string after replacing every uppercase letter with the same lowercase letter.
 *
 * Example 1:
 *
 * Input: s = "Hello" Output:"hello"
 *
 * Example 2:
 *
 * Input: s = "here" Output:"here"
 *
 * Example 3:
 *
 * Input: s = "LOVELY" Output:"lovely"
 *
 * Constraints:
 *
 * 1 <= s.length <= 100
 * s consists of printable ASCII characters.
 */
function toLowerCase(s: string): string {
  return s.toLowerCase()
};

function test_00709() {
  let s = "LOVELY"
  console.log(toLowerCase(s));

}

test_00709()
