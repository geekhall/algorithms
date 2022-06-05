/**
 * ID:    01234
 * Title: Replace the Substring for Balanced String
 * Difficulty: Medium
 * Description: You are given a string s of length n containing only four kinds of characters: 'Q', 'W', 'E', and 'R'.
 *
 * A string is said to be balanced if each of its characters appears n / 4 times where n is the length of the string.
 *
 * Return the minimum length of the substring that can be replaced with any other string of the same length to make s balanced. If s is already balanced, return 0.
 *
 * Example 1:
 *
 * Input: s = "QWER" Output: 0 Explanation: s is already balanced.
 *
 * Example 2:
 *
 * Input: s = "QQWE" Output: 1 Explanation: We need to replace a 'Q' to 'R', so that "RQWE" (or "QRWE") is balanced.
 *
 * Example 3:
 *
 * Input: s = "QQQW" Output: 2 Explanation: We can replace the first "QQ" to "ER".
 *
 * Constraints:
 *
 * n == s.length
 * 4 <= n <= 10 5
 * n is a multiple of 4.
 * s contains only 'Q', 'W', 'E', and 'R'.
 */
// wrong answer, solution of minimum length of charactor to replace
function balancedString1(s: string): number {
  let res = 0
  let map = new Map([['Q', 0], ['W', 0], ['E', 0], ['R', 0]])
  for (let i = 0; i < s.length; i++) {
    let c = s[i]
    map.set(c, map.get(c)! + 1)
  }
  let n = s.length
  let balancedCount = n / 4
  console.log(map);

  map.forEach((v, k) => {
    res += Math.abs(v - balancedCount)
  })

  return res / 2
};

// slide window, (to be modify)
function balancedString(s: string): number {
  let res = 0
  let map = new Map([['Q', 0], ['W', 0], ['E', 0], ['R', 0]])
  for (let i = 0; i < s.length; i++) {
    let c = s[i]
    map.set(c, map.get(c)! + 1)
  }
  return res
}
function test_01234() {
  console.log(balancedString('QWER'));
  console.log(balancedString('QQWE'));
  console.log(balancedString('QQQW'));
  console.log(balancedString('WWEQERQWQWWRWWERQWEQ')); // expect 4 (substring !!! not charactor >_< )
}

test_01234()
