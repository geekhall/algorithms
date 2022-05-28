/**
 * ID:    00717
 * Title: 1-bit and 2-bit Characters
 * Difficulty: Easy
 * Description: We have two special characters:
 *
 * The first character can be represented by one bit 0.
 * The second character can be represented by two bits (10 or 11).
 *
 * Given a binary array bits that ends with 0, return true if the last character must be a one-bit character.
 *
 * Example 1:
 *
 * Input: bits = [1,0,0] Output: true Explanation: The only way to decode it is two-bit character and one-bit character. So the last character is one-bit character.
 *
 * Example 2:
 *
 * Input: bits = [1,1,1,0] Output: false Explanation: The only way to decode it is two-bit character and two-bit character. So the last character is not one-bit character.
 *
 * Constraints:
 *
 * 1 <= bits.length <= 1000
 * bits[i] is either 0 or 1.
 */
/**
 *
 * @param bits
 * @returns
 */
function isOneBitCharacter(bits: number[]): boolean {

  if (bits[bits.length - 1] === 1)
    return false
  if (bits.length === 1)
    return true
  let i = bits.length - 2
  for (; i >= 0; i--) {
    if (bits[i] === 0) {
      break
    }
  }
  return (bits.length - 1 - i) % 2 !== 0
};

function test_00717() {
  let bits = [1, 0, 0]
  console.log(isOneBitCharacter(bits));
  bits = [1, 1, 1, 0]
  console.log(isOneBitCharacter(bits));
  bits = [1, 1, 1, 0]
  console.log(isOneBitCharacter(bits));
}

test_00717()
