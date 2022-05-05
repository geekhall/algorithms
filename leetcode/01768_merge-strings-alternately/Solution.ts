/**
 * ID:    01768
 * Title: Merge Strings Alternately
 * Difficulty: Easy
 * Description: You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.
 *
 * Return the merged string.
 *
 * Example 1:
 *
 * Input: word1 = "abc", word2 = "pqr" Output:"apbqcr" Explanation: The merged string will be merged as so: word1: a b c word2: p q r merged: a p b q c r
 *
 * Example 2:
 *
 * Input: word1 = "ab", word2 = "pqrs" Output:"apbqrs" Explanation: Notice that as word2 is longer, "rs" is appended to the end. word1: a b word2: p q r s merged: a p b q r s
 *
 * Example 3:
 *
 * Input: word1 = "abcd", word2 = "pq" Output:"apbqcd" Explanation: Notice that as word1 is longer, "cd" is appended to the end. word1: a b c d word2: p q merged: a p b q c d
 *
 * Constraints:
 *
 * 1 <= word1.length, word2.length <= 100
 * word1 and word2 consist of lowercase English letters.
 */
function mergeAlternately1(word1: string, word2: string): string {
  let n1 = word1.length
  let n2 = word2.length
  let min = n1 > n2 ? n2 : n1
  let res = ""
  let p = 0
  while (p < min) {
    res = res.concat(word1.charAt(p)).concat(word2.charAt(p))
    p++
  }
  if (n1 > n2)
    res = res.concat(word1.substring(min))
  else
    res = res.concat(word2.substring(min))
  return res
};
function mergeAlternately(word1: string, word2: string): string {
  let res = []
  while (word1.length > 0 || word2.length > 0) {
    if (word1.length > 0) {
      res.push(word1.charAt(0))
      word1 = word1.slice(1)
    }
    if (word2.length > 0) {
      res.push(word2.charAt(0))
      word2 = word2.slice(1)
    }
  }
  return res.join("")
};

function test_01768() {
  let word1 = "abc", word2 = "pqr"
  console.log(mergeAlternately(word1, word2));
  word1 = "ab", word2 = "pqrs"
  console.log(mergeAlternately(word1, word2));
  word1 = "abcd", word2 = "pq"
  console.log(mergeAlternately(word1, word2));
}

test_01768()
