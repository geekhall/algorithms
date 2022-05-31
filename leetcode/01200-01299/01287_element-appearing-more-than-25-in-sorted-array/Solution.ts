/**
 * ID:    01287
 * Title: Element Appearing More Than 25% In Sorted Array
 * Difficulty: Easy
 * Description: Given an integer array sorted in non-decreasing order, there is exactly one integer in the array that occurs more than 25% of the time, return that integer.
 *
 * Example 1:
 *
 * Input: arr = [1,2,2,6,6,6,6,7,10] Output: 6
 *
 * Example 2:
 *
 * Input: arr = [1,1] Output: 1
 *
 * Constraints:
 *
 * 1 <= arr.length <= 10 4
 * 0 <= arr[i] <= 10 5
 */
function findSpecialInteger(arr: number[]): number {
  let len = arr.length;
  let target = Math.floor(len / 4);
  let cur = 0
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) {
      cur++;
      if (cur >= target) {
        return arr[i];
      }
    } else {
      cur = 0;
    }
  }
  return arr[arr.length - 1];
}

function test_01287() {
  let arr = [1, 2, 2, 6, 6, 6, 6, 7, 10]
  console.log(findSpecialInteger(arr));
  arr = [1, 1]
  console.log(findSpecialInteger(arr));
  arr = [1, 1, 1, 1, 1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12, 12, 12]
  console.log(findSpecialInteger(arr));

}

test_01287()
