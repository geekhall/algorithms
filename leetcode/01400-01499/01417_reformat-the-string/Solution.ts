/**
 * ID:    01417
 * Title: Reformat The String
 * Difficulty: Easy
 * Description: You are given an alphanumeric string s. (Alphanumeric string is a string consisting of lowercase English letters and digits).
 *
 * You have to find a permutation of the string where no letter is followed by another letter and no digit is followed by another digit. That is, no two adjacent characters have the same type.
 *
 * Return the reformatted string or return an empty string if it is impossible to reformat the string.
 *
 * Example 1:
 *
 * Input: s = "a0b1c2" Output:"0a1b2c" Explanation: No two adjacent characters have the same type in "0a1b2c". "a0b1c2", "0a1b2c", "0c2a1b" are also valid permutations.
 *
 * Example 2:
 *
 * Input: s = "leetcode" Output:"" Explanation:"leetcode" has only characters so we cannot separate them by digits.
 *
 * Example 3:
 *
 * Input: s = "1229857369" Output:"" Explanation:"1229857369" has only digits so we cannot separate them by characters.
 *
 * Constraints:
 *
 * 1 <= s.length <= 500
 * s consists of only lowercase English letters and/or digits.
 */
function reformat(s: string): string {
  let res = ""
  let alphaStack = []
  let digitStack = []
  for (let i = 0; i < s.length; i++) {
    if (s[i] >= '0' && s[i] <= '9') {
      digitStack.push(s[i])
    } else {
      alphaStack.push(s[i])
    }
  }
  if (Math.abs(alphaStack.length - digitStack.length) > 1) {
    return ""
  }
  if (alphaStack.length >= digitStack.length) {
    for (let i = 0; i < alphaStack.length + digitStack.length; i++) {
      if (i % 2) {
        res += digitStack[Math.floor(i / 2)]
      } else {
        res += alphaStack[i / 2]
      }
    }
  } else {
    for (let i = 0; i < alphaStack.length + digitStack.length; i++) {
      if (i % 2) {
        res += alphaStack[Math.floor(i / 2)]
      } else {
        res += digitStack[i / 2]
      }
    }
  }

  return res
};

function test_01417() {
  let s = "a0b1c2"
  console.log(reformat(s));

}

test_01417()
