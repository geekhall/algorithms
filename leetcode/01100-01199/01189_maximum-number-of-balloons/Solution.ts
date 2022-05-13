/**
 * ID:    01189
 * Title: Maximum Number of Balloons
 * Difficulty: Easy
 * Description: Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.
 *
 * You can use each character in text at most once. Return the maximum number of instances that can be formed.
 *
 * Example 1:
 *
 * Input: text = "nlaebolko" Output: 1
 *
 * Example 2:
 *
 * Input: text = "loonbalxballpoon" Output: 2
 *
 * Example 3:
 *
 * Input: text = "leetcode" Output: 0
 *
 * Constraints:
 *
 * 1 <= text.length <= 10 4
 * text consists of lower case English letters only.
 */
function maxNumberOfBalloons(text: string): number {
  let m = str2map(text)
  let b = m.get('b') === undefined ? 0 : m.get('b')!
  let a = m.get('a') === undefined ? 0 : m.get('a')!
  let l = m.get('l') === undefined ? 0 : m.get('l')!
  let o = m.get('o') === undefined ? 0 : m.get('o')!
  let n = m.get('n') === undefined ? 0 : m.get('n')!
  return Math.min(b, a, Math.floor(l / 2), Math.floor(o / 2), n)
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


function test_01189() {
  let text = "nlaebolko"
  console.log(maxNumberOfBalloons(text));
  text = "loonbalxballpoon"
  console.log(maxNumberOfBalloons(text));
  text = "leetcode"
  console.log(maxNumberOfBalloons(text));
}

test_01189()
