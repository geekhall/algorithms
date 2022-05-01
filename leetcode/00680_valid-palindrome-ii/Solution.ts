/**
 * ID:    00680
 * Title: Valid Palindrome II
 * Difficulty: Easy
 * Description: Given a string s, return true if the s can be palindrome after deleting at most one character from it.
 *
 * Example 1:
 *
 * Input: s = "aba" Output: true
 *
 * Example 2:
 *
 * Input: s = "abca" Output: true Explanation: You could delete the character 'c'.
 *
 * Example 3:
 *
 * Input: s = "abc" Output: false
 *
 * Constraints:
 *
 * 1 <= s.length <= 10 5
 * s consists of lowercase English letters.
 */
function isPalindrome(s: string): boolean {
  let n = s.length
  let half = Math.floor(n / 2)
  for (let i = 0; i < half; i++) {
    if (s.charAt(i) !== s.charAt(n - i - 1))
      return false
  }
  return true
}
function validPalindrome_too_slow(s: string): boolean {
  if (isPalindrome(s))
    return true
  for (let i = 0; i < s.length; i++) {
    let new_str = s.slice(0, i) + s.slice(i + 1)
    if (isPalindrome(new_str))
      return true
  }
  return false
};
function validPalindrome(s: string): boolean {
  let left = 0
  let right = s.length - 1
  let l1, r1 = 0
  let fail_count = 0
  while (left < right) {
    if (s.charAt(left) !== s.charAt(right)) {
      fail_count++
      break
    }
    left++
    right--
  }
  if (fail_count === 0)
    return true

  if (s.charAt(left) !== s.charAt(right - 1) &&
    s.charAt(left + 1) !== s.charAt(right))
    return false

  l1 = left
  r1 = right - 1
  while (l1 < r1) {
    if (s.charAt(l1) !== s.charAt(r1)) {
      fail_count++
      break
    }
    l1++
    r1--
  }

  l1 = left + 1
  r1 = right
  while (l1 < r1) {
    if (s.charAt(l1) !== s.charAt(r1) && fail_count > 1) {
      return false
    }
    l1++
    r1--
  }
  return true
};
function test_00680() {
  // Input: s = "aba"
  // Output: true
  let str1 = "aba"
  console.log(validPalindrome(str1));


  // Input: s = "abca"
  // Output: true
  // Explanation: You could delete the character 'c'.
  let str2 = "abca"
  console.log(validPalindrome(str2));

  // Input: s = "abc"
  // Output: false
  let str3 = "abc"
  console.log(validPalindrome(str3));

  // let str = "abcde"
  // console.log(str.slice(0, 0)); // ab
  // console.log(str.slice(1));    // de
  // console.log(str.slice(0, 0) + str.slice(1)); // abde

  console.log(validPalindrome("eeccccbebaeeabebccceea"));
  console.log(validPalindrome("ebcbbececabbacecbbcbe"));


}

test_00680()


