/**
 * ID:    00415
 * Title: Add Strings
 * Difficulty: Easy
 * Description: Given two non-negative integers, num1 and num2 represented as string, return the sum of num1 and num2 as a string.
 *
 * You must solve the problem without using any built-in library for handling large integers (such as BigInteger). You must also not convert the inputs to integers directly.
 *
 * Example 1:
 *
 * Input: num1 = "11", num2 = "123" Output:"134"
 *
 * Example 2:
 *
 * Input: num1 = "456", num2 = "77" Output:"533"
 *
 * Example 3:
 *
 * Input: num1 = "0", num2 = "0" Output:"0"
 *
 * Constraints:
 *
 * 1 <= num1.length, num2.length <= 10 4
 * num1 and num2 consist of only digits.
 * num1 and num2 don't have any leading zeros except for the zero itself.
 */
function addStrings(num1: string, num2: string): string {
  let n1 = num1.length
  let n2 = num2.length
  let arr1 = Array.from(num1)
  let arr2 = Array.from(num2)
  let n = n1
  if (n1 > n2) {
    arr2.unshift(...Array.from({ length: n1 - n2 }, v => '0'))
    n = n1
  }
  if (n2 > n1) {
    arr1.unshift(...Array.from({ length: n2 - n1 }, v => '0'))
    n = n2
  }

  let upFlag = 0
  let res = Array.from({ length: n }, v => '0')

  for (let i = n - 1; i >= 0; i--) {
    let t = parseInt(arr1[i]) + parseInt(arr2[i]) + upFlag
    if (t >= 10) {
      upFlag = 1
    } else {
      upFlag = 0
    }
    res[i] = (t % 10).toString()
  }
  if (upFlag === 1) {
    res.unshift('1')
  }
  return res.join('')
};

function test_00415() {
  let num1 = "11", num2 = "123"
  console.log(addStrings(num1, num2));
  num1 = "456", num2 = "77"
  console.log(addStrings(num1, num2));
  num1 = "0", num2 = "0"
  console.log(addStrings(num1, num2));
}

test_00415()
