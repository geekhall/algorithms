/**
 * ID:    00242
 * Title: Valid Anagram
 * Difficulty: Easy
 * Description: Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 *
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
 *
 * Example 1:
 *
 * Input: s = "anagram", t = "nagaram" Output: true
 *
 * Example 2:
 *
 * Input: s = "rat", t = "car" Output: false
 *
 * Constraints:
 *
 * 1 <= s.length, t.length <= 5 * 10 4
 * s and t consist of lowercase English letters.
 *
 * Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?
 */
function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length)
    return false
  let arr1 = Array.from(s).sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))
  let arr2 = Array.from(t).sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false
    }
  }
  return true
};

function test_00242() {
  let s = "anagram", t = "nagaram"
  console.log(isAnagram(s, t));
  s = "rat", t = "car"
  console.log(isAnagram(s, t));

}

test_00242()
