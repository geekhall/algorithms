/**
 * ID:    01021
 * Title: Remove Outermost Parentheses
 * Difficulty: Easy
 * Description: A valid parentheses string is either empty "", "(" + A + ")", or A + B, where A and B are valid parentheses strings, and + represents string concatenation.
 *
 * For example, "", "()", "(())()", and "(()(()))" are all valid parentheses strings.
 *
 * A valid parentheses string s is primitive if it is nonempty, and there does not exist a way to split it into s = A + B, with A and B nonempty valid parentheses strings.
 *
 * Given a valid parentheses string s, consider its primitive decomposition: s = P 1 + P 2 + ... + P k, where P i are primitive valid parentheses strings.
 *
 * Return s after removing the outermost parentheses of every primitive string in the primitive decomposition of s.
 *
 * Example 1:
 *
 * Input: s = "(()())(())" Output:"()()()" Explanation: The input string is "(()())(())", with primitive decomposition "(()())" + "(())". After removing outer parentheses of each part, this is "()()" + "()" = "()()()".
 *
 * Example 2:
 *
 * Input: s = "(()())(())(()(()))" Output:"()()()()(())" Explanation: The input string is "(()())(())(()(()))", with primitive decomposition "(()())" + "(())" + "(()(()))". After removing outer parentheses of each part, this is "()()" + "()" + "()(())" = "()()()()(())".
 *
 * Example 3:
 *
 * Input: s = "()()" Output:"" Explanation: The input string is "()()", with primitive decomposition "()" + "()". After removing outer parentheses of each part, this is "" + "" = "".
 *
 * Constraints:
 *
 * 1 <= s.length <= 10 5
 * s[i] is either '(' or ')'.
 * s is a valid parentheses string.
 */
function removeOuterParentheses(s: string): string {
  let st: number[] = []
  let res = ""
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(')
      st.push(i)
    if (s[i] === ')') {
      if (st.length === 1) {
        res += s.slice(st.pop()! + 1, i)
      } else {
        st.pop()
      }
    }
  }
  return res
};

function test_01021() {
  let s = "(()())(())"
  console.log(removeOuterParentheses(s));
  s = "(()())(())(()(()))"
  console.log(removeOuterParentheses(s));
  s = "()()"
  console.log(removeOuterParentheses(s));
}

test_01021()
