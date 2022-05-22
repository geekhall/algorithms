/**
 * ID:    00504
 * Title: Base 7
 * Difficulty: Easy
 * Description: Given an integer num, return a string of its base 7 representation.
 *
 * Example 1:
 *
 * Input: num = 100 Output:"202"
 *
 * Example 2:
 *
 * Input: num = -7 Output:"-10"
 *
 * Constraints:
 *
 * -10 7 <= num <= 10 7
 */
function convertToBase7(num: number): string {
  let res = ""
  const positiveBase7 = (num: number): string => {
    let arr = new Array()
    while (num > 0) {
      arr.unshift(num % 7)
      num = Math.trunc(num / 7)
    }
    return arr.join('')
  }
  if (num === 0) {
    res = "0"
  } else if (num > 0) {
    res = positiveBase7(num)
  } else {
    res = "-" + positiveBase7(Math.abs(num))
  }
  return res
};

function test_00504() {
  let num = 100
  console.log(convertToBase7(num));
  num = -7
  console.log(convertToBase7(num));
}

test_00504()
