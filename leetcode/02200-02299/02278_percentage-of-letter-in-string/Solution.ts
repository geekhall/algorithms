/**
 * ID:    02278
 * Title: Percentage of Letter in String
 * Difficulty: Easy
 * Description: Given a string s and a character letter, return the percentage of characters in s that equal letter rounded down to the nearest whole percent.
 *
 * Example 1:
 *
 * Input: s = "foobar", letter = "o" Output: 33 Explanation: The percentage of characters in s that equal the letter 'o' is 2 / 6 * 100% = 33% when rounded down, so we return 33.
 *
 * Example 2:
 *
 * Input: s = "jjjj", letter = "k" Output: 0 Explanation: The percentage of characters in s that equal the letter 'k' is 0%, so we return 0.
 *
 * Constraints:
 *
 * 1 <= s.length <= 100
 * s consists of lowercase English letters.
 * letter is a lowercase English letter.
 */
function percentageLetter(s: string, letter: string): number {
  let count = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] === letter) {
      count++
    }
  }
  return Math.floor(count / s.length * 100)
};

function test_02278() {
  let s = "foobar"
  let letter = "o"
  console.log(percentageLetter(s, letter))
  s = "jjjj"
  letter = "k"
  console.log(percentageLetter(s, letter))
}

test_02278()
