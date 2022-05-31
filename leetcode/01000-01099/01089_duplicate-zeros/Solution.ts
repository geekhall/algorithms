/**
 * ID:    01089
 * Title: Duplicate Zeros
 * Difficulty: Easy
 * Description: Given a fixed-length integer array arr, duplicate each occurrence of zero, shifting the remaining elements to the right.
 *
 * Note that elements beyond the length of the original array are not written. Do the above modifications to the input array in place and do not return anything.
 *
 * Example 1:
 *
 * Input: arr = [1,0,2,3,0,4,5,0] Output: [1,0,0,2,3,0,0,4] Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]
 *
 * Example 2:
 *
 * Input: arr = [1,2,3] Output: [1,2,3] Explanation: After calling your function, the input array is modified to: [1,2,3]
 *
 * Constraints:
 *
 * 1 <= arr.length <= 10 4
 * 0 <= arr[i] <= 9
 */
function duplicateZeros(arr: number[]): void {
  let len = arr.length
  let i = 0
  while (i < arr.length) {
    if (arr[i] === 0) {
      arr.splice(i + 1, 0, 0)
      i += 2
    } else {
      i++
    }
  }
  while (arr.length > len) {
    arr.pop()
  }
};

function test_01089() {
  let arr = [1, 0, 2, 3, 0, 4, 5, 0]
  duplicateZeros(arr)
  console.log(arr);


}

test_01089()
