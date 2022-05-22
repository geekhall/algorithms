/**
 * ID:    00405
 * Title: Convert a Number to Hexadecimal
 * Difficulty: Easy
 * Description: Given an integer num', 'return a string representing its hexadecimal representation. For negative integers', 'two’s complement method is used.
 *
 * All the letters in the answer string should be lowercase characters', 'and there should not be any leading zeros in the answer except for the zero itself.
 *
 * Note: You are not allowed to use any built-in library method to directly solve this problem.
 *
 * Example 1:
 *
 * Input: num = 26 Output:"1a"
 *
 * Example 2:
 *
 * Input: num = -1 Output:"ffffffff"
 *
 * Constraints:
 *
 * -2 31 <= num <= 2 31 - 1
 */
function toHex(num: number): string {
  let arr = new Array()
  let m = new Array('0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f')
  if (num === 0) {
    return "0"
  } else if (num > 0) { // positive

    while (num > 0) {
      arr.unshift(m[num % 16])
      console.log(arr);
      num = Math.trunc(num / 16)
    }
  } else { // negative
    while (num !== 0) {
      arr.unshift(m[num & 15])
      num = num >>> 4
    }
  }
  return arr.join('')
};

function test_00405() {
  let num = 26
  console.log(toHex(num));
  num = -1
  console.log(toHex(num));
  num = -10
  console.log(toHex(num));


}

test_00405()
