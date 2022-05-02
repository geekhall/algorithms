/**
 * ID:    00942
 * Title: DI String Match
 * Difficulty: Easy
 * Description: A permutation perm of n + 1 integers of all the integers in the range [0, n] can be represented as a string s of length n where:
 *
 * s[i] == 'I' if perm[i] < perm[i + 1], and
 * s[i] == 'D' if perm[i] > perm[i + 1].
 *
 * Given a string s, reconstruct the permutation perm and return it. If there are multiple valid permutations perm, return any of them.
 *
 * Example 1:
 *
 * Input: s = "IDID" Output: [0,4,1,3,2]
 *
 * Example 2:
 *
 * Input: s = "III" Output: [0,1,2,3]
 *
 * Example 3:
 *
 * Input: s = "DDI" Output: [3,2,0,1]
 *
 * Constraints:
 *
 * 1 <= s.length <= 10 5
 * s[i] is either 'I' or 'D'.
 */
function diStringMatch(s: string): number[] {
  let res: number[] = []
  let max = s.length
  let min = 0
  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) === 'I') {
      res.push(min)
      min += 1
    } else if (s.charAt(i) === 'D') {
      res.push(max)
      max -= 1
    }
  }
  if (s.charAt(s.length - 1) === 'I')
    res.push(min)
  else
    res.push(max)
  return res
};

function test_00942() {
  let s = "IDID"
  console.log(diStringMatch(s));
}

test_00942()
