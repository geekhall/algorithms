/**
 * ID:    01941
 * Title: Check if All Characters Have Equal Number of Occurrences
 * Difficulty: Easy
 * Description: Given a string s, return true if s is a good string, or false otherwise.
 *
 * A string s is good if all the characters that appear in s have the same number of occurrences (i.e., the same frequency).
 *
 * Example 1:
 *
 * Input: s = "abacbc" Output: true Explanation: The characters that appear in s are 'a', 'b', and 'c'. All characters occur 2 times in s.
 *
 * Example 2:
 *
 * Input: s = "aaabb" Output: false Explanation: The characters that appear in s are 'a' and 'b'. 'a' occurs 3 times while 'b' occurs 2 times, which is not the same number of times.
 *
 * Constraints:
 *
 * 1 <= s.length <= 1000
 * s consists of lowercase English letters.
 */
function areOccurrencesEqual(s: string): boolean {
  let m = new Map()
  for (let i = 0; i < s.length; i++) {
    if (m.get(s[i]) === undefined) {
      m.set(s[i], 1)
    } else {
      m.set(s[i], m.get(s[i]) + 1)
    }
  }

  return new Set(Array.from(m.values())).size === 1
};

function test_01941() {
  let s = "abacbc"
  console.log(areOccurrencesEqual(s));
  s = "aaabb"
  console.log(areOccurrencesEqual(s));
}

test_01941()
