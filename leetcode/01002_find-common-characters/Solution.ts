/**
 * ID:    01002
 * Title: Find Common Characters
 * Difficulty: Easy
 * Description: Given a string array words, return an array of all characters that show up in all strings within the words (including duplicates). You may return the answer in any order.
 *
 * Example 1:
 *
 * Input: words = ["bella","label","roller"] Output: ["e","l","l"]
 *
 * Example 2:
 *
 * Input: words = ["cool","lock","cook"] Output: ["c","o"]
 *
 * Constraints:
 *
 * 1 <= words.length <= 100
 * 1 <= words[i].length <= 100
 * words[i] consists of lowercase English letters.
 */
function commonChars(words: string[]): string[] {
  let n = words.length
  if (n === 0)
    return []
  let res = new Array()

  Array.from(words[0]).forEach((v, i) => {
    let flag = true
    let indexes: number[] = new Array(words.length - 1).fill(0)
    for (let i = 1; i < words.length; i++) {
      indexes[i] = words[i].indexOf(v)
      if (indexes[i] === -1) {
        flag = false
        break
      }
    }
    // v is common char
    if (flag === true) {
      res.push(v)
      for (let i = 1; i < words.length; i++) {
        // remove v from words
        words[i] = words[i].substring(0, indexes[i]) + words[i].substring(indexes[i] + 1)
      }
    }
  })
  return res
};

function test_01002() {
  let words = ["cool", "lock", "cook"]
  console.log(commonChars(words));
  words = ["bella", "label", "roller"]
  console.log(commonChars(words));
}

test_01002()

