/**
 * ID:    00005
 * Title: Longest Palindromic Substring
 * Difficulty: Medium
 * Description: Given a string s, return the longest palindromic substring in s.
 *
 * Example 1:
 *
 * Input: s = "babad" Output:"bab" Explanation:"aba" is also a valid answer.
 *
 * Example 2:
 *
 * Input: s = "cbbd" Output:"bb"
 *
 * Constraints:
 *
 * 1 <= s.length <= 1000
 * s consist of only digits and English letters.
 */
function longestPalindrome(s: string): string {
  let res = '';
  for (let i = 0; i < s.length; i++) {
    let left = i, right = i;
    while (left >= 0 && right < s.length) {
      if (s[left] === s[right]) {
        left--;
        right++;
      } else {
        break;
      }
    }
    if (res.length < right - left - 1) {
      res = s.slice(left + 1, right);
    }
  }
  for (let i = 0; i < s.length; i++) {
    let left = i, right = i + 1;
    while (left >= 0 && right < s.length) {
      if (s[left] === s[right]) {
        left--;
        right++;
      } else {
        break;
      }
    }
    if (res.length < right - left - 1) {
      res = s.slice(left + 1, right);
    }
  }
  return res;
};

function test_00005() {
  console.log(longestPalindrome('babad'));
  console.log(longestPalindrome('cbbd'));
}

test_00005()
