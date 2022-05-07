/**
 * ID:    00069
 * Title: Sqrt(x)
 * Difficulty: Easy
 * Description: Given a non-negative integer x, compute and return the square root of x.
 *
 * Since the return type is an integer, the decimal digits are truncated, and only the integer part of the result is returned.
 *
 * Note: You are not allowed to use any built-in exponent function or operator, such as pow(x, 0.5) or x ** 0.5.
 *
 * Example 1:
 *
 * Input: x = 4 Output: 2
 *
 * Example 2:
 *
 * Input: x = 8 Output: 2 Explanation: The square root of 8 is 2.82842..., and since the decimal part is truncated, 2 is returned.
 *
 * Constraints:
 *
 * 0 <= x <= 2 31 - 1
 */
// Binary search
function mySqrt1(x: number): number {
  let left = 1;
  let right = x;
  let guess = Math.trunc((left + right) / 2);
  while (left < right - 1) {
    if (guess * guess === x) {
      return guess;
    } else if (guess * guess < x) {
      left = guess;
    } else if (guess * guess > x) {
      right = guess;
    }
    guess = Math.trunc((left + right) / 2);
  }
  return guess;
}
// time limit exceeded
function mySqrt(x: number): number {
  for (let i = x; i >= 0; i--) {
    if (i * i === x || (((i + 1) * (i + 1)) > x && i * i < x))
      return i
  }
  return 0
}
function test_00069() {
  let x = 4
  console.log(mySqrt(x));
  x = 8
  console.log(mySqrt(x));
  x = 2147395600
  console.log(mySqrt(x));
  console.log(46340 * 46340);
  console.log(46341 * 46341);
  x = 2147395599
  console.log(mySqrt(x));
  x = 2147395601
  console.log(mySqrt(x));

}

test_00069()
