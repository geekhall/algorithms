/**
 * ID:    01647
 * Title: Minimum Deletions to Make Character Frequencies Unique
 * Difficulty: Medium
 * Description: A string s is called good if there are no two different characters in s that have the same frequency.
 *
 * Given a string s, return the minimum number of characters you need to delete to make s good.
 *
 * The frequency of a character in a string is the number of times it appears in the string. For example, in the string "aab", the frequency of 'a' is 2, while the frequency of 'b' is 1.
 *
 * Example 1:
 *
 * Input: s = "aab" Output: 0 Explanation: s is already good.
 *
 * Example 2:
 *
 * Input: s = "aaabbbcc" Output: 2 Explanation: You can delete two 'b's resulting in the good string "aaabcc". Another way it to delete one 'b' and one 'c' resulting in the good string "aaabbc".
 *
 * Example 3:
 *
 * Input: s = "ceabaacb" Output: 2 Explanation: You can delete both 'c's resulting in the good string "eabaab". Note that we only care about characters that are still in the string at the end (i.e. frequency of 0 is ignored).
 *
 * Constraints:
 *
 * 1 <= s.length <= 10 5
 * s contains only lowercase English letters.
 */
function minDeletions(s: string): number {
  let m = new Map()
  for (let i = 0; i < s.length; i++) {
    m.set(s[i], m.get(s[i]) ? m.get(s[i]) + 1 : 1)
  }

  let res = 0
  let newMap = new Map([...m.entries()].sort((a, b) => b[1] - a[1]))
  let val_set = new Set()
  newMap.forEach((v, k) => {
    if (val_set.has(v)) {
      while (v > 0 && val_set.has(v)) {
        res++
        v--
      }
    }
    val_set.add(v)
  })
  return res
};
function test_01647() {
  let s = "aab"
  console.log(minDeletions(s))
  s = "aaabbbcc"
  console.log(minDeletions(s))
  s = "ceabaacb"
  console.log(minDeletions(s))
}

test_01647()
