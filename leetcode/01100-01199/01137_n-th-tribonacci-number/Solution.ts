/**
 * ID:    01137
 * Title: N-th Tribonacci Number
 * Difficulty: Easy
 * Description: The Tribonacci sequence T n is defined as follows:
 *
 * T 0 = 0, T 1 = 1, T 2 = 1, and T n+3 = T n + T n+1 + T n+2 for n >= 0.
 *
 * Given n, return the value of T n.
 *
 * Example 1:
 *
 * Input: n = 4 Output: 4 Explanation: T_3 = 0 + 1 + 1 = 2 T_4 = 1 + 1 + 2 = 4
 *
 * Example 2:
 *
 * Input: n = 25 Output: 1389537
 *
 * Constraints:
 *
 * 0 <= n <= 37
 * The answer is guaranteed to fit within a 32-bit integer, ie. answer <= 2^31 - 1.
 */
function tribonacci(n: number): number {
  if (n === 0)
    return 0
  if (n === 1) {
    return 1
  }
  if (n === 2) {
    return 1
  }
  let res = 0
  let a = 0
  let b = 1
  let c = 1
  for (let i = 2; i < n; i++) {
    res = a + b + c
    a = b
    b = c
    c = res
  }

  return res
};

function test_01137() {
  console.log(tribonacci(4))
  console.log(tribonacci(25))

}

test_01137()
