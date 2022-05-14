/**
 * ID:    00008
 * Title: String to Integer (atoi)
 * Difficulty: Medium
 * Description: Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer (similar to C/C++'s atoi function).
 *
 * The algorithm for myAtoi(string s) is as follows:
 *
 * Read in and ignore any leading whitespace.
 * Check if the next character (if not already at the end of the string) is '-' or '+'. Read this character in if it is either. This determines if the final result is negative or positive respectively. Assume the result is positive if neither is present.
 * Read in next the characters until the next non-digit character or the end of the input is reached. The rest of the string is ignored.
 * Convert these digits into an integer (i.e. "123" -> 123, "0032" -> 32). If no digits were read, then the integer is 0. Change the sign as necessary (from step 2).
 * If the integer is out of the 32-bit signed integer range [-2 31, 2 31 - 1], then clamp the integer so that it remains in the range. Specifically, integers less than -2 31 should be clamped to -2 31, and integers greater than 2 31 - 1 should be clamped to 2 31 - 1.
 * Return the integer as the final result.
 *
 * Note:
 *
 * Only the space character ' ' is considered a whitespace character.
 * Do not ignore any characters other than the leading whitespace or the rest of the string after the digits.
 *
 * Example 1:
 *
 * Input: s = "42" Output: 42 Explanation: The underlined characters are what is read in, the caret is the current reader position. Step 1: "42" (no characters read because there is no leading whitespace) ^ Step 2: "42" (no characters read because there is neither a '-' nor '+') ^ Step 3: " 42" ("42" is read in) ^ The parsed integer is 42. Since 42 is in the range [-2 31, 2 31 - 1], the final result is 42.
 *
 * Example 2:
 *
 * Input: s = " -42" Output: -42 Explanation: Step 1: " -42" (leading whitespace is read and ignored) ^ Step 2: " - 42" ('-' is read, so the result should be negative) ^ Step 3: " - 42" ("42" is read in) ^ The parsed integer is -42. Since -42 is in the range [-2 31, 2 31 - 1], the final result is -42.
 *
 * Example 3:
 *
 * Input: s = "4193 with words" Output: 4193 Explanation: Step 1: "4193 with words" (no characters read because there is no leading whitespace) ^ Step 2: "4193 with words" (no characters read because there is neither a '-' nor '+') ^ Step 3: " 4193 with words" ("4193" is read in; reading stops because the next character is a non-digit) ^ The parsed integer is 4193. Since 4193 is in the range [-2 31, 2 31 - 1], the final result is 4193.
 *
 * Constraints:
 *
 * 0 <= s.length <= 200
 * s consists of English letters (lower-case and upper-case), digits (0-9), ' ', '+', '-', and '.'.
 */
function myAtoi(s: string): number {
  let res = 0
  let st = []
  let minusFlag = false
  let plusFlag = false
  let checkLeadingBlank = true
  let numFlag = false

  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ' && checkLeadingBlank) {
      continue
    } else if (s[i] === '+' && !numFlag) {
      if (minusFlag || plusFlag)
        break
      plusFlag = true
      checkLeadingBlank = false
    } else if (s[i] === '-' && !numFlag) {
      if (minusFlag || plusFlag)
        break
      minusFlag = true
      checkLeadingBlank = false
    } else if (s[i].charCodeAt(0) >= '0'.charCodeAt(0) && s[i].charCodeAt(0) <= '9'.charCodeAt(0)) {
      checkLeadingBlank = false
      numFlag = true
      st.push(s[i])
    } else {
      break
    }
  }

  let i = 0
  while (st.length > 0) {
    res += parseInt(st.pop()!) * Math.pow(10, i)
    i++
  }
  if (minusFlag === true) {
    res = -res
  }

  if (res > Math.pow(2, 31) - 1)
    res = Math.pow(2, 31) - 1
  else if (res < Math.pow(-2, 31))
    res = Math.pow(-2, 31)
  return res
};

function test_00008() {
  let s = "42"
  console.log(myAtoi(s));
  s = "4193"
  console.log(myAtoi(s));
  s = "  +4193"
  console.log(myAtoi(s));
  s = "  -4193"
  console.log(myAtoi(s));
  s = "  -419a3"
  console.log(myAtoi(s));
  s = "  + 41g93"
  console.log(myAtoi(s));
  s = "  +-12"
  console.log(myAtoi(s));
  s = "  1+2"
  console.log(myAtoi(s));
}

test_00008()
