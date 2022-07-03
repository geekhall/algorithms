/**
 * ID:    00424
 * Title: Longest Repeating Character Replacement
 * Difficulty: Medium
 * Description: You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.
 *
 * Return the length of the longest substring containing the same letter you can get after performing the above operations.
 *
 * Example 1:
 *
 * Input: s = "ABAB", k = 2 Output: 4 Explanation: Replace the two 'A's with two 'B's or vice versa.
 *
 * Example 2:
 *
 * Input: s = "AABABBA", k = 1 Output: 4 Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA". The substring "BBBB" has the longest repeating letters, which is 4.
 *
 * Constraints:
 *
 * 1 <= s.length <= 10 5
 * s consists of only uppercase English letters.
 * 0 <= k <= s.length
 */

function characterReplacement(s: string, k: number): number {
  const map: Map<string, number> = new Map()
  let max = 0
  let left = 0
  for (let right = 0; right < s.length; right++) {
    const c = s[right]
    map.set(c, (map.get(c) || 0) + 1)
    max = Math.max(max, map.get(c)!)
    // right - left + 1 = length of substring, including left and right
    // right - left + 1 表示从left到right的子串长度，包括两端
    // max 表示从left到right的子串中最多的重复字符的个数
    // 如果right - left + 1 - max > k，说明当前子串中的重复字符个数超过了k，需要替换
    // 如果right - left + 1 - max <= k，说明当前子串中的重复字符个数没有超过k，不需要替换
    if (right - left + 1 - max > k) {
      const d = s[left]
      map.set(d, map.get(d)! - 1)
      left++
    }
  }
  return s.length - left
};

function test_00424() {
  let s = "ABAB", k = 2
  console.log(characterReplacement(s, k));
  s = "AABABBA", k = 1
  console.log(characterReplacement(s, k));
}

test_00424()
