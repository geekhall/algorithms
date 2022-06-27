/**
 * ID:    00032
 * Title: Longest Valid Parentheses
 * Difficulty: Hard
 * Description: Given a string containing just the characters '(' and ')', find the length of the longest valid (well-formed) parentheses substring.
 *
 * Example 1:
 *
 * Input: s = "(()" Output: 2 Explanation: The longest valid parentheses substring is "()".
 *
 * Example 2:
 *
 * Input: s = ")()())" Output: 4 Explanation: The longest valid parentheses substring is "()()".
 *
 * Example 3:
 *
 * Input: s = "" Output: 0
 *
 * Constraints:
 *
 * 0 <= s.length <= 3 * 10 4
 * s[i] is '(', or ')'.
 */

function longestValidParentheses(s: string): number {
  // dp[i] = max length of valid parentheses ending at i
  let dp = new Array(s.length).fill(0)
  let max = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ')') { // valid parentheses can not end with '('
      if (s[i - 1] === '(') { // 若前一个是'(',则当前dp[i] = dp[i-2] + 2
        dp[i] = dp[i - 2] + 2
      }
      if (i - dp[i - 1] - 1 >= 0 && s[i - dp[i - 1] - 1] === '(') {
        dp[i] = dp[i - 1] + 2 + (i - dp[i - 1] - 2 >= 0 ? dp[i - dp[i - 1] - 2] : 0)
      }
      max = Math.max(max, dp[i])
    }
  }
  return max
};

function test_00032() {
  let s = "(()"
  console.log(longestValidParentheses(s));
  s = ")()())"
  console.log(longestValidParentheses(s));
  s = ""
  console.log(longestValidParentheses(s));
  s = "()"
  console.log(longestValidParentheses(s));
}

test_00032()
