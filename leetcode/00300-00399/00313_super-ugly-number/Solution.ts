/**
 * ID:    00313
 * Title: Super Ugly Number
 * Difficulty: Medium
 * Description: A super ugly number is a positive integer whose prime factors are in the array primes.
 *
 * Given an integer n and an array of integers primes, return the n th super ugly number.
 *
 * The n th super ugly number is guaranteed to fit in a 32-bit signed integer.
 *
 * Example 1:
 *
 * Input: n = 12, primes = [2,7,13,19] Output: 32 Explanation: [1,2,4,7,8,13,14,16,19,26,28,32] is the sequence of the first 12 super ugly numbers given primes = [2,7,13,19].
 *
 * Example 2:
 *
 * Input: n = 1, primes = [2,3,5] Output: 1 Explanation: 1 has no prime factors, therefore all of its prime factors are in the array primes = [2,3,5].
 *
 * Constraints:
 *
 * 1 <= n <= 10 5
 * 1 <= primes.length <= 100
 * 2 <= primes[i] <= 1000
 * primes[i] is guaranteed to be a prime number.
 * All the values of primes are unique and sorted in ascending order.
 */
/**
 * idx :
 * i = 0; => idx: [0, 0, 0, 0] => primes.map...: [2, 7, 13, 19] => dp[1] = min: 2
 * i = 1; => idx: [1, 0, 0, 0] => primes.map...: [4, 7, 13, 19] => dp[2] = min: 4
 * i = 2; => idx: [2, 0, 0, 0] => primes.map...: [8, 7, 13, 19] => dp[3] = min: 7
 * i = 3; => idx: [2, 1, 0, 0] => primes.map...: [8, 14, 13, 19] => dp[4] = min: 8
 * i = 4; => idx: [3, 1, 0, 0] => primes.map...: [14, 14, 13, 19] => dp[5] = min: 14
 * ...
 *
 * @param n
 * @param primes
 * @returns
 */
function nthSuperUglyNumber(n: number, primes: number[]): number {
  let dp = new Array(n).fill(0)
  dp[0] = 1
  let idx = new Array(primes.length).fill(0)
  for (let i = 1; i < n; i++) {
    dp[i] = Math.min(...primes.map((p, j) => dp[idx[j]] * p))
    // update idx array
    for (let j = 0; j < primes.length; j++) {
      if (dp[idx[j]] * primes[j] === dp[i]) {
        idx[j]++
      }
    }
  }
  return dp[n - 1]
};

function test_00313() {
  let n = 12
  let primes = [2, 7, 13, 19]
  console.log(nthSuperUglyNumber(n, primes)) // [1, 2, 4, 7, 8, 13, 14, 16, 19, 26, 28, 32]
  n = 1
  primes = [2, 3, 5]
  console.log(nthSuperUglyNumber(n, primes))
}

test_00313()
