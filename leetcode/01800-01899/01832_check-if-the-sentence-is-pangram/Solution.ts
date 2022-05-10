/**
 * ID:    01832
 * Title: Check if the Sentence Is Pangram
 * Difficulty: Easy
 * Description: A pangram is a sentence where every letter of the English alphabet appears at least once.
 *
 * Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.
 *
 * Example 1:
 *
 * Input: sentence = "thequickbrownfoxjumpsoverthelazydog" Output: true Explanation: sentence contains at least one of every letter of the English alphabet.
 *
 * Example 2:
 *
 * Input: sentence = "leetcode" Output: false
 *
 * Constraints:
 *
 * 1 <= sentence.length <= 1000
 * sentence consists of lowercase English letters.
 */
function checkIfPangram(sentence: string): boolean {
  // let letters = new Set(Array.from({ length: 26 }, (_, k) => String.fromCharCode(k + 97)))
  return new Set(Array.from(sentence)).size === 26
};

function test_01832() {
  let sentence = "leetcode"
  console.log(checkIfPangram(sentence));
  sentence = "thequickbrownfoxjumpsoverthelazydog"
  console.log(checkIfPangram(sentence));
}

test_01832()
