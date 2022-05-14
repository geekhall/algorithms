/**
 * ID:    00007
 * Title: Reverse Integer
 * Difficulty: Medium
 * Description: Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-2 31, 2 31 - 1], then return 0.
 *
 * Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
 *
 * Example 1:
 *
 * Input: x = 123 Output: 321
 *
 * Example 2:
 *
 * Input: x = -123 Output: -321
 *
 * Example 3:
 *
 * Input: x = 120 Output: 21
 *
 * Constraints:
 *
 * -2 31 <= x <= 2 31 - 1
 */
function reverse(x: number): number {
  let res = 0
  let minusFlag = x < 0
  let st = []
  x = Math.abs(x)
  while (x > 0) {
    st.push(x % 10)
    x = Math.trunc(x / 10)
  }
  let i = 0
  while (st.length > 0) {
    res += Math.pow(10, i) * st.pop()!
    i++
  }
  if (minusFlag)
    res = -res
  if (res > Math.pow(2, 31) - 1 || res < Math.pow(-2, 31))
    return 0
  return res
};

function test_00007() {
  let x = 123
  console.log(reverse(x));
  x = -123
  console.log(reverse(x));
  x = 120
  console.log(reverse(x));

  x = 1534236469
  console.log(reverse(x));  // expect 0
  console.log(Math.pow(2, 31));

}

test_00007()
