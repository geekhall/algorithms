/**
 * ID:    01201
 * Title: Ugly Number III
 * Difficulty: Medium
 * Description: An ugly number is a positive integer that is divisible by a, b, or c.
 *
 * Given four integers n, a, b, and c, return the n th ugly number.
 *
 * Example 1:
 *
 * Input: n = 3, a = 2, b = 3, c = 5 Output: 4 Explanation: The ugly numbers are 2, 3, 4, 5, 6, 8, 9, 10... The 3 rd is 4.
 *
 * Example 2:
 *
 * Input: n = 4, a = 2, b = 3, c = 4 Output: 6 Explanation: The ugly numbers are 2, 3, 4, 6, 8, 9, 10, 12... The 4 th is 6.
 *
 * Example 3:
 *
 * Input: n = 5, a = 2, b = 11, c = 13 Output: 10 Explanation: The ugly numbers are 2, 4, 6, 8, 10, 11, 12, 13... The 5 th is 10.
 *
 * Constraints:
 *
 * 1 <= n, a, b, c <= 10 9
 * 1 <= a * b * c <= 10 18
 * It is guaranteed that the result will be in range [1, 2 * 10 9 ].
 */
// NG
function nthUglyNumber1(n: number, a: number, b: number, c: number): number {
  let lo = 1, hi = 2 * Math.pow(10, 9);
  const gcd = (a: number, b: number): number => {
    if (b === 0) return a;
    return gcd(b, a % b);
  }
  let ab = Math.floor(a * b / gcd(a, b));
  let bc = Math.floor(b * c / gcd(b, c))
  let ac = Math.floor(a * c / gcd(a, c))
  let abc = Math.floor(a * bc / gcd(a, bc))
  while (lo < hi) {
    let mid = Math.floor(lo + (hi - lo) / 2)
    let cnt = mid / a + mid / b + mid / c - mid / ab - mid / bc - mid / ac + mid / abc;
    if (cnt < n)
      lo = mid + 1;
    else
      //the condition: F(N) >= k
      hi = mid;
  }
  return lo;
};
// NG
function nthUglyNumber(n: number, a: number, b: number, c: number): number {

  let MAX_ANS = Math.pow(10, 9) * 2;
  const gcd = (a: number, b: number): number => {
    if (a == 0) return b;
    return gcd(b % a, a);
  }
  const lcm = (a: number, b: number): number => {
    return a * b / gcd(a, b);
  }
  const count = (num: number, a: number, b: number, c: number) => {
    return Math.floor(num / a + num / b + num / c
      - num / lcm(a, b)
      - num / lcm(b, c)
      - num / lcm(a, c)
      + num / (lcm(a, lcm(b, c))));
  }
  let left = 0, right = MAX_ANS, result = 0;
  while (left <= right) {
    let mid = left + (right - left) / 2;
    if (count(mid, a, b, c) >= n) {
      result = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return result;
}
function test_01201() {
  let n = 3, a = 2, b = 3, c = 5
  console.log(nthUglyNumber(n, a, b, c));
  n = 4, a = 2, b = 3, c = 4
  console.log(nthUglyNumber(n, a, b, c));
  n = 5, a = 2, b = 11, c = 13
  console.log(nthUglyNumber(n, a, b, c));
  n = 1000000000, a = 2, b = 217983653, c = 336916467
  console.log(nthUglyNumber(n, a, b, c));  // 1999999984
}

test_01201()
