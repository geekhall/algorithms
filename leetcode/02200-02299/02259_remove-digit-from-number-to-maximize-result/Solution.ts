/**
 * ID:    02259
 * Title: Remove Digit From Number to Maximize Result
 * Difficulty: Easy
 * Description: You are given a string number representing a positive integer and a character digit.
 *
 * Return the resulting string after removing exactly one occurrence of digit from number such that the value of the resulting string in decimal form is maximized. The test cases are generated such that digit occurs at least once in number.
 *
 * Example 1:
 *
 * Input: number = "123", digit = "3" Output:"12" Explanation: There is only one '3' in "123". After removing '3', the result is "12".
 *
 * Example 2:
 *
 * Input: number = "1231", digit = "1" Output:"231" Explanation: We can remove the first '1' to get "231" or remove the second '1' to get "123". Since 231 > 123, we return "231".
 *
 * Example 3:
 *
 * Input: number = "551", digit = "5" Output:"51" Explanation: We can remove either the first or second '5' from "551". Both result in the string "51".
 *
 * Constraints:
 *
 * 2 <= number.length <= 100
 * number consists of digits from '1' to '9'.
 * digit is a digit from '1' to '9'.
 * digit occurs at least once in number.
 */
function removeDigit(number: string, digit: string): string {
  let n = number.length
  let lastPos = -1
  for (let i = 0; i < n - 1; i++) {
    if (number[i] === digit) {
      if (number[i + 1] > digit) {
        return number.slice(0, i).concat(number.slice(i + 1))
      }
      lastPos = i
    }
  }
  if (number[n - 1] === digit) {
    return number.slice(0, n - 1)
  } else {
    return number.slice(0, lastPos).concat(number.slice(lastPos + 1))
  }
};

function test_02259() {
  let number = "122121", digit = "2"
  console.log(removeDigit(number, digit));
  number = "1231", digit = "1"
  console.log(removeDigit(number, digit));
  number = "551", digit = "5"
  console.log(removeDigit(number, digit));
}

test_02259()
