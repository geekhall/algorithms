/**
 * ID:    00227
 * Title: Basic Calculator II
 * Difficulty: Medium
 * Description: Given a string s which represents an expression, evaluate this expression and return its value.
 *
 * The integer division should truncate toward zero.
 *
 * You may assume that the given expression is always valid. All intermediate results will be in the range of [-2 31, 2 31 - 1].
 *
 * Note: You are not allowed to use any built-in function which evaluates strings as mathematical expressions, such as eval().
 *
 * Example 1:
 *
 * Input: s = "3+2*2" Output: 7
 *
 * Example 2:
 *
 * Input: s = " 3/2 " Output: 1
 *
 * Example 3:
 *
 * Input: s = " 3+5 / 2 " Output: 5
 *
 * Constraints:
 *
 * 1 <= s.length <= 3 * 10 5
 * s consists of integers and operators ('+', '-', '*', '/') separated by some number of spaces.
 * s represents a valid expression.
 * All the integers in the expression are non-negative integers in the range [0, 2 31 - 1].
 * The answer is guaranteed to fit in a 32-bit integer.
 */
function calculate(s: string): number {
  const stack = [];
  let num = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      continue;
    }
    if (s[i] === "+" || s[i] === "-" || s[i] === "*" || s[i] === "/") {
      stack.push(num);
      num = 0;
      stack.push(s[i]);
    }
    if (s[i] >= "0" && s[i] <= "9") {
      num = num * 10 + parseInt(s[i]);
    }
  }
  stack.push(num);
  let result = 0;
  console.log(stack)
  return result;
}
function test_00227() {
  console.log(calculate("3+2*2"));
  console.log(calculate(" 3/2 "));
  console.log(calculate(" 3+5 / 2 "));
}

test_00227()
