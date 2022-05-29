/**
 * ID:    00748
 * Title: Shortest Completing Word
 * Difficulty: Easy
 * Description: Given a string licensePlate and an array of strings words, find the shortest completing word in words.
 *
 * A completing word is a word that contains all the letters in licensePlate. Ignore numbers and spaces in licensePlate, and treat letters as case insensitive. If a letter appears more than once in licensePlate, then it must appear in the word the same number of times or more.
 *
 * For example, if licensePlate = "aBc 12c", then it contains letters 'a', 'b' (ignoring case), and 'c' twice. Possible completing words are "abccdef", "caaacab", and "cbca".
 *
 * Return the shortest completing word in words. It is guaranteed an answer exists. If there are multiple shortest completing words, return the first one that occurs in words.
 *
 * Example 1:
 *
 * Input: licensePlate = "1s3 PSt", words = ["step","steps","stripe","stepple"] Output:"steps" Explanation: licensePlate contains letters 's', 'p', 's' (ignoring case), and 't'. "step" contains 't' and 'p', but only contains 1 's'. "steps" contains 't', 'p', and both 's' characters. "stripe" is missing an 's'. "stepple" is missing an 's'. Since "steps" is the only word containing all the letters, that is the answer.
 *
 * Example 2:
 *
 * Input: licensePlate = "1s3 456", words = ["looks","pest","stew","show"] Output:"pest" Explanation: licensePlate only contains the letter 's'. All the words contain 's', but among these "pest", "stew", and "show" are shortest. The answer is "pest" because it is the word that appears earliest of the 3.
 *
 * Constraints:
 *
 * 1 <= licensePlate.length <= 7
 * licensePlate contains digits, letters (uppercase or lowercase), or space ' '.
 * 1 <= words.length <= 1000
 * 1 <= words[i].length <= 15
 * words[i] consists of lower case English letters.
 */
function shortestCompletingWord(licensePlate: string, words: string[]): string {
  licensePlate = licensePlate.replace(/[^a-zA-Z]/g, '').toLowerCase()
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
  let m = str2map(licensePlate)
  let resMap = new Map()
  let minLength = Number.MAX_SAFE_INTEGER
  for (let i = 0; i < words.length; i++) {
    let w = str2map(words[i])
    let res = true
    m.forEach((v, k) => {
      if (w.get(k) === undefined || w.get(k)! < v) {
        res = false
        return
      }
    })
    if (res) {
      resMap.set(words[i], words[i].length)
    }
  }

  return [...resMap.entries()].sort((a, b) => a[1] - b[1])[0][0]
};

function test_00748() {
  let licensePlate = "1s3 PSt", words = ["step", "steps", "stripe", "stepple"]
  console.log(shortestCompletingWord(licensePlate, words))
  licensePlate = "1s3 456", words = ["looks", "pest", "stew", "show"]
  console.log(shortestCompletingWord(licensePlate, words))
}

test_00748()
