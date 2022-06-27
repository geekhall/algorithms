/**
 * ID:    00029
 * Title: Divide Two Integers
 * Difficulty: Medium
 * Description: Given two integers dividend and divisor, divide two integers without using multiplication, division, and mod operator.
 *
 * The integer division should truncate toward zero, which means losing its fractional part. For example, 8.345 would be truncated to 8, and -2.7335 would be truncated to -2.
 *
 * Return the quotient after dividing dividend by divisor.
 *
 * Note: Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: [−2 31, 2 31 − 1]. For this problem, if the quotient is strictly greater than 2 31 - 1, then return 2 31 - 1, and if the quotient is strictly less than -2 31, then return -2 31.
 *
 * Example 1:
 *
 * Input: dividend = 10, divisor = 3 Output: 3 Explanation: 10/3 = 3.33333.. which is truncated to 3.
 *
 * Example 2:
 *
 * Input: dividend = 7, divisor = -3 Output: -2 Explanation: 7/-3 = -2.33333.. which is truncated to -2.
 *
 * Constraints:
 *
 * -2 31 <= dividend, divisor <= 2 31 - 1
 * divisor != 0
 */

function divide(dividend: number, divisor: number): number {
  const positive = (dividend <= 0 && divisor <= 0) || (dividend >= 0 && divisor >= 0);
  divisor = Math.abs(divisor);
  dividend = Math.abs(dividend);

  if (dividend < divisor) {
    return 0;
  }
  if (dividend === divisor) {
    return positive ? 1 : -1;
  }
  const _divisor = divisor;
  let quotient = 1;

  for (let next = divisor << 1; next > 0 && next <= dividend; next = divisor << 1) {
    divisor <<= 1;
    quotient <<= 1;
  }
  quotient = quotient + divide(dividend - divisor, _divisor);
  quotient = positive ? quotient : 0 - quotient;

  // Finally, leet code magic because requirements...
  quotient = Math.min(2147483647, quotient);
  quotient = Math.max(-2147483648, quotient);

  return quotient;
}
// wrong answer
function divide1(dividend: number, divisor: number): number {
  if (dividend === 1 << 31 && divisor === -1) {
    return -(1 << 31) - 1
  }
  if (divisor === 1) {
    return dividend
  }
  let sign = 1
  if (dividend < 0 && divisor > 0 || dividend > 0 && divisor < 0) {
    sign = -1
  }

  dividend = Math.abs(dividend)
  divisor = Math.abs(divisor)
  let res = 0
  while (dividend >= divisor) {
    let temp = divisor
    let count = 1
    while (dividend >= (temp << 1)) {
      temp <<= 1
      count <<= 1
    }
    dividend -= temp
    res += count
  }
  let quotient = sign * res
  quotient = Math.min(2147483647, quotient);
  quotient = Math.max(-2147483648, quotient);
  return quotient
};

function test_00029() {
  let dividend = 10, divisor = 3
  console.log(divide(dividend, divisor));
  dividend = 7, divisor = -3
  console.log(divide(dividend, divisor));
  dividend = -2147483648, divisor = -1  // -2147483648 / -1 = 2147483647 ? why?
  console.log(divide(dividend, divisor)); // time limit exceeded
  dividend = 2147483647, divisor = 1
  console.log(divide(dividend, divisor));
  dividend = 2147483647, divisor = 2
  console.log(divide(dividend, divisor));
}

test_00029()
