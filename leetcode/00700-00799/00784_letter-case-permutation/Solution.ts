/**
 * ID:    00784
 * Title: Letter Case Permutation
 * Difficulty: Medium
 * Description: Given a string s, you can transform every letter individually to be lowercase or uppercase to create another string.
 *
 * Return a list of all possible strings we could create. Return the output in any order.
 *
 * Example 1:
 *
 * Input: s = "a1b2" Output: ["a1b2","a1B2","A1b2","A1B2"]
 *
 * Example 2:
 *
 * Input: s = "3z4" Output: ["3z4","3Z4"]
 *
 * Constraints:
 *
 * 1 <= s.length <= 12
 * s consists of lowercase English letters, uppercase English letters, and digits.
 */
function letterCasePermutation(s: string): string[] {
  let res: string[] = []
  const helper = (path: string[], index: number) => {
    if (index === s.length) {
      res.push(path.join(''))
      return
    }
    if (s[index] >= '0' && s[index] <= '9') {
      helper([...path, s[index]], index + 1)
      return
    }
    helper([...path, s[index].toLowerCase()], index + 1)
    helper([...path, s[index].toUpperCase()], index + 1)
  }
  helper([], 0)
  return res
};

function test_00784() {
  let s = "a1b2"
  console.log(letterCasePermutation(s)) // ["a1b2","a1B2","A1b2","A1B2"]
  s = "3z4"
  console.log(letterCasePermutation(s)) // ["3z4","3Z4"]
}

test_00784()
