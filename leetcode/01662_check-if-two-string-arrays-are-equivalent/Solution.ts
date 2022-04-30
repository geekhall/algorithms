/**
 * ID:    01662
 * Title: Check If Two String Arrays are Equivalent
 * Difficulty: Easy
 * Description: Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise.
 *
 * A string is represented by an array if the array elements concatenated in order forms the string.
 *
 * Example 1:
 *
 * Input: word1 = ["ab", "c"], word2 = ["a", "bc"] Output: true Explanation: word1 represents string "ab" + "c" -> "abc" word2 represents string "a" + "bc" -> "abc" The strings are the same, so return true.
 *
 * Example 2:
 *
 * Input: word1 = ["a", "cb"], word2 = ["ab", "c"] Output: false
 *
 * Example 3:
 *
 * Input: word1 = ["abc", "d", "defg"], word2 = ["abcddefg"] Output: true
 *
 * Constraints:
 *
 * 1 <= word1.length, word2.length <= 10 3
 * 1 <= word1[i].length, word2[i].length <= 10 3
 * 1 <= sum(word1[i].length), sum(word2[i].length) <= 10 3
 * word1[i] and word2[i] consist of lowercase letters.
 */
function arrayStringsAreEqual(word1: string[], word2: string[]): boolean {
  return word1.reduce((pre, cur) => pre + cur) === word2.reduce((pre, cur) => pre + cur)
};

function test_01662() {
  let word1 = ["ab", "c"], word2 = ["a", "bc"]
  console.log(arrayStringsAreEqual(word1, word2));
  word1 = ["a", "cb"], word2 = ["ab", "c"]
  console.log(arrayStringsAreEqual(word1, word2));
  word1 = ["abc", "d", "defg"], word2 = ["abcddefg"]
  console.log(arrayStringsAreEqual(word1, word2));
}

test_01662()
