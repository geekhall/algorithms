/**
 * ID:    01550
 * Title: Three Consecutive Odds
 * Difficulty: Easy
 * Description: Given an integer array arr, return true if there are three consecutive odd numbers in the array. Otherwise, return false.
 *
 * Example 1:
 *
 * Input: arr = [2,6,4,1] Output: false Explanation: There are no three consecutive odds.
 *
 * Example 2:
 *
 * Input: arr = [1,2,34,3,4,5,7,23,12] Output: true Explanation: [5,7,23] are three consecutive odds.
 *
 * Constraints:
 *
 * 1 <= arr.length <= 1000
 * 1 <= arr[i] <= 1000
 */
function threeConsecutiveOdds(arr: number[]): boolean {
  let cnt = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) {
      cnt++
    } else {
      cnt = 0
    }
    if (cnt === 3) {
      return true
    }
  }
  return false
};

function test_01550() {
  let arr = [2, 6, 4, 1]
  console.log(threeConsecutiveOdds(arr));
  arr = [1, 2, 34, 3, 4, 5, 7, 23, 12]
  console.log(threeConsecutiveOdds(arr));
}

test_01550()
