/**
 * ID:    01758
 * Title: Minimum Changes To Make Alternating Binary String
 * Difficulty: Easy
 * Description: You are given a string s consisting only of the characters '0' and '1'. In one operation, you can change any '0' to '1' or vice versa.
 *
 * The string is called alternating if no two adjacent characters are equal. For example, the string "010" is alternating, while the string "0100" is not.
 *
 * Return the minimum number of operations needed to make s alternating.
 *
 * Example 1:
 *
 * Input: s = "0100" Output: 1 Explanation: If you change the last character to '1', s will be "0101", which is alternating.
 *
 * Example 2:
 *
 * Input: s = "10" Output: 0 Explanation: s is already alternating.
 *
 * Example 3:
 *
 * Input: s = "1111" Output: 2 Explanation: You need two operations to reach "0101" or "1010".
 *
 * Constraints:
 *
 * 1 <= s.length <= 10 4
 * s[i] is either '0' or '1'.
 */
function minOperations(s: string): number {
  let odd = 0;
  // odd zero
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '1' && i % 2 === 1) {
      odd++;
    }
    if (s[i] === '0' && i % 2 === 0) {
      odd++;
    }
  }
  let even = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '1' && i % 2 === 0) {
      even++;
    }
    if (s[i] === '0' && i % 2 === 1) {
      even++;
    }
  }
  return Math.min(odd, even)
}

function test_01758() {
  let s = "0100"
  console.log(minOperations(s));
  s = "10"
  console.log(minOperations(s));
  s = "1111"
  console.log(minOperations(s));
}

test_01758()
