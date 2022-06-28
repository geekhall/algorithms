/**
 * ID:    01922
 * Title: Count Good Numbers
 * Difficulty: Medium
 * Description: A digit string is good if the digits (0-indexed) at even indices are even and the digits at odd indices are prime (2, 3, 5, or 7).
 *
 * For example, "2582" is good because the digits (2 and 8) at even positions are even and the digits (5 and 2) at odd positions are prime. However, "3245" is not good because 3 is at an even index but is not even.
 *
 * Given an integer n, return the total number of good digit strings of length n. Since the answer may be large, return it modulo 10 9 + 7.
 *
 * A digit string is a string consisting of digits 0 through 9 that may contain leading zeros.
 *
 * Example 1:
 *
 * Input: n = 1 Output: 5 Explanation: The good numbers of length 1 are "0", "2", "4", "6", "8".
 *
 * Example 2:
 *
 * Input: n = 4 Output: 400
 *
 * Example 3:
 *
 * Input: n = 50 Output: 564908303
 *
 * Constraints:
 *
 * 1 <= n <= 10 15
 */
// time limit exceeded when n is bigger than 10^6
function countGoodNumbers1(n: number): number {
  let pre = 1
  let cur = 1
  for (let i = 1; i <= n; i++) {
    pre = cur
    if (i & 1) {
      cur = pre * 5
    } else {
      cur = pre * 4
    }
    cur = cur % 1000000007
  }
  return cur
}

//  ( 5 ^ even indices) * (4 ^ odd indices)
function countGoodNumbers(n: number): number {

  const mod = 1000000007n;
  let even = Math.ceil(n / 2);
  let odd = n - even;
  const modPow = (x: number, y: number): bigint => {
    if (y === 0) {
      return 1n;
    }
    let res = 1n;
    res *= modPow(x, Math.floor(y / 2)); // cut in half in each recursion
    res *= res;
    if (y & 1) { // if y is odd
      res *= BigInt(x);
    }
    res %= mod;
    return res;
  }
  let ans = modPow(5, even) * modPow(4, odd);
  ans %= mod;
  return Number(ans);
};

function test_01922() {
  let n = 1
  console.log(countGoodNumbers(n));
  n = 4
  console.log(countGoodNumbers(n));
  n = 50
  console.log(countGoodNumbers(n));
  n = 806166225460393
  console.log(countGoodNumbers(n));
}

test_01922()
