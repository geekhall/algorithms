/**
 * ID:    00205
 * Title: Isomorphic Strings
 * Difficulty: Easy
 * Description: Given two strings s and t, determine if they are isomorphic.
 *
 * Two strings s and t are isomorphic if the characters in s can be replaced to get t.
 *
 * All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.
 *
 * Example 1:
 *
 * Input: s = "egg", t = "add" Output: true
 *
 * Example 2:
 *
 * Input: s = "foo", t = "bar" Output: false
 *
 * Example 3:
 *
 * Input: s = "paper", t = "title" Output: true
 *
 * Constraints:
 *
 * 1 <= s.length <= 5 * 10 4
 * t.length == s.length
 * s and t consist of any valid ascii character.
 */
function isIsomorphic(s: string, t: string): boolean {
  let m1 = new Map()
  let m2 = new Map()
  for (let i = 0; i < s.length; i++) {
    if (m1.get(s[i]) === undefined) {
      m1.set(s[i], t[i])
    } else if (m1.get(s[i]) !== t[i]) {
      return false
    }

    if (m2.get(t[i]) === undefined) {
      m2.set(t[i], s[i])
    } else if (m2.get(t[i]) !== s[i]) {
      return false
    }
  }
  return true
};

function test_00205() {
  let s = "egg", t = "add"
  console.log(isIsomorphic(s, t));
  s = "foo", t = "bar"
  console.log(isIsomorphic(s, t));

}

test_00205()
