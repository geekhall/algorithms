/**
 * ID:    00868
 * Title: Binary Gap
 * Difficulty: Easy
 * Description: Given a positive integer n, find and return the longest distance between any two adjacent 1 's in the binary representation of n. If there are no two adjacent 1 's, return 0.
 *
 * Two 1 's are adjacent if there are only 0 's separating them (possibly no 0 's). The distance between two 1 's is the absolute difference between their bit positions. For example, the two 1 's in "1001" have a distance of 3.
 *
 * Example 1:
 *
 * Input: n = 22 Output: 2 Explanation: 22 in binary is "10110". The first adjacent pair of 1's is " 1 0 1 10" with a distance of 2. The second adjacent pair of 1's is "10 11 0" with a distance of 1. The answer is the largest of these two distances, which is 2. Note that " 1 01 1 0" is not a valid pair since there is a 1 separating the two 1's underlined.
 *
 * Example 2:
 *
 * Input: n = 8 Output: 0 Explanation: 8 in binary is "1000". There are not any adjacent pairs of 1's in the binary representation of 8, so we return 0.
 *
 * Example 3:
 *
 * Input: n = 5 Output: 2 Explanation: 5 in binary is "101".
 *
 * Constraints:
 *
 * 1 <= n <= 10 9
 */
function binaryGap(n: number): number {
  let res = 0
  let arr = n.toString(2).split('')
  let cur = 0
  let next = 0
  while (cur < arr.length) {
    if (arr[cur] === '1') {
      next = cur + 1
      while (next < arr.length && arr[next] === '0') {
        next++
      }
      if (next === arr.length) {
        return res
      } else {
        res = Math.max(res, next - cur)
        cur = next
      }
    }
  }
  return res
};

function test_00868() {
  let n = 22
  console.log(binaryGap(n));
  n = 8
  console.log(binaryGap(n));
  n = 5
  console.log(binaryGap(n));
  n = 6
  console.log(binaryGap(n));
}

test_00868()
