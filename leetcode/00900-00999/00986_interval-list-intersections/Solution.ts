/**
 * ID:    00986
 * Title: Interval List Intersections
 * Difficulty: Medium
 * Description: You are given two lists of closed intervals, firstList and secondList, where firstList[i] = [start i, end i ] and secondList[j] = [start j, end j ]. Each list of intervals is pairwise disjoint and in sorted order.
 *
 * Return the intersection of these two interval lists.
 *
 * A closed interval [a, b] (with a <= b) denotes the set of real numbers x with a <= x <= b.
 *
 * The intersection of two closed intervals is a set of real numbers that are either empty or represented as a closed interval. For example, the intersection of [1, 3] and [2, 4] is [2, 3].
 *
 * Example 1:
 *
 * Input: firstList = [[0,2],[5,10],[13,23],[24,25]], secondList = [[1,5],[8,12],[15,24],[25,26]] Output: [[1,2],[5,5],[8,10],[15,23],[24,24],[25,25]]
 *
 * Example 2:
 *
 * Input: firstList = [[1,3],[5,9]], secondList = [] Output: []
 *
 * Constraints:
 *
 * 0 <= firstList.length, secondList.length <= 1000
 * firstList.length + secondList.length >= 1
 * 0 <= start i < end i <= 10 9
 * end i < start i+1
 * 0 <= start j < end j <= 10 9
 * end j < start j+1
 */

function intervalIntersection(firstList: number[][], secondList: number[][]): number[][] {
  let ans = [];
  let i = 0;
  let j = 0;
  while (i < firstList.length && j < secondList.length) {
    let [start1, end1] = firstList[i];
    let [start2, end2] = secondList[j];
    if (start1 <= start2 && end1 >= start2) {
      ans.push([start2, Math.min(end1, end2)]);
    } else if (start2 <= start1 && end2 >= start1) {
      ans.push([start1, Math.min(end1, end2)]);
    }
    if (end1 < end2) {
      i++;
    } else {
      j++;
    }
  }
  return ans;
};

function test_00986() {
  console.log(intervalIntersection([[0, 2], [5, 10], [13, 23], [24, 25]], [[1, 5], [8, 12], [15, 24], [25, 26]]))
  console.log(intervalIntersection([[1, 3], [5, 9]], []))
}

test_00986()
