/**
 * ID:    00507
 * Title: Perfect Number
 * Difficulty: Easy
 * Description: A perfect number is a positive integer that is equal to the sum of its positive divisors, excluding the number itself. A divisor of an integer x is an integer that can divide x evenly.
 *
 * Given an integer n, return true if n is a perfect number, otherwise return false.
 *
 * Example 1:
 *
 * Input: num = 28 Output: true Explanation: 28 = 1 + 2 + 4 + 7 + 14 1, 2, 4, 7, and 14 are all divisors of 28.
 *
 * Example 2:
 *
 * Input: num = 7 Output: false
 *
 * Constraints:
 *
 * 1 <= num <= 10 8
 */
function checkPerfectNumber(num: number): boolean {
  if (num === 1)
    return false
  let max = Math.trunc(Math.sqrt(num))
  let s = new Set<number>()
  s.add(1)
  for (let i = 2; i <= max; i++) {
    if (Math.trunc(num / i) === num / i) {
      s.add(i)
      s.add(num / i)
    }
  }
  return num === [...s].reduce((pre, cur) => pre + cur)
};

function test_00507() {
  let num = 28
  console.log(checkPerfectNumber(num));
  num = 7
  console.log(checkPerfectNumber(num));
  num = 6
  console.log(checkPerfectNumber(num)); // expect true
}

test_00507()
