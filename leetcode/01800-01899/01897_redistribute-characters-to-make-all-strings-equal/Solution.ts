/**
 * ID:    01897
 * Title: Redistribute Characters to Make All Strings Equal
 * Difficulty: Easy
 * Description: You are given an array of strings words (0-indexed).
 *
 * In one operation, pick two distinct indices i and j, where words[i] is a non-empty string, and move any character from words[i] to any position in words[j].
 *
 * Return true if you can make every string in words equal using any number of operations, and false otherwise.
 *
 * Example 1:
 *
 * Input: words = ["abc","aabc","bc"] Output: true Explanation: Move the first 'a' in words[1] to the front of words[2], to make words[1] = "abc" and words[2] = "abc". All the strings are now equal to "abc", so return true.
 *
 * Example 2:
 *
 * Input: words = ["ab","a"] Output: false Explanation: It is impossible to make all the strings equal using the operation.
 *
 * Constraints:
 *
 * 1 <= words.length <= 100
 * 1 <= words[i].length <= 100
 * words[i] consists of lowercase English letters.
 */
function makeEqual(words: string[]): boolean {
  if (words.length === 1)
    return true
  let m = new Map()
  for (let word of words) {
    Array.from(word).forEach((v, i) => {
      if (m.get(v) === undefined) {
        m.set(v, 1)
      } else {
        m.set(v, m.get(v) + 1)
      }
    })
  }
  let values = Array.from(m.values())
  for (let v of values) {
    if (v % words.length !== 0) {
      return false
    }
  }
  return true
};

function makeEqual1(words: string[]): boolean {
  if (words.length === 1)
    return true
  let m = new Array(26).fill(0)
  for (let word of words) {
    Array.from(word).forEach((v, _) => {
      m[v.charCodeAt(0) - 97]++
    })
  }
  for (let v of m) {
    if (v % words.length !== 0) {
      return false
    }
  }
  return true
};


function test_01897() {
  let words = ["abc", "aabc", "bc"]
  console.log(makeEqual(words));
  words = ["ab", "a"]
  console.log(makeEqual(words));
  words = ["a", "b"]
  console.log(makeEqual(words));
  words = ["abbab"]
  console.log(makeEqual(words));
  words = ["caaaaa", "aaaaaaaaa", "a", "bbb", "bbbbbbbbb", "bbb", "cc", "cccccccccccc", "ccccccc", "ccccccc", "cc", "cccc", "c", "cccccccc", "c"]
  console.log(makeEqual(words));

}

test_01897()
