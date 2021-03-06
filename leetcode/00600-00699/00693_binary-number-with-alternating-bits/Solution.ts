/**
 * ID:    00693
 * Title: Binary Number with Alternating Bits
 * Difficulty: Easy
 * Description: Given a positive integer, check whether it has alternating bits: namely, if two adjacent bits will always have different values.
 *
 * Example 1:
 *
 * Input: n = 5 Output: true Explanation: The binary representation of 5 is: 101
 *
 * Example 2:
 *
 * Input: n = 7 Output: false Explanation: The binary representation of 7 is: 111.
 *
 * Example 3:
 *
 * Input: n = 11 Output: false Explanation: The binary representation of 11 is: 1011.
 *
 * Constraints:
 *
 * 1 <= n <= 2 31 - 1
 */
function hasAlternatingBits(n: number): boolean {
  let i = 0
  while (n > 0) {
    if ((n >> i & 1) === ((n >> i + 1) & 1)) {
      return false
    }
    n = n >> 1
  }
  return true
};

function test_00693() {
  console.log(hasAlternatingBits(5));
  console.log(hasAlternatingBits(6));
  console.log(hasAlternatingBits(7));
  console.log(hasAlternatingBits(11));
}

test_00693()
