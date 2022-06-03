/**
 * ID:    01961
 * Title: Check If String Is a Prefix of Array
 * Difficulty: Easy
 * Description: Given a string s and an array of strings words, determine whether s is a prefix string of words.
 *
 * A string s is a prefix string of words if s can be made by concatenating the first k strings in words for some positive k no larger than words.length.
 *
 * Return true if s is a prefix string of words, or false otherwise.
 *
 * Example 1:
 *
 * Input: s = "iloveleetcode", words = ["i","love","leetcode","apples"] Output: true Explanation: s can be made by concatenating "i", "love", and "leetcode" together.
 *
 * Example 2:
 *
 * Input: s = "iloveleetcode", words = ["apples","i","love","leetcode"] Output: false Explanation: It is impossible to make s using a prefix of arr.
 *
 * Constraints:
 *
 * 1 <= words.length <= 100
 * 1 <= words[i].length <= 20
 * 1 <= s.length <= 1000
 * words[i] and s consist of only lowercase English letters.
 */
function isPrefixString(s: string, words: string[]): boolean {
  if (words.length === 1) {
    return words[0] === s
  }
  for (let i = 1; i <= words.length; i++) {
    if (words.slice(0, i).reduce((a, b) => a + b, '') === s) {
      return true
    }
  }
  return false
};

function test_01961() {
  let s = "iloveleetcode"
  let words = ["i", "love", "leetcode", "apples"]
  console.log(isPrefixString(s, words))
  s = "iloveleetcode"
  words = ["apples", "i", "love", "leetcode"]
  console.log(isPrefixString(s, words))
  s = "aaaaaaa", words = ["a", "a", "a", "a", "a", "a", "a"]
  console.log(isPrefixString(s, words))

}

test_01961()
