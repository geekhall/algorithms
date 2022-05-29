/**
 * ID:    01790
 * Title: Check if One String Swap Can Make Strings Equal
 * Difficulty: Easy
 * Description: You are given two strings s1 and s2 of equal length. A string swap is an operation where you choose two indices in a string (not necessarily different) and swap the characters at these indices.
 *
 * Return true if it is possible to make both strings equal by performing at most one string swap on exactly one of the strings. Otherwise, return false.
 *
 * Example 1:
 *
 * Input: s1 = "bank", s2 = "kanb" Output: true Explanation: For example, swap the first character with the last character of s2 to make "bank".
 *
 * Example 2:
 *
 * Input: s1 = "attack", s2 = "defend" Output: false Explanation: It is impossible to make them equal with one string swap.
 *
 * Example 3:
 *
 * Input: s1 = "kelb", s2 = "kelb" Output: true Explanation: The two strings are already equal, so no string swap operation is required.
 *
 * Constraints:
 *
 * 1 <= s1.length, s2.length <= 100
 * s1.length == s2.length
 * s1 and s2 consist of only lowercase English letters.
 */
function areAlmostEqual(s1: string, s2: string): boolean {
  if (s1.length !== s2.length)
    return false
  if (s1 === s2)
    return true
  let diffPos = new Array()
  for (let i = 0; i < s1.length; i++) {

    if (s1[i] !== s2[i]) {
      diffPos.push(i)
    }
  }
  if (diffPos.length === 2 && s1[diffPos[0]] === s2[diffPos[1]] && s1[diffPos[1]] === s2[diffPos[0]])
    return true
  return false
};

function test_01790() {
  let s1 = "bank", s2 = "kanb"
  console.log(areAlmostEqual(s1, s2))
  s1 = "attack", s2 = "defend"
  console.log(areAlmostEqual(s1, s2))

}

test_01790()
