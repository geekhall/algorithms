/**
 * ID:    01221
 * Title: Split a String in Balanced Strings
 * Difficulty: Easy
 * Description: Balanced strings are those that have an equal quantity of 'L' and 'R' characters.
 *
 * Given a balanced string s, split it in the maximum amount of balanced strings.
 *
 * Return the maximum amount of split balanced strings.
 *
 * Example 1:
 *
 * Input: s = "RLRRLLRLRL" Output: 4 Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.
 *
 * Example 2:
 *
 * Input: s = "RLLLLRRRLR" Output: 3 Explanation: s can be split into "RL", "LLLRRR", "LR", each substring contains same number of 'L' and 'R'.
 *
 * Example 3:
 *
 * Input: s = "LLLLRRRR" Output: 1 Explanation: s can be split into "LLLLRRRR".
 *
 * Constraints:
 *
 * 1 <= s.length <= 1000
 * s[i] is either 'L' or 'R'.
 * s is a balanced string.
 */
function balancedStringSplit(s: string): number {
  let res = 0
  let st: string[] = []
  for (let i = 0; i < s.length; i++) {
    if (st.length > 0 && st[st.length - 1] !== s[i]) {
      st.pop()
      if (st.length === 0)
        res++
    } else {
      st.push(s[i])
    }
  }
  return res
};

function test_01221() {
  let s = "RLRRLLRLRL"
  console.log(balancedStringSplit(s));
  s = "RLLLLRRRLR"
  console.log(balancedStringSplit(s));
  s = "LLLLRRRR"
  console.log(balancedStringSplit(s));

}

test_01221()
