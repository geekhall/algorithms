/**
 * ID:    01460
 * Title: Make Two Arrays Equal by Reversing Sub-arrays
 * Difficulty: Easy
 * Description: You are given two integer arrays of equal length target and arr. In one step, you can select any non-empty sub-array of arr and reverse it. You are allowed to make any number of steps.
 *
 * Return true if you can make arr equal to target or false otherwise.
 *
 * Example 1:
 *
 * Input: target = [1,2,3,4], arr = [2,4,1,3] Output: true Explanation: You can follow the next steps to convert arr to target: 1- Reverse sub-array [2,4,1], arr becomes [1,4,2,3] 2- Reverse sub-array [4,2], arr becomes [1,2,4,3] 3- Reverse sub-array [4,3], arr becomes [1,2,3,4] There are multiple ways to convert arr to target, this is not the only way to do so.
 *
 * Example 2:
 *
 * Input: target = [7], arr = [7] Output: true Explanation: arr is equal to target without any reverses.
 *
 * Example 3:
 *
 * Input: target = [3,7,9], arr = [3,7,11] Output: false Explanation: arr does not have value 9 and it can never be converted to target.
 *
 * Constraints:
 *
 * target.length == arr.length
 * 1 <= target.length <= 1000
 * 1 <= target[i] <= 1000
 * 1 <= arr[i] <= 1000
 */
function canBeEqual(target: number[], arr: number[]): boolean {
  const map = new Map<number, number>()
  for (let i = 0; i < target.length; i++) {
    if (map.has(target[i])) {
      map.set(target[i], map.get(target[i])! + 1)
    } else {
      map.set(target[i], 1)
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i])) {
      map.set(arr[i], map.get(arr[i])! - 1)
      if (map.get(arr[i]) === 0) {
        map.delete(arr[i])
      }
    } else {
      return false
    }
  }
  return map.size === 0
};

function test_01460() {
  console.log(canBeEqual([1, 2, 3, 4], [2, 4, 1, 3]));
  console.log(canBeEqual([7], [7]));
  console.log(canBeEqual([3, 7, 9], [3, 7, 11]));
}

test_01460()
