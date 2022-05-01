/**
 * ID:    01331
 * Title: Rank Transform of an Array
 * Difficulty: Easy
 * Description: Given an array of integers arr, replace each element with its rank.
 *
 * The rank represents how large the element is. The rank has the following rules:
 *
 * Rank is an integer starting from 1.
 * The larger the element, the larger the rank. If two elements are equal, their rank must be the same.
 * Rank should be as small as possible.
 *
 * Example 1:
 *
 * Input: arr = [40,10,20,30] Output: [4,1,2,3] Explanation: 40 is the largest element. 10 is the smallest. 20 is the second smallest. 30 is the third smallest.
 *
 * Example 2:
 *
 * Input: arr = [100,100,100] Output: [1,1,1] Explanation: Same elements share the same rank.
 *
 * Example 3:
 *
 * Input: arr = [37,12,28,9,100,56,80,5,12] Output: [5,3,4,2,8,6,7,1,3]
 *
 * Constraints:
 *
 * 0 <= arr.length <= 10 5
 * -10 9 <= arr[i] <= 10 9
 */
function arrayRankTransform(arr: number[]): number[] {
  const n = arr.length
  if (n === 0)
    return []
  let res: number[] = new Array(n).fill(0)
  let index_arr: number[][] = new Array(n).fill(0).map((v, i) => new Array(2).fill(0))
  for (let i = 0; i < n; i++) {
    index_arr[i] = [arr[i], i]
  }
  let sorted_arr = index_arr.sort((a, b) => a[0] - b[0])
  let rank = 1
  res[sorted_arr[0][1]] = 1
  for (let i = 1; i < n; i++) {
    if (sorted_arr[i][0] !== sorted_arr[i - 1][0])
      rank++
    res[sorted_arr[i][1]] = rank
  }
  return res
};

function test_01331() {
  let arr = [40, 10, 20, 30]
  console.log(arrayRankTransform(arr));
  arr = [100, 100, 100]
  console.log(arrayRankTransform(arr));
  arr = []
  console.log(arrayRankTransform(arr));
}

test_01331()


