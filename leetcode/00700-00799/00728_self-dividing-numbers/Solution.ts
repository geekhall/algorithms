/**
 * ID:    00728
 * Title: Self Dividing Numbers
 * Difficulty: Easy
 * Description: A self-dividing number is a number that is divisible by every digit it contains.
 *
 * For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.
 *
 * A self-dividing number is not allowed to contain the digit zero.
 *
 * Given two integers left and right, return a list of all the self-dividing numbers in the range [left, right].
 *
 * Example 1:
 *
 * Input: left = 1, right = 22 Output: [1,2,3,4,5,6,7,8,9,11,12,15,22]
 *
 * Example 2:
 *
 * Input: left = 47, right = 85 Output: [48,55,66,77]
 *
 * Constraints:
 *
 * 1 <= left <= right <= 10 4
 */
function selfDividingNumbers(left: number, right: number): number[] {
  const isDividingNumber = (n: number): boolean => {
    let tmp = n
    while (tmp > 0) {
      let cur = tmp % 10
      if (cur === 0 || n % cur !== 0) {
        return false
      }
      tmp = Math.trunc(tmp / 10)
    }
    return true
  }
  let res = new Array()

  for (let i = left; i <= right; i++) {
    if (isDividingNumber(i)) {
      res.push(i)
    }
  }
  return res
};

function test_00728() {
  let left = 1, right = 22
  console.log(selfDividingNumbers(left, right));

}

test_00728()
