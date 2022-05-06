/**
 * ID:    00058
 * Title: Length of Last Word
 * Difficulty: Easy
 * Description: Given a string s consisting of some words separated by some number of spaces, return the length of the last word in the string.
 *
 * A word is a maximal substring consisting of non-space characters only.
 *
 * Example 1:
 *
 * Input: s = "Hello World" Output: 5 Explanation: The last word is "World" with length 5.
 *
 * Example 2:
 *
 * Input: s = " fly me to the moon " Output: 4 Explanation: The last word is "moon" with length 4.
 *
 * Example 3:
 *
 * Input: s = "luffy is still joyboy" Output: 6 Explanation: The last word is "joyboy" with length 6.
 *
 * Constraints:
 *
 * 1 <= s.length <= 10 4
 * s consists of only English letters and spaces ' '.
 * There will be at least one word in s.
 */
function lengthOfLastWord1(s: string): number {
  let arr = s.split(" ")
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] !== "")
      return arr[i].length
  }
  return 0
};

function lengthOfLastWord(s: string): number {
  let n = s.length

  let end = 0
  for (let i = n - 1; i >= 0; i--) {
    if (s.charAt(i) !== " ") {
      end = i + 1
      break
    }
  }
  let start = 0
  for (let i = end - 1; i >= 0; i--) {
    if (s.charAt(i) === " ") {
      start = i + 1
      break
    }
  }
  return end - start
};

function test_00058() {
  let s = "luffy is still joyboy"
  console.log(lengthOfLastWord(s));
  s = " fly me to the moon "
  console.log(lengthOfLastWord(s));
  s = "a"
  console.log(lengthOfLastWord(s));
  s = "a "
  console.log(lengthOfLastWord(s));
  s = " a "
  console.log(lengthOfLastWord(s));
}

test_00058()
