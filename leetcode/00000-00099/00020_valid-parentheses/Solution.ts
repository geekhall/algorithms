/**
 * ID:    00020
 * Title: Valid Parentheses
 * Difficulty: Easy
 * Description: Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 *
 * An input string is valid if:
 *
 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.
 *
 * Example 1:
 *
 * Input: s = "()" Output: true
 *
 * Example 2:
 *
 * Input: s = "()[]{}" Output: true
 *
 * Example 3:
 *
 * Input: s = "(]" Output: false
 *
 * Constraints:
 *
 * 1 <= s.length <= 10 4
 * s consists of parentheses only '()[]{}'.
 */
function isValid(s: string): boolean {
  let stack = []
  for (let i = 0; i < s.length; i++) {
    let c = s[i]
    if (c === '(' || c === '[' || c === '{') {
      stack.push(c)
    } else {
      if (stack.length === 0) {
        return false
      }
      let top = stack.pop()
      if (c === ')' && top !== '(') {
        return false
      }
      if (c === ']' && top !== '[') {
        return false
      }
      if (c === '}' && top !== '{') {
        return false
      }
    }
  }
  return stack.length === 0
};

function test_00020() {
  let s = "()[]{}"
  let result = isValid(s)
  console.log(result)
}

test_00020()
