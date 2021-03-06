/**
 * ID:    00394
 * Title: Decode String
 * Difficulty: Medium
 * Description: Given an encoded string, return its decoded string.
 *
 * The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.
 *
 * You may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc.
 *
 * Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there will not be input like 3a or 2[4].
 *
 * Example 1:
 *
 * Input: s = "3[a]2[bc]" Output:"aaabcbc"
 *
 * Example 2:
 *
 * Input: s = "3[a2[c]]" Output:"accaccacc"
 *
 * Example 3:
 *
 * Input: s = "2[abc]3[cd]ef" Output:"abcabccdcdcdef"
 *
 * Constraints:
 *
 * 1 <= s.length <= 30
 * s consists of lowercase English letters, digits, and square brackets '[]'.
 * s is guaranteed to be a valid input.
 * All the integers in s are in the range [1, 300].
 */
function decodeString(s: string): string {
  const stack: any[] = []
  let curNum = 0
  let curString = ''
  for (const c of s) {
    if (c === '[') {
      stack.push(curString)
      stack.push(curNum)
      curString = ''
      curNum = 0
    } else if (c === ']') {
      const num = stack.pop() as number
      const str = stack.pop() as string
      curString = str + curString.repeat(num)
    } else if (c.match(/\d/)) {
      curNum = curNum * 10 + parseInt(c)
    } else {
      curString += c
    }
  }
  return curString
};

function test_00394() {
  console.log(decodeString('3[a]2[bc]'));
  console.log(decodeString('3[a2[c]]'));
  console.log(decodeString('2[abc]3[cd]ef'));
}

test_00394()
