/**
 * ID:    02000
 * Title: Reverse Prefix of Word
 * Difficulty: Easy
 * Description: Given a 0-indexed string word and a character ch, reverse the segment of word that starts at index 0 and ends at the index of the first occurrence of ch (inclusive). If the character ch does not exist in word, do nothing.
 *
 * For example, if word = "abcdefd" and ch = "d", then you should reverse the segment that starts at 0 and ends at 3 (inclusive). The resulting string will be " dcba efd".
 *
 * Return the resulting string.
 *
 * Example 1:
 *
 * Input: word = " abcd efd", ch = "d" Output:" dcba efd" Explanation: The first occurrence of "d" is at index 3. Reverse the part of word from 0 to 3 (inclusive), the resulting string is "dcbaefd".
 *
 * Example 2:
 *
 * Input: word = " xyxz xe", ch = "z" Output:" zxyx xe" Explanation: The first and only occurrence of "z" is at index 3. Reverse the part of word from 0 to 3 (inclusive), the resulting string is "zxyxxe".
 *
 * Example 3:
 *
 * Input: word = "abcd", ch = "z" Output:"abcd" Explanation:"z" does not exist in word. You should not do any reverse operation, the resulting string is "abcd".
 *
 * Constraints:
 *
 * 1 <= word.length <= 250
 * word consists of lowercase English letters.
 * ch is a lowercase English letter.
 */
function reversePrefix(word: string, ch: string): string {
  if (word.indexOf(ch) === -1)
    return word
  let pre = word.substring(0, word.indexOf(ch) + 1)
  let remain = word.substring(word.indexOf(ch) + 1)
  return Array.from(pre).reverse().join("").concat(remain)
};

function test_02000() {
  let word = "abcd efd", ch = "d"
  console.log(reversePrefix(word, ch));

}

test_02000()
