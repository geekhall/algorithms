/**
 * ID:    01160
 * Title: Find Words That Can Be Formed by Characters
 * Difficulty: Easy
 * Description: You are given an array of strings words and a string chars.
 *
 * A string is good if it can be formed by characters from chars (each character can only be used once).
 *
 * Return the sum of lengths of all good strings in words.
 *
 * Example 1:
 *
 * Input: words = ["cat","bt","hat","tree"], chars = "atach" Output: 6 Explanation: The strings that can be formed are "cat" and "hat" so the answer is 3 + 3 = 6.
 *
 * Example 2:
 *
 * Input: words = ["hello","world","leetcode"], chars = "welldonehoneyr" Output: 10 Explanation: The strings that can be formed are "hello" and "world" so the answer is 5 + 5 = 10.
 *
 * Constraints:
 *
 * 1 <= words.length <= 1000
 * 1 <= words[i].length, chars.length <= 100
 * words[i] and chars consist of lowercase English letters.
 */
function countCharacters(words: string[], chars: string): number {
  let res = 0
  let m = str2map(chars)

  words.forEach((word, i) => {
    let w = str2map(word)
    let canForm = true
    w.forEach((_, k) => {
      if (m.get(k) === undefined || m.get(k)! < w.get(k)!) {
        canForm = false
        return
      }
    })
    if (canForm) {
      res += word.length
    }
  })

  return res
};

function str2map(str: string): Map<string, number> {
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


function test_01160() {
  let words = ["cat", "bt", "hat", "tree"], chars = "atach"
  console.log(countCharacters(words, chars));
  words = ["hello", "world", "leetcode"], chars = "welldonehoneyr"
  console.log(countCharacters(words, chars));

}

test_01160()
