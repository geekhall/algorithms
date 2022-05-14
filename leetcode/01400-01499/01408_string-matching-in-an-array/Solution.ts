/**
 * ID:    01408
 * Title: String Matching in an Array
 * Difficulty: Easy
 * Description: Given an array of string words. Return all strings in words which is substring of another word in any order.
 *
 * String words[i] is substring of words[j], if can be obtained removing some characters to left and/or right side of words[j].
 *
 * Example 1:
 *
 * Input: words = ["mass","as","hero","superhero"] Output: ["as","hero"] Explanation:"as" is substring of "mass" and "hero" is substring of "superhero". ["hero","as"] is also a valid answer.
 *
 * Example 2:
 *
 * Input: words = ["leetcode","et","code"] Output: ["et","code"] Explanation:"et", "code" are substring of "leetcode".
 *
 * Example 3:
 *
 * Input: words = ["blue","green","bu"] Output: []
 *
 * Constraints:
 *
 * 1 <= words.length <= 100
 * 1 <= words[i].length <= 30
 * words[i] contains only lowercase English letters.
 * It's guaranteed that words[i] will be unique.
 */
function stringMatching(words: string[]): string[] {
  let res: string[] = []
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words.length; j++) {
      if (i !== j && words[j].indexOf(words[i]) !== -1) {
        res.push(words[i])
        break
      }
    }
  }
  return res
};

function test_01408() {
  let words = ["mass", "as", "hero", "superhero"]
  console.log(stringMatching(words));
  words = ["leetcode", "et", "code"]
  console.log(stringMatching(words));
  words = ["blue", "green", "bu"]
  console.log(stringMatching(words));
}

test_01408()
