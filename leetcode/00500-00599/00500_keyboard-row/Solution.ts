/**
 * ID:    00500
 * Title: Keyboard Row
 * Difficulty: Easy
 * Description: Given an array of strings words, return the words that can be typed using letters of the alphabet on only one row of American keyboard like the image below.
 *
 * In the American keyboard:
 *
 * the first row consists of the characters "qwertyuiop",
 * the second row consists of the characters "asdfghjkl", and
 * the third row consists of the characters "zxcvbnm".
 *
 * Example 1:
 *
 * Input: words = ["Hello","Alaska","Dad","Peace"] Output: ["Alaska","Dad"]
 *
 * Example 2:
 *
 * Input: words = ["omk"] Output: []
 *
 * Example 3:
 *
 * Input: words = ["adsdf","sfd"] Output: ["adsdf","sfd"]
 *
 * Constraints:
 *
 * 1 <= words.length <= 20
 * 1 <= words[i].length <= 100
 * words[i] consists of English letters (both lowercase and uppercase).
 */
function findWords(words: string[]): string[] {
  let res: string[] = new Array()
  let first = new Set(['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'])
  let second = new Set(['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'])
  let third = new Set(['z', 'x', 'c', 'v', 'b', 'n', 'm'])
  words.forEach((word, i) => {
    let s = new Set(Array.from(word.toLowerCase()))
    if (first.has(word[0].toLowerCase()) && new Set([...s, ...first]).size === 10 ||
      second.has(word[0].toLowerCase()) && new Set([...s, ...second]).size === 9 ||
      third.has(word[0].toLowerCase()) && new Set([...s, ...third]).size === 7) {
      res.push(word)
    }
  })
  return res
};

function test_00500() {
  let words = ["Hello", "Alaska", "Dad", "Peace"]
  console.log(findWords(words));
  words = ["omk"]
  console.log(findWords(words));
  words = ["adsdf", "sfd"]
  console.log(findWords(words));
}

test_00500()
