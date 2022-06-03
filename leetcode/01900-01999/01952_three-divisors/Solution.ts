/**
 * ID:    01952
 * Title: Three Divisors
 * Difficulty: Easy
 * Description: Given an integer n, return true if n has exactly three positive divisors. Otherwise, return false.
 *
 * An integer m is a divisor of n if there exists an integer k such that n = k * m.
 *
 * Example 1:
 *
 * Input: n = 2 Output: false Explantion: 2 has only two divisors: 1 and 2.
 *
 * Example 2:
 *
 * Input: n = 4 Output: true Explantion: 4 has three divisors: 1, 2, and 4.
 *
 * Constraints:
 *
 * 1 <= n <= 10 4
 */
// not efficient
function isThree1(n: number): boolean {
  let count = 0
  for (let i = 1; i <= Math.floor(n / 2); i++) {
    if (n % i === 0) {
      count++
    }
  }
  return count === 2
};
function isThree(n: number): boolean {
  let s = new Set([4, 9, 25, 49, 121, 169, 289, 361, 529, 841, 961, 1369, 1681, 1849, 2209, 2809, 3481, 3721, 4489, 5041, 5329, 6241, 6889, 7921, 9409])
  return s.has(n)
}

function test_01952() {
  let resIs = 0
  let s = new Set()
  for (let i = 1; i <= 10000; i++) {
    if (isThree1(i)) {
      resIs++
      s.add(i)
    }
  }
  console.log(s);
}

test_01952()


