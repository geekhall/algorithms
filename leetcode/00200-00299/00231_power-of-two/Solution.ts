/**
 * ID:    00231
 * Title: Power of Two
 * Difficulty: Easy
 * Description: Given an integer n, return true if it is a power of two. Otherwise, return false.
 *
 * An integer n is a power of two, if there exists an integer x such that n == 2 x.
 *
 * Example 1:
 *
 * Input: n = 1 Output: true Explanation: 2 0 = 1
 *
 * Example 2:
 *
 * Input: n = 16 Output: true Explanation: 2 4 = 16
 *
 * Example 3:
 *
 * Input: n = 3 Output: false
 *
 * Constraints:
 *
 * -2 31 <= n <= 2 31 - 1
 *
 * Follow up: Could you solve it without loops/recursion?
 */
function isPowerOfTwo(n: number): boolean {
  if (n < 0)
    return false
  return Array.from({ length: 32 }, v => 0).reduce((pre, cur, i) => {
    pre += (n >> i) & 1
    return pre
  }, 0) === 1
};

function test_00231() {
  console.log(isPowerOfTwo(0));
  console.log(isPowerOfTwo(1));
  console.log(isPowerOfTwo(16));
  console.log(isPowerOfTwo(-16));
  console.log(isPowerOfTwo(3));
  console.log(isPowerOfTwo(-2147483648));
  console.log(isPowerOfTwo(-2147483646));

}

test_00231()

