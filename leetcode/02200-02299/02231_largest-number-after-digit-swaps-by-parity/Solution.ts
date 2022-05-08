/**
 * ID:    02231
 * Title: Largest Number After Digit Swaps by Parity
 * Difficulty: Easy
 * Description: You are given a positive integer num. You may swap any two digits of num that have the same parity (i.e. both odd digits or both even digits).
 *
 * Return the largest possible value of num after any number of swaps.
 *
 * Example 1:
 *
 * Input: num = 1234 Output: 3412 Explanation: Swap the digit 3 with the digit 1, this results in the number 3214. Swap the digit 2 with the digit 4, this results in the number 3412. Note that there may be other sequences of swaps but it can be shown that 3412 is the largest possible number. Also note that we may not swap the digit 4 with the digit 1 since they are of different parities.
 *
 * Example 2:
 *
 * Input: num = 65875 Output: 87655 Explanation: Swap the digit 8 with the digit 6, this results in the number 85675. Swap the first digit 5 with the digit 7, this results in the number 87655. Note that there may be other sequences of swaps but it can be shown that 87655 is the largest possible number.
 *
 * Constraints:
 *
 * 1 <= num <= 10 9
 */
function largestInteger(num: number): number {
  let res = 0
  let odd: number[] = []
  let even: number[] = []
  let arr: number[] = []
  while (num > 0) {
    let temp = num % 10
    if (temp % 2)
      odd.push(temp)
    else
      even.push(temp)
    arr.unshift(temp)
    num = Math.floor(num / 10)
  }
  let n = arr.length
  odd.sort((a, b) => b - a)
  even.sort((a, b) => b - a)
  for (let i = 0; i < n; i++) {
    if (arr.pop()! % 2) {
      res += odd.pop()! * Math.pow(10, i)
    } else {
      res += even.pop()! * Math.pow(10, i)
    }
  }

  return res
};

function test_02231() {
  let num = 65875
  console.log(largestInteger(num));
}

test_02231()
