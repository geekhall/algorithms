/**
 * ID:    01071
 * Title: Greatest Common Divisor of Strings
 * Difficulty: Easy
 * Description: For two strings s and t, we say " t divides s" if and only if s = t + ... + t (i.e., t is concatenated with itself one or more times).
 *
 * Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.
 *
 * Example 1:
 *
 * Input: str1 = "ABCABC", str2 = "ABC" Output:"ABC"
 *
 * Example 2:
 *
 * Input: str1 = "ABABAB", str2 = "ABAB" Output:"AB"
 *
 * Example 3:
 *
 * Input: str1 = "LEET", str2 = "CODE" Output:""
 *
 * Constraints:
 *
 * 1 <= str1.length, str2.length <= 1000
 * str1 and str2 consist of English uppercase letters.
 */
function gcdOfStrings(str1: string, str2: string): string {
  if (str1 + str2 !== str2 + str1) {
    return ''
  }
  let len1 = str1.length, len2 = str2.length
  if (len1 < len2) {
    return gcdOfStrings(str2, str1)
  }
  if (len1 % len2 === 0) {
    let i = 0
    while (i < len1) {
      if (str1[i] !== str2[i]) {
        return str2.substring(0, i)
      }
      i++
    }
  } else {
    return gcdOfStrings(str2, str1.substring(len2))
  }
  return str2
};

function test_01071() {
  let str1 = "ABABAB", str2 = "ABAB"
  console.log(gcdOfStrings(str1, str2))
  str1 = "ABCABC", str2 = "ABC"
  console.log(gcdOfStrings(str1, str2))

}

test_01071()
