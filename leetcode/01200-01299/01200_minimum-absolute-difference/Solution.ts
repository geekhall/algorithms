/**
 * ID:    01200
 * Title: Minimum Absolute Difference
 * Difficulty: Easy
 * Description: Given an array of distinct integers arr, find all pairs of elements with the minimum absolute difference of any two elements.
 *
 * Return a list of pairs in ascending order(with respect to pairs), each pair [a, b] follows
 *
 * a, b are from arr
 * a < b
 * b - a equals to the minimum absolute difference of any two elements in arr
 *
 * Example 1:
 *
 * Input: arr = [4,2,1,3] Output: [[1,2],[2,3],[3,4]] Explanation: The minimum absolute difference is 1. List all pairs with difference equal to 1 in ascending order.
 *
 * Example 2:
 *
 * Input: arr = [1,3,6,10,15] Output: [[1,3]]
 *
 * Example 3:
 *
 * Input: arr = [3,8,-10,23,19,-4,-14,27] Output: [[-14,-10],[19,23],[23,27]]
 *
 * Constraints:
 *
 * 2 <= arr.length <= 10 5
 * -10 6 <= arr[i] <= 10 6
 */
function minimumAbsDifference1(arr: number[]): number[][] {
  arr.sort((a, b) => a - b)
  let m = new Map()
  let min = Number.MAX_VALUE
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] < min)
      min = arr[i] - arr[i - 1]
    m.set([arr[i - 1], arr[i]], arr[i] - arr[i - 1])
  }
  let res: number[][] = new Array().fill(0).map(() => new Array(2).fill(0))
  m.forEach((v, k) => {
    if (v === min) {
      res.push(k)
    }
  })
  return res
};
function minimumAbsDifference(arr: number[]): number[][] {
  let minElement = arr[0]
  let maxElement = arr[0]

  for (const element of arr) {
    minElement = Math.min(minElement, element)
    maxElement = Math.max(maxElement, element)
  }
  let shift = -minElement
  let line = new Array(maxElement - minElement + 1).fill(0)
  let res = []

  for (const num of arr) {
    line[num + shift] = 1
  }

  let minPairDiff = maxElement - minElement
  let prev = 0
  for (let curr = 1; curr <= maxElement + shift; ++curr) {
    // If line[curr] == 0, meaning there is no occurrence of the integer (curr - shift)
    // held by this index, we will move on to the next index.
    if (line[curr] === 0) {
      continue;
    }
    // If the difference (curr - prev) equals `minPairDiff`, we add this pair
    // {prev - shift, curr - shift} to the answer list. Otherwise, if the difference
    // (curr - prev) is smaller than `minPairDiff`, we empty the answer list and add
    // the pair {curr - shift, prev - shift} to the answre list and update the `minPairDiff`
    if (curr - prev === minPairDiff) {
      res.push([prev - shift, curr - shift]);
    } else if (curr - prev < minPairDiff) {
      res = [];
      minPairDiff = curr - prev;
      res.push([prev - shift, curr - shift]);
    }

    // Update prev as curr.
    prev = curr;
  }
  return res;
}
function test_01200() {
  let arr = [4, 2, 1, 3]
  console.log(minimumAbsDifference(arr));

}

test_01200()
