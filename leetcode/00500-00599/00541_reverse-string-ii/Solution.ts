/**
 * ID:    00541
 * Title: Reverse String II
 * Difficulty: Easy
 * Description: Given a string s and an integer k, reverse the first k characters for every 2k characters counting from the start of the string.
 *
 * If there are fewer than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and leave the other as original.
 *
 * Example 1:
 *
 * Input: s = "abcdefg", k = 2 Output:"bacdfeg"
 *
 * Example 2:
 *
 * Input: s = "abcd", k = 2 Output:"bacd"
 *
 * Constraints:
 *
 * 1 <= s.length <= 10 4
 * s consists of only lowercase English letters.
 * 1 <= k <= 10 4
 */
function reverseStr(s: string, k: number): string {
  if (k === 1)
    return s
  let res = ""
  let reverseFlag = true
  for (let i = 0; i < s.length; i += k) {
    if (reverseFlag) {
      for (let j = i + k - 1; j >= i; j--) {
        if (s[j] !== undefined)
          res += s[j]
      }
    } else {
      for (let j = i; j < i + k; j++) {
        if (s[j] !== undefined)
          res += s[j]
      }
    }
    reverseFlag = !reverseFlag
  }

  return res
};

function test_00541() {
  let s = "abcdefg", k = 2
  console.log(reverseStr(s, k));
  s = "abcd", k = 2
  console.log(reverseStr(s, k));

}

test_00541()
