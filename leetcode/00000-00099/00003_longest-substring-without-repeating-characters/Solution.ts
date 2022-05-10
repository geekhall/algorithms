/**
 * ID:    00003
 * Title: Longest Substring Without Repeating Characters
 * Difficulty: Medium
 * Description: Given a string s, find the length of the longest substring without repeating characters.
 *
 * Example 1:
 *
 * Input: s = "abcabcbb" Output: 3 Explanation: The answer is "abc", with the length of 3.
 *
 * Example 2:
 *
 * Input: s = "bbbbb" Output: 1 Explanation: The answer is "b", with the length of 1.
 *
 * Example 3:
 *
 * Input: s = "pwwkew" Output: 3 Explanation: The answer is "wke", with the length of 3. Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 *
 * Constraints:
 *
 * 0 <= s.length <= 5 * 10 4
 * s consists of English letters, digits, symbols and spaces.
 */
function lengthOfLongestSubstring(s: string): number {
  let ans = 0
  let set = new Set()
  let n = s.length
  for (let i = 0; i < n; i++) {
    set.clear()
    set.add(s[i])
    let right = i + 1
    for (; right < n && !set.has(s[right]); right++) {
      set.add(s[right])
    }

    if (ans < right - i)
      ans = right - i
  }
  return ans
};

function test_00003() {
  console.log(lengthOfLongestSubstring("abcabcbb"));// 3
  console.log(lengthOfLongestSubstring("bbbbb"));   // 1
  console.log(lengthOfLongestSubstring("pwwkew"));  // 3
  console.log(lengthOfLongestSubstring(" "));  // 1
  console.log(lengthOfLongestSubstring("dvdf"));  // 3
  console.log(lengthOfLongestSubstring("abcabcbb"));  // 3
  console.log(lengthOfLongestSubstring("abcdssabcdefgs"));  // 8
}

test_00003()
