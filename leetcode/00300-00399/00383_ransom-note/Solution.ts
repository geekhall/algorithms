/**
 * ID:    00383
 * Title: Ransom Note
 * Difficulty: Easy
 * Description: Given two strings ransomNote and magazine, return true if ransomNote can be constructed from magazine and false otherwise.
 *
 * Each letter in magazine can only be used once in ransomNote.
 *
 * Example 1:
 *
 * Input: ransomNote = "a", magazine = "b" Output: false
 *
 * Example 2:
 *
 * Input: ransomNote = "aa", magazine = "ab" Output: false
 *
 * Example 3:
 *
 * Input: ransomNote = "aa", magazine = "aab" Output: true
 *
 * Constraints:
 *
 * 1 <= ransomNote.length, magazine.length <= 10 5
 * ransomNote and magazine consist of lowercase English letters.
 */
function canConstruct(ransomNote: string, magazine: string): boolean {

  const str2map = (str: string): Map<string, number> => {
    let m = new Map<string, number>()
    for (let i = 0; i < str.length; i++) {
      if (m.get(str[i]) === undefined) {
        m.set(str[i], 1)
      } else {
        m.set(str[i], m.get(str[i])! + 1)
      }
    }
    return m
  }
  let m1 = str2map(ransomNote)
  let m2 = str2map(magazine)
  let res = true
  m1.forEach((v, k) => {
    if (m2.get(k) === undefined || m2.get(k)! < v) {
      res = false
      return
    }
  })
  return res
};

function test_00383() {
  let ransomNote = "a", magazine = "b"
  console.log(canConstruct(ransomNote, magazine));
  ransomNote = "aa", magazine = "aab"
  console.log(canConstruct(ransomNote, magazine));
}

test_00383()
