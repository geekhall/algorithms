/**
 * ID:    00819
 * Title: Most Common Word
 * Difficulty: Easy
 * Description: Given a string paragraph and a string array of the banned words banned, return the most frequent word that is not banned. It is guaranteed there is at least one word that is not banned, and that the answer is unique.
 *
 * The words in paragraph are case-insensitive and the answer should be returned in lowercase.
 *
 * Example 1:
 *
 * Input: paragraph = "Bob hit a ball, the hit BALL flew far after it was hit.", banned = ["hit"] Output:"ball" Explanation:"hit" occurs 3 times, but it is a banned word. "ball" occurs twice (and no other word does), so it is the most frequent non-banned word in the paragraph. Note that words in the paragraph are not case sensitive, that punctuation is ignored (even if adjacent to words, such as "ball,"), and that "hit" isn't the answer even though it occurs more because it is banned.
 *
 * Example 2:
 *
 * Input: paragraph = "a.", banned = [] Output:"a"
 *
 * Constraints:
 *
 * 1 <= paragraph.length <= 1000
 * paragraph consists of English letters, space ' ', or one of the symbols: "!?',;.".
 * 0 <= banned.length <= 100
 * 1 <= banned[i].length <= 10
 * banned[i] consists of only lowercase English letters.
 */
function mostCommonWord(paragraph: string, banned: string[]): string {
  let arr = paragraph.replace(/[^a-zA-Z ]/g, " ").toLowerCase().split(' ')
  let m = new Map<string, number>()
  let max = 0
  let maxKey = ""
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "")
      continue
    if (banned.indexOf(arr[i]) === -1) {
      if (m.get(arr[i]) === undefined) {
        m.set(arr[i], 1)
        if (max < 1) {
          max = 1
          maxKey = arr[i]
        }
      } else {
        m.set(arr[i], m.get(arr[i])! + 1)
        if (max < m.get(arr[i])!) {
          max = m.get(arr[i])!
          maxKey = arr[i]
        }
      }
    }
  }

  return maxKey
};

function test_00819() {
  let paragraph = "Bob hit a ball, the hit BALL flew far after it was hit.", banned = ["hit"]
  console.log(mostCommonWord(paragraph, banned));
  paragraph = "a.", banned = []
  console.log(mostCommonWord(paragraph, banned));

  paragraph = "a, a, a, a, b,b,b,c, c", banned = ["a"]
  console.log(mostCommonWord(paragraph, banned));
}

test_00819()
