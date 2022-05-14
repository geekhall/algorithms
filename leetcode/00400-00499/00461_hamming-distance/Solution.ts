/**
 * ID:    00461
 * Title: Hamming Distance
 * Difficulty: Easy
 * Description: The Hamming distance between two integers is the number of positions at which the corresponding bits are different.
 *
 * Given two integers x and y, return the Hamming distance between them.
 *
 * Example 1:
 *
 * Input: x = 1, y = 4 Output: 2 Explanation: 1 (0 0 0 1) 4 (0 1 0 0) ↑ ↑ The above arrows point to positions where the corresponding bits are different.
 *
 * Example 2:
 *
 * Input: x = 3, y = 1 Output: 1
 *
 * Constraints:
 *
 * 0 <= x, y <= 2 31 - 1
 */
function hammingDistance(x: number, y: number): number {
  let n = x ^ y
  let res = 0
  for (let i = 0; i < 32; i++) {
    res += n >> i & 1
  }
  return res
};

function test_00461() {
  let x = 1, y = 4
  console.log(hammingDistance(x, y));
  x = 3, y = 1
  console.log(hammingDistance(x, y));
}

test_00461()
