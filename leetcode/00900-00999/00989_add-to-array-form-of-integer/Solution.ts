/**
 * ID:    00989
 * Title: Add to Array-Form of Integer
 * Difficulty: Easy
 * Description: The array-form of an integer num is an array representing its digits in left to right order.
 *
 * For example, for num = 1321, the array form is [1,3,2,1].
 *
 * Given num, the array-form of an integer, and an integer k, return the array-form of the integer num + k.
 *
 * Example 1:
 *
 * Input: num = [1,2,0,0], k = 34 Output: [1,2,3,4] Explanation: 1200 + 34 = 1234
 *
 * Example 2:
 *
 * Input: num = [2,7,4], k = 181 Output: [4,5,5] Explanation: 274 + 181 = 455
 *
 * Example 3:
 *
 * Input: num = [2,1,5], k = 806 Output: [1,0,2,1] Explanation: 215 + 806 = 1021
 *
 * Constraints:
 *
 * 1 <= num.length <= 10 4
 * 0 <= num[i] <= 9
 * num does not contain any leading zeros except for the zero itself.
 * 1 <= k <= 10 4
 */
function addToArrayForm(num: number[], k: number): number[] {
  if (k === 0)
    return num

  let numK: number[] = []
  while (k > 0) {
    numK.unshift(k % 10)
    k = Math.floor(k / 10)
  }
  let na = num.length
  let nk = numK.length
  let n = na
  if (na > nk) {
    numK.unshift(...Array.from({ length: na - nk }, v => 0))
    n = na
  } else if (nk > na) {
    num.unshift(...Array.from({ length: nk - na }, v => 0))
    n = nk
  }
  let upFlag = 0
  let res = Array.from({ length: n }, v => 0)

  for (let i = n - 1; i >= 0; i--) {
    let t = num[i] + numK[i] + upFlag
    if (t >= 10) {
      upFlag = 1
    } else {
      upFlag = 0
    }
    res[i] = t % 10
  }
  if (upFlag === 1) {
    res.unshift(1)
  }
  return res
};

function test_00989() {
  let num = [1, 2, 0, 0], k = 34
  console.log(addToArrayForm(num, k));
  num = [2, 7, 4], k = 181
  console.log(addToArrayForm(num, k));
  num = [2, 1, 5], k = 806
  console.log(addToArrayForm(num, k));
}

test_00989()
