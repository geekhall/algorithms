/**
 * ID:    00389
 * Title: Find the Difference
 * Difficulty: Easy
 * Description: You are given two strings s and t.
 *
 * String t is generated by random shuffling string s and then add one more letter at a random position.
 *
 * Return the letter that was added to t.
 *
 * Example 1:
 *
 * Input: s = "abcd", t = "abcde" Output:"e" Explanation: 'e' is the letter that was added.
 *
 * Example 2:
 *
 * Input: s = "", t = "y" Output:"y"
 *
 * Constraints:
 *
 * 0 <= s.length <= 1000
 * t.length == s.length + 1
 * s and t consist of lowercase English letters.
 */
function findTheDifference(s: string, t: string): string {
  let res: number = 0
  let n = s.length
  for (let i = 0; i < n; i++) {
    res = res ^ s[i].charCodeAt(0) ^ t[i].charCodeAt(0)
  }
  res ^= t[n].charCodeAt(0)
  return String.fromCharCode(res)
};

function test_00389() {
  let s = "abcd", t = "abcde"
  console.log(findTheDifference(s, t));
}

test_00389()
