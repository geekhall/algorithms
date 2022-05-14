/**
 * ID:    00342
 * Title: Power of Four
 * Difficulty: Easy
 * Description: Given an integer n, return true if it is a power of four. Otherwise, return false.
 *
 * An integer n is a power of four, if there exists an integer x such that n == 4 x.
 *
 * Example 1:
 *
 * Input: n = 16 Output: true
 *
 * Example 2:
 *
 * Input: n = 5 Output: false
 *
 * Example 3:
 *
 * Input: n = 1 Output: true
 *
 * Constraints:
 *
 * -2 31 <= n <= 2 31 - 1
 *
 * Follow up: Could you solve it without loops/recursion?
 */
// n = 4 ^ x
// x = log4(n) = log2(n)/log2(4)
function isPowerOfFour(n: number): boolean {
  if (n <= 0)
    return false
  let x = Math.round(Math.log2(n) / 2)
  return Math.pow(4, x) === n
};

function test_00342() {
  console.log(isPowerOfFour(16));
  console.log(isPowerOfFour(5));

}

test_00342()
