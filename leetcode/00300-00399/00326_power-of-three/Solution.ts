/**
 * ID:    00326
 * Title: Power of Three
 * Difficulty: Easy
 * Description: Given an integer n, return true if it is a power of three. Otherwise, return false.
 *
 * An integer n is a power of three, if there exists an integer x such that n == 3 x.
 *
 * Example 1:
 *
 * Input: n = 27 Output: true
 *
 * Example 2:
 *
 * Input: n = 0 Output: false
 *
 * Example 3:
 *
 * Input: n = 9 Output: true
 *
 * Constraints:
 *
 * -2 31 <= n <= 2 31 - 1
 *
 * Follow up: Could you solve it without loops/recursion?
 */
function isPowerOfThree(n: number): boolean {
  if (n <= 0)
    return false
  let x = Math.round(Math.log2(n) / Math.log2(3))
  return Math.pow(3, x) === n
};

function test_00326() {
  console.log(isPowerOfThree(243));
  console.log(isPowerOfThree(27));
  console.log(isPowerOfThree(9));
  console.log(isPowerOfThree(26));
  console.log(isPowerOfThree(0));

}

test_00326()
