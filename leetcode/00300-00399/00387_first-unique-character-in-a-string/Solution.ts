/**
 * ID:    00387
 * Title: First Unique Character in a String
 * Difficulty: Easy
 * Description: Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.
 *
 * Example 1:
 *
 * Input: s = "leetcode" Output: 0
 *
 * Example 2:
 *
 * Input: s = "loveleetcode" Output: 2
 *
 * Example 3:
 *
 * Input: s = "aabb" Output: -1
 *
 * Constraints:
 *
 * 1 <= s.length <= 10 5
 * s consists of only lowercase English letters.
 */
function firstUniqChar(s: string): number {
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
  let m = str2map(s)
  for (let i = 0; i < s.length; i++) {
    if (m.get(s.charAt(i)) === 1) {
      return i
    }
  }
  return -1
};

function test_00387() {
  let s = "leetcode"
  console.log(firstUniqChar(s));
  s = "loveleetcode"
  console.log(firstUniqChar(s));
  s = "aabb"
  console.log(firstUniqChar(s));

}

test_00387()
