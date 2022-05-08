/**
 * ID:    00258
 * Title: Add Digits
 * Difficulty: Easy
 * Description: Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.
 *
 * Example 1:
 *
 * Input: num = 38 Output: 2 Explanation: The process is 38 --> 3 + 8 --> 11 11 --> 1 + 1 --> 2 Since 2 has only one digit, return it.
 *
 * Example 2:
 *
 * Input: num = 0 Output: 0
 *
 * Constraints:
 *
 * 0 <= num <= 2 31 - 1
 *
 * Follow up: Could you do it without any loop/recursion in O(1) runtime?
 */
function addDigits(num: number): number {
  let temp = 0
  while (num > 0) {
    temp += num % 10
    num = Math.floor(num / 10)
    if (num === 0) {
      if (temp < 10)
        return temp
      num = temp
      temp = 0
    }
  }
  return 0
};

function test_00258() {
  let num = 38
  console.log(addDigits(num));
  console.log(addDigits(0));
}

test_00258()
