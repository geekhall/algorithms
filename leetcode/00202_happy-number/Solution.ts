/**
 * ID:    00202
 * Title: Happy Number
 * Difficulty: Easy
 * Description: Write an algorithm to determine if a number n is happy.
 *
 * A happy number is a number defined by the following process:
 *
 * Starting with any positive integer, replace the number by the sum of the squares of its digits.
 * Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
 * Those numbers for which this process ends in 1 are happy.
 *
 * Return true if n is a happy number, and false if not.
 *
 * Example 1:
 *
 * Input: n = 19 Output: true Explanation: 1 2 + 9 2 = 82 8 2 + 2 2 = 68 6 2 + 8 2 = 100 1 2 + 0 2 + 0 2 = 1
 *
 * Example 2:
 *
 * Input: n = 2 Output: false
 *
 * Constraints:
 *
 * 1 <= n <= 2 31 - 1
 */
function isHappy(n: number): boolean {
  let temp = 0
  let s = new Set()
  while (n > 0) {
    temp += Math.pow(n % 10, 2)
    n = Math.floor(n / 10)
    if (n === 0) {
      if (temp === 1)
        return true
      else if (s.has(temp)) {
        return false
      }
      s.add(temp)
      n = temp
      temp = 0
    }
  }
  return false
};

function test_00202() {
  let num = 19
  console.log(isHappy(num));
  num = 2
  console.log(isHappy(num));

}

test_00202()
