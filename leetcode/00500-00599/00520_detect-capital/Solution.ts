/**
 * ID:    00520
 * Title: Detect Capital
 * Difficulty: Easy
 * Description: We define the usage of capitals in a word to be right when one of the following cases holds:
 *
 * All letters in this word are capitals, like "USA".
 * All letters in this word are not capitals, like "leetcode".
 * Only the first letter in this word is capital, like "Google".
 *
 * Given a string word, return true if the usage of capitals in it is right.
 *
 * Example 1:
 *
 * Input: word = "USA" Output: true
 *
 * Example 2:
 *
 * Input: word = "FlaG" Output: false
 *
 * Constraints:
 *
 * 1 <= word.length <= 100
 * word consists of lowercase and uppercase English letters.
 */
function detectCapitalUse(word: string): boolean {
  if (word[0].charCodeAt(0) >= 65 &&
    word[0].charCodeAt(0) <= 97 &&
    word.slice(1).toLowerCase() === word.slice(1))
    return true
  if (word.toUpperCase() === word || word.toLowerCase() === word)
    return true
  return false
};
function test_00520() {
  let word = "USA"
  console.log(detectCapitalUse(word));
  word = "FlaG"
  console.log(detectCapitalUse(word));
  word = "Flag"
  console.log(detectCapitalUse(word));
  word = "g"
  console.log(detectCapitalUse(word));
}

test_00520()
