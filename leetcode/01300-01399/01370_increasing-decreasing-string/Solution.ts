/**
 * ID:    01370
 * Title: Increasing Decreasing String
 * Difficulty: Easy
 * Description: You are given a string s. Reorder the string using the following algorithm:
 *
 * Pick the smallest character from s and append it to the result.
 * Pick the smallest character from s which is greater than the last appended character to the result and append it.
 * Repeat step 2 until you cannot pick more characters.
 * Pick the largest character from s and append it to the result.
 * Pick the largest character from s which is smaller than the last appended character to the result and append it.
 * Repeat step 5 until you cannot pick more characters.
 * Repeat the steps from 1 to 6 until you pick all characters from s.
 *
 * In each step, If the smallest or the largest character appears more than once you can choose any occurrence and append it to the result.
 *
 * Return the result string after sorting s with this algorithm.
 *
 * Example 1:
 *
 * Input: s = "aaaabbbbcccc" Output:"abccbaabccba" Explanation: After steps 1, 2 and 3 of the first iteration, result = "abc" After steps 4, 5 and 6 of the first iteration, result = "abccba" First iteration is done. Now s = "aabbcc" and we go back to step 1 After steps 1, 2 and 3 of the second iteration, result = "abccbaabc" After steps 4, 5 and 6 of the second iteration, result = "abccbaabccba"
 *
 * Example 2:
 *
 * Input: s = "rat" Output:"art" Explanation: The word "rat" becomes "art" after re-ordering it with the mentioned algorithm.
 *
 * Constraints:
 *
 * 1 <= s.length <= 500
 * s consists of only lowercase English letters.
 */
function sortString(s: string): string {
  let res = ""
  let m = new Map()
  for (let i = 0; i < s.length; i++) {
    if (m.get(s[i]) === undefined) {
      m.set(s[i], 1)
    } else {
      m.set(s[i], m.get(s[i]) + 1)
    }
  }
  // let arr = Array.from(s).sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))
  let increasing = true
  while (res.length < s.length) {
    if (increasing) {
      for (let i = 'a'.charCodeAt(0); i <= 'z'.charCodeAt(0); i++) {
        let c = String.fromCharCode(i)
        if (m.get(c) !== undefined) {
          res += c
          if (m.get(c) === 1) {
            m.delete(c)
          } else {
            m.set(c, m.get(c) - 1)
          }
        }
      }
    } else {
      for (let i = 'z'.charCodeAt(0); i >= 'a'.charCodeAt(0); i--) {
        let c = String.fromCharCode(i)
        if (m.get(c) !== undefined) {
          res += c
          if (m.get(c) === 1) {
            m.delete(c)
          } else {
            m.set(c, m.get(c) - 1)
          }
        }
      }
    }
    increasing = !increasing
  }

  return res
};

function test_01370() {
  let s = "aaaabbbbcccc"
  console.log(sortString(s));
  s = "rat"
  console.log(sortString(s));
}

test_01370()
