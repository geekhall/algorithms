/**
 * ID:    00056
 * Title: Merge Intervals
 * Difficulty: Medium
 * Description: Given an array of intervals where intervals[i] = [start i, end i ], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.
 *
 * Example 1:
 *
 * Input: intervals = [[1,3],[2,6],[8,10],[15,18]] Output: [[1,6],[8,10],[15,18]] Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
 *
 * Example 2:
 *
 * Input: intervals = [[1,4],[4,5]] Output: [[1,5]] Explanation: Intervals [1,4] and [4,5] are considered overlapping.
 *
 * Constraints:
 *
 * 1 <= intervals.length <= 10 4
 * intervals[i].length == 2
 * 0 <= start i <= end i <= 10 4
 */
function merge(intervals: number[][]): number[][] {
  if (intervals.length < 2) return intervals
  intervals.sort((a, b) => a[0] - b[0])
  let res = [intervals[0]]
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] > res[res.length - 1][1]) { // no overlap, add to res
      res.push(intervals[i])
    } else {  // overlap, merge
      res[res.length - 1][1] = Math.max(res[res.length - 1][1], intervals[i][1])
    }
  }
  return res
};

function test_00056() {
  let intervals = [[1, 3], [2, 6], [8, 10], [15, 18]]
  console.log(merge(intervals))
  intervals = [[1, 4], [4, 5]]
  console.log(merge(intervals))
}

test_00056()
