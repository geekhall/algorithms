/**
 * ID:    01175
 * Title: Prime Arrangements
 * Difficulty: Easy
 * Description: Return the number of permutations of 1 to n so that prime numbers are at prime indices (1-indexed.)
 *
 * (Recall that an integer is prime if and only if it is greater than 1, and cannot be written as a product of two positive integers both smaller than it.)
 *
 * Since the answer may be large, return the answer modulo 10^9 + 7.
 *
 * Example 1:
 *
 * Input: n = 5 Output: 12 Explanation: For example [1,2,5,4,3] is a valid permutation, but [5,2,3,4,1] is not because the prime number 5 is at index 1.
 *
 * Example 2:
 *
 * Input: n = 100 Output: 682289015
 *
 * Constraints:
 *
 * 1 <= n <= 100
 */
function numPrimeArrangements(n: number): number {
  let primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]
  let count = 0
  for (let i = 0; i < primes.length; i++) {
    if (primes[i] <= n) {
      count++
    }
  }
  let res = 1
  // permutation of prime number
  for (let i = 1; i <= count; i++) {
    res = (res * i) % 1000000007
  }
  // permutation of non-prime number
  for (let i = 1; i <= n - count; i++) {
    res = (res * i) % 1000000007
  }
  return res
};

function test_01175() {
  console.log(numPrimeArrangements(5));
  console.log(numPrimeArrangements(100));

}

test_01175()
