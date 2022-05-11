/**
 * ID:    01624
 * Title: Largest Substring Between Two Equal Characters
 * Difficulty: Easy
 * Description: Given a string s, return the length of the longest substring between two equal characters, excluding the two characters. If there is no such substring return -1.
 *
 * A substring is a contiguous sequence of characters within a string.
 *
 * Example 1:
 *
 * Input: s = "aa" Output: 0 Explanation: The optimal substring here is an empty substring between the two 'a's.
 *
 * Example 2:
 *
 * Input: s = "abca" Output: 2 Explanation: The optimal substring here is "bc".
 *
 * Example 3:
 *
 * Input: s = "cbzxy" Output: -1 Explanation: There are no characters that appear twice in s.
 *
 * Constraints:
 *
 * 1 <= s.length <= 300
 * s contains only lowercase English letters.
 */
function maxLengthBetweenEqualCharacters(s: string): number {
  let left = 0
  let right = s.length - 1
  while (s[left] !== s[right]) {
    if (right === s.length - 1) {
      right = right - left - 1
      left = 0
    } else {
      left++
      right++
    }
  }
  return right - left - 1
};

function test_01624() {
  let s = "aa"
  console.log(maxLengthBetweenEqualCharacters(s));
  s = "abca"
  console.log(maxLengthBetweenEqualCharacters(s));
  s = "bczxcy"
  console.log(maxLengthBetweenEqualCharacters(s));
}

test_01624()
