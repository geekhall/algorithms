/**
 * ID:    01053
 * Title: Previous Permutation With One Swap
 * Difficulty: Medium
 * Description: Given an array of positive integers arr (not necessarily distinct), return the lexicographically largest permutation that is smaller than arr, that can be made with exactly one swap (A swap exchanges the positions of two numbers arr[i] and arr[j]). If it cannot be done, then return the same array.
 *
 * Example 1:
 *
 * Input: arr = [3,2,1] Output: [3,1,2] Explanation: Swapping 2 and 1.
 *
 * Example 2:
 *
 * Input: arr = [1,1,5] Output: [1,1,5] Explanation: This is already the smallest permutation.
 *
 * Example 3:
 *
 * Input: arr = [1,9,4,6,7] Output: [1,7,4,6,9] Explanation: Swapping 9 and 7.
 *
 * Constraints:
 *
 * 1 <= arr.length <= 10 4
 * 1 <= arr[i] <= 10 4
 */
// 100% 100%
function prevPermOpt1(arr: number[]): number[] {
  let idx = arr.length - 2, i = arr.length - 1;
  // find the first number that is smaller than the next one from the end
  while (idx >= 0 && arr[idx] <= arr[idx + 1]) idx--;
  if (idx < 0)
    return arr;
  // find the largest arr[i] and smallest i,
  // which makes arr[i] < arr[idx] and i > idx;
  while (arr[i] >= arr[idx] || (i > 0 && arr[i] == arr[i - 1]))
    i--;
  // swap arr[i] and arr[idx]
  let tmp = arr[i];
  arr[i] = arr[idx];
  arr[idx] = tmp;
  return arr;
};

function test_01053() {
  let arr = [3, 2, 1]
  console.log(prevPermOpt1(arr))
  arr = [1, 1, 5]
  console.log(prevPermOpt1(arr))
  arr = [1, 9, 4, 6, 7]
  console.log(prevPermOpt1(arr))
  arr = [3, 1, 1, 3]
  console.log(prevPermOpt1(arr))
}

test_01053()
