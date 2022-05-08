/**
 * ID:    00067
 * Title: Add Binary
 * Difficulty: Easy
 * Description: Given two binary strings a and b, return their sum as a binary string.
 *
 * Example 1:
 *
 * Input: a = "11", b = "1" Output:"100"
 *
 * Example 2:
 *
 * Input: a = "1010", b = "1011" Output:"10101"
 *
 * Constraints:
 *
 * 1 <= a.length, b.length <= 10 4
 * a and b consist only of '0' or '1' characters.
 * Each string does not contain leading zeros except for the zero itself.
 */
function addBinary(a: string, b: string): string {
  // return (parseInt(a, 2) + parseInt(b, 2)).toString(2)  // will overflow
  let na = a.length
  let nb = b.length
  let arrA = Array.from(a)
  let arrB = Array.from(b)
  let n = na
  if (na > nb) {
    arrB.unshift(...Array.from({ length: na - nb }, v => '0'))
    n = na
  } else if (nb > na) {
    arrA.unshift(...Array.from({ length: nb - na }, v => '0'))
    n = nb
  }
  let upFlag = 0
  let res = Array.from({ length: n }, v => '0')

  for (let i = n - 1; i >= 0; i--) {
    let t = parseInt(arrA[i]) + parseInt(arrB[i]) + upFlag
    if (t >= 2) {
      upFlag = 1
    } else {
      upFlag = 0
    }
    res[i] = (t % 2).toString()
  }
  if (upFlag === 1) {
    res.unshift('1')
  }
  return res.join('')
}

function test_00067() {

  let a = "10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101"
  let b = "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011"
  console.log(addBinary(a, b));
  console.log("110111101100010011000101110110100000011101000101011001000011011000001100011110011010010011000000000");

  // expected :
  // "110111101100010011000101110110100000011101000101011001000011011000001100011110011010010011000000000"
  // overflow
  a = "11", b = "1"
  console.log(addBinary(a, b));
  a = "1010", b = "1011"
  console.log(addBinary(a, b));
}

test_00067()
