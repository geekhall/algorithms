/**
 * ID:    00264
 * Title: Ugly Number II
 * Difficulty: Medium
 * Description: An ugly number is a positive integer whose prime factors are limited to 2, 3, and 5.
 *
 * Given an integer n, return the n th ugly number.
 *
 * Example 1:
 *
 * Input: n = 10 Output: 12 Explanation: [1, 2, 3, 4, 5, 6, 8, 9, 10, 12] is the sequence of the first 10 ugly numbers.
 *
 * Example 2:
 *
 * Input: n = 1 Output: 1 Explanation: 1 has no prime factors, therefore all of its prime factors are limited to 2, 3, and 5.
 *
 * Constraints:
 *
 * 1 <= n <= 1690
 */
function nthUglyNumber(n: number): number {
  let ugly = [1];
  let i2 = 0, i3 = 0, i5 = 0;
  for (let i = 1; i < n; i++) {
    let n2 = ugly[i2] * 2, n3 = ugly[i3] * 3, n5 = ugly[i5] * 5;
    let n = Math.min(n2, n3, n5);
    ugly.push(n);
    if (n === n2) i2++;
    if (n === n3) i3++;
    if (n === n5) i5++;
  }
  return ugly[n - 1];
};

function test_00264() {
  let n = 10
  console.log(nthUglyNumber(n));
  n = 1
  console.log(nthUglyNumber(n));
}

test_00264()
