/**
 * ID:    00917
 * Title: Reverse Only Letters
 * Difficulty: Easy
 * Description: Given a string s, reverse the string according to the following rules:
 *
 * All the characters that are not English letters remain in the same position.
 * All the English letters (lowercase or uppercase) should be reversed.
 *
 * Return s after reversing it.
 *
 * Example 1:
 *
 * Input: s = "ab-cd" Output:"dc-ba"
 *
 * Example 2:
 *
 * Input: s = "a-bC-dEf-ghIj" Output:"j-Ih-gfE-dCba"
 *
 * Example 3:
 *
 * Input: s = "Test1ng-Leet=code-Q!" Output:"Qedo1ct-eeLg=ntse-T!"
 *
 * Constraints:
 *
 * 1 <= s.length <= 100
 * s consists of characters with ASCII values in the range [33, 122].
 * s does not contain '\"' or '\\'.
 */
function reverseOnlyLetters(s: string): string {
  let arr = Array.from(s)
  for (let left = 0, right = s.length - 1; left < right; left++, right--) {
    // if (s[left] >= 'a' && s[left] <= 'z' || s[left] >= 'A' && s[left] <= 'Z') {
    while (left < s.length - 1 && arr[left].toUpperCase() === arr[left].toLowerCase())
      left++

    while (right >= 0 && arr[right].toUpperCase() === arr[right].toLowerCase())
      right--
    if (left < right) {
      let temp = arr[left]
      arr[left] = arr[right]
      arr[right] = temp
    }
  }
  return arr.join('')
}

function test_00917() {
  let s = "ab-cD"
  console.log(reverseOnlyLetters(s));
  s = "a-bC-dEf-ghIj"
  console.log(reverseOnlyLetters(s));
  s = "7_28]"
  console.log(reverseOnlyLetters(s));
}

test_00917()
