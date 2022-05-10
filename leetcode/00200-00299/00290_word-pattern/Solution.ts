/**
 * ID:    00290
 * Title: Word Pattern
 * Difficulty: Easy
 * Description: Given a pattern and a string s, find if s follows the same pattern.
 *
 * Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.
 *
 * Example 1:
 *
 * Input: pattern = "abba", s = "dog cat cat dog" Output: true
 *
 * Example 2:
 *
 * Input: pattern = "abba", s = "dog cat cat fish" Output: false
 *
 * Example 3:
 *
 * Input: pattern = "aaaa", s = "dog cat cat dog" Output: false
 *
 * Constraints:
 *
 * 1 <= pattern.length <= 300
 * pattern contains only lower-case English letters.
 * 1 <= s.length <= 3000
 * s contains only lowercase English letters and spaces ' '.
 * s does not contain any leading or trailing spaces.
 * All the words in s are separated by a single space.
 */
function wordPattern(pattern: string, s: string): boolean {
  let arr = s.split(' ')
  let m = new Map()
  if (pattern.length !== arr.length) {
    return false
  }
  for (let i = 0; i < pattern.length; i++) {
    if (m.get(pattern[i]) === undefined) {
      m.set(pattern[i], arr[i])
    } else {
      if (m.get(pattern[i]) !== arr[i]) {
        return false
      }
    }
  }
  m.clear()
  for (let i = 0; i < arr.length; i++) {
    if (m.get(arr[i]) === undefined) {
      m.set(arr[i], pattern[i])
    } else {
      if (m.get(arr[i]) !== pattern[i]) {
        return false
      }
    }
  }
  return true
};

function test_00290() {
  let pattern = "abba", s = "dog cat cat dog"
  console.log(wordPattern(pattern, s));
  pattern = "abba", s = "dog cat cat fish"
  console.log(wordPattern(pattern, s));
  pattern = "aaaa", s = "dog cat cat dog"
  console.log(wordPattern(pattern, s));
  pattern = "abba", s = "dog dog dog dog"
  console.log(wordPattern(pattern, s));


}

test_00290()
