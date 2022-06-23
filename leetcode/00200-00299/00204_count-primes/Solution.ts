/**
 * ID:    00204
 * Title: Count Primes
 * Difficulty: Medium
 * Description: Given an integer n, return the number of prime numbers that are strictly less than n.
 *
 * Example 1:
 *
 * Input: n = 10 Output: 4 Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.
 *
 * Example 2:
 *
 * Input: n = 0 Output: 0
 *
 * Example 3:
 *
 * Input: n = 1 Output: 0
 *
 * Constraints:
 *
 * 0 <= n <= 5 * 10 6
 */
function countPrimes(n: number): number {
  let res = 0
  // visited[i] = false if i is prime
  let visited = new Array(n).fill(false)
  for (let i = 2; i < n; i++) {
    if (visited[i]) continue
    res++
    for (let j = i + i; j < n; j += i) {
      visited[j] = true
    }
  }
  return res
};

function test_00204() {
  let n = 10
  console.log(countPrimes(n)) // 4
  n = 0
  console.log(countPrimes(n)) // 0
  n = 1
  console.log(countPrimes(n)) // 0
}

test_00204()
