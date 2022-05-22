/**
 * ID:    00367
 * Title: Valid Perfect Square
 * Difficulty: Easy
 * Description: Given a positive integer num, write a function which returns True if num is a perfect square else False.
 *
 * Follow up: Do not use any built-in library function such as sqrt.
 *
 * Example 1:
 *
 * Input: num = 16 Output: true
 *
 * Example 2:
 *
 * Input: num = 14 Output: false
 *
 * Constraints:
 *
 * 1 <= num <= 2^31 - 1
 */

function isPerfectSquare(num: number): boolean {
  if (num === 1)
    return true
  let length = 0
  let temp = num
  while (temp > 0) {
    length++
    temp = Math.trunc(temp / 10)
  }
  let high = num, low = 0

  while (high > low) {
    let mid = low + Math.trunc((high - low) / 2)
    if (low + 1 === high && low * low < num && high * high > mid) {
      return false
    }
    let cur = mid * mid
    if (cur === num) {
      return true
    } else if (cur > num) {
      high = mid
    } else {
      low = mid
    }
  }
  return false
};

function test_00367() {

  console.log("16: ", isPerfectSquare(16));
  console.log("1: ", isPerfectSquare(1));
  console.log("2: ", isPerfectSquare(2));
  console.log("3: ", isPerfectSquare(3));
  console.log("4: ", isPerfectSquare(4));
  console.log("9: ", isPerfectSquare(9));
  console.log("15: ", isPerfectSquare(15));
  console.log("17: ", isPerfectSquare(17));
  console.log("256: ", isPerfectSquare(256));
  console.log("255: ", isPerfectSquare(255));
  console.log("257: ", isPerfectSquare(257));
}

test_00367()
