/**
 * ID:    00451
 * Title: Sort Characters By Frequency
 * Difficulty: Medium
 * Description: Given a string s, sort it in decreasing order based on the frequency of the characters. The frequency of a character is the number of times it appears in the string.
 *
 * Return the sorted string. If there are multiple answers, return any of them.
 *
 * Example 1:
 *
 * Input: s = "tree" Output:"eert" Explanation: 'e' appears twice while 'r' and 't' both appear once. So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.
 *
 * Example 2:
 *
 * Input: s = "cccaaa" Output:"aaaccc" Explanation: Both 'c' and 'a' appear three times, so both "cccaaa" and "aaaccc" are valid answers. Note that "cacaca" is incorrect, as the same characters must be together.
 *
 * Example 3:
 *
 * Input: s = "Aabb" Output:"bbAa" Explanation:"bbaA" is also a valid answer, but "Aabb" is incorrect. Note that 'A' and 'a' are treated as two different characters.
 *
 * Constraints:
 *
 * 1 <= s.length <= 5 * 10 5
 * s consists of uppercase and lowercase English letters and digits.
 */
function frequencySort(s: string): string {
  const str2map = (str: string): Map<string, number> => {
    let m = new Map<string, number>()
    for (let i = 0; i < str.length; i++) {
      if (m.get(str[i]) === undefined) {
        m.set(str[i], 1)
      } else {
        m.set(str[i], m.get(str[i])! + 1)
      }
    }
    return m
  }
  let m = new Map([...str2map(s).entries()].sort((a, b) => b[1] - a[1]))
  let res = ""
  m.forEach((v, k) => {
    for (let i = 0; i < v; i++) {
      res += k
    }
  })
  return res
};

function test_00451() {
  let s = "tree"

  console.log(frequencySort(s));


}

test_00451()
