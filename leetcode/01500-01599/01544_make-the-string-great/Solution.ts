/**
 * ID:    01544
 * Title: Make The String Great
 * Difficulty: Easy
 * Description: Given a string s of lower and upper case English letters.
 *
 * A good string is a string which doesn't have two adjacent characters s[i] and s[i + 1] where:
 *
 * 0 <= i <= s.length - 2
 * s[i] is a lower-case letter and s[i + 1] is the same letter but in upper-case or vice-versa.
 *
 * To make the string good, you can choose two adjacent characters that make the string bad and remove them. You can keep doing this until the string becomes good.
 *
 * Return the string after making it good. The answer is guaranteed to be unique under the given constraints.
 *
 * Notice that an empty string is also good.
 *
 * Example 1:
 *
 * Input: s = "leEeetcode" Output:"leetcode" Explanation: In the first step, either you choose i = 1 or i = 2, both will result "leEeetcode" to be reduced to "leetcode".
 *
 * Example 2:
 *
 * Input: s = "abBAcC" Output:"" Explanation: We have many possible scenarios, and all lead to the same answer. For example: "abBAcC" --> "aAcC" --> "cC" --> "" "abBAcC" --> "abBA" --> "aA" --> ""
 *
 * Example 3:
 *
 * Input: s = "s" Output:"s"
 *
 * Constraints:
 *
 * 1 <= s.length <= 100
 * s contains only lower and upper case English letters.
 */
function makeGood(s: string): string {
  let res = ''
  let i = 0
  let st = new Array()
  while (i < s.length) {
    if (st.length === 0 || Math.abs(s.charCodeAt(i) - st[st.length - 1].charCodeAt(0)) !== 32) {
      st.push(s[i])
    } else {
      st.pop()
    }
    i++
  }
  for (let i = 0; i < st.length; i++) {
    res += st[i]
  }
  return res
};

function test_01544() {
  let s = "leEeetcode"
  console.log(makeGood(s));
  s = "abBAcC"
  console.log(makeGood(s));
  s = "s"
  console.log(makeGood(s));
}

test_01544()
