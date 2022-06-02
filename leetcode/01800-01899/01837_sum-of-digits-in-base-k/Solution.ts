/**
 * ID:    01837
 * Title: Sum of Digits in Base K
 * Difficulty: Easy
 * Description: Given an integer n (in base 10) and a base k, return the sum of the digits of n after converting n from base 10 to base k.
 *
 * After converting, each digit should be interpreted as a base 10 number, and the sum should be returned in base 10.
 *
 * Example 1:
 *
 * Input: n = 34, k = 6 Output: 9 Explanation: 34 (base 10) expressed in base 6 is 54. 5 + 4 = 9.
 *
 * Example 2:
 *
 * Input: n = 10, k = 10 Output: 1 Explanation: n is already in base 10. 1 + 0 = 1.
 *
 * Constraints:
 *
 * 1 <= n <= 100
 * 2 <= k <= 10
 */
function sumBase(n: number, k: number): number {
  let res = 0
  while (n > 0) {
    res += n % k
    n = Math.floor(n / k)
  }
  return res
};

function test_01837() {
  console.log(sumBase(34, 6));
  console.log(sumBase(10, 10));
}

test_01837()
