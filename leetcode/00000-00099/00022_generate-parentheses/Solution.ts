/**
 * ID:    00022
 * Title: Generate Parentheses
 * Difficulty: Medium
 * Description: Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
 *
 * Example 1:
 *
 * Input: n = 3 Output: ["((()))","(()())","(())()","()(())","()()()"]
 *
 * Example 2:
 *
 * Input: n = 1 Output: ["()"]
 *
 * Constraints:
 *
 * 1 <= n <= 8
 */
function generateParenthesis(n: number): string[] {
  let result = new Array()
  const dfs = (i: number, left: number, right: number, path: string[]) => {
    if (left === 0 && right === 0) {
      result.push(path.join(''))
      return
    }
    if (left > 0) {
      path.push('(')
      dfs(i + 1, left - 1, right, path)
      path.pop()
    }
    if (right > left) {
      path.push(')')
      dfs(i + 1, left, right - 1, path)
      path.pop()
    }
  }
  dfs(0, n, n, [])
  return result
};

function test_00022() {
  let n = 3
  console.log(generateParenthesis(n));
  n = 1
  console.log(generateParenthesis(n));
}

test_00022()
