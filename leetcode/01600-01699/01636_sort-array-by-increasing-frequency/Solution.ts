/**
 * ID:    01636
 * Title: Sort Array by Increasing Frequency
 * Difficulty: Easy
 * Description: Given an array of integers nums, sort the array in increasing order based on the frequency of the values. If multiple values have the same frequency, sort them in decreasing order.
 *
 * Return the sorted array.
 *
 * Example 1:
 *
 * Input: nums = [1,1,2,2,2,3] Output: [3,1,1,2,2,2] Explanation: '3' has a frequency of 1, '1' has a frequency of 2, and '2' has a frequency of 3.
 *
 * Example 2:
 *
 * Input: nums = [2,3,1,3,2] Output: [1,3,3,2,2] Explanation: '2' and '3' both have a frequency of 2, so they are sorted in decreasing order.
 *
 * Example 3:
 *
 * Input: nums = [-1,1,-6,4,5,-6,1,4,1] Output: [5,-1,4,4,-6,-6,1,1,1]
 *
 * Constraints:
 *
 * 1 <= nums.length <= 100
 * -100 <= nums[i] <= 100
 */
function frequencySort(nums: number[]): number[] {
  const arr2map = (arr: number[]): Map<number, number> => {
    let m = new Map<number, number>()
    for (let i = 0; i < arr.length; i++) {
      if (m.get(arr[i]) === undefined) {
        m.set(arr[i], 1)
      } else {
        m.set(arr[i], m.get(arr[i])! + 1)
      }
    }
    return m
  }
  let res: number[] = new Array()
  let m = new Map([...arr2map(nums).entries()].sort((a, b) => (b[1] === a[1]) ? b[0] - a[0] : a[1] - b[1]))
  m.forEach((v, k) => {
    for (let i = 0; i < v; i++) {
      res.push(k)
    }
  })
  return res
};

function test_01636() {
  let nums = [1, 1, 2, 2, 2, 3]
  console.log(frequencySort(nums));
  nums = [-1, 1, -6, 4, 5, -6, 1, 4, 1]
  console.log(frequencySort(nums));
  nums = [2, 3, 1, 3, 2]
  console.log(frequencySort(nums));

}

test_01636()
