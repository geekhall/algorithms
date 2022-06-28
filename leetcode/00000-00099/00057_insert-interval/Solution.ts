/**
 * ID:    00057
 * Title: Insert Interval
 * Difficulty: Medium
 * Description: You are given an array of non-overlapping intervals intervals where intervals[i] = [start i, end i ] represent the start and the end of the i th interval and intervals is sorted in ascending order by start i. You are also given an interval newInterval = [start, end] that represents the start and end of another interval.
 *
 * Insert newInterval into intervals such that intervals is still sorted in ascending order by start i and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).
 *
 * Return intervals after the insertion.
 *
 * Example 1:
 *
 * Input: intervals = [[1,3],[6,9]], newInterval = [2,5] Output: [[1,5],[6,9]]
 *
 * Example 2:
 *
 * Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8] Output: [[1,2],[3,10],[12,16]] Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].
 *
 * Constraints:
 *
 * 0 <= intervals.length <= 10 4
 * intervals[i].length == 2
 * 0 <= start i <= end i <= 10 5
 * intervals is sorted by start i in ascending order.
 * newInterval.length == 2
 * 0 <= start <= end <= 10 5
 */
function insert(intervals: number[][], newInterval: number[]): number[][] {
  let res = []
  let i = 0
  while (i < intervals.length && intervals[i][1] < newInterval[0]) { // find the first interval that ends before newInterval starts
    res.push(intervals[i])
    i++
  }
  let start = newInterval[0]
  let end = newInterval[1]
  while (i < intervals.length && intervals[i][0] <= end) {  // find the first interval that starts after newInterval ends
    start = Math.min(start, intervals[i][0])
    end = Math.max(end, intervals[i][1])
    i++
  }
  res.push([start, end])
  while (i < intervals.length) {
    res.push(intervals[i])
    i++
  }
  return res
};

function test_00057() {
  let intervals = [[1, 3], [6, 9]], newInterval = [2, 5]
  console.log(insert(intervals, newInterval))
  intervals = [[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], newInterval = [4, 8]
  console.log(insert(intervals, newInterval))
}

test_00057()
