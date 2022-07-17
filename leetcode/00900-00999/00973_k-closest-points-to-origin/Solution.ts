/**
 * ID:    00973
 * Title: K Closest Points to Origin
 * Difficulty: Medium
 * Description: Given an array of points where points[i] = [x i, y i ] represents a point on the X-Y plane and an integer k, return the k closest points to the origin (0, 0).
 *
 * The distance between two points on the X-Y plane is the Euclidean distance (i.e., √(x 1 - x 2) 2 + (y 1 - y 2) 2).
 *
 * You may return the answer in any order. The answer is guaranteed to be unique (except for the order that it is in).
 *
 * Example 1:
 *
 * Input: points = [[1,3],[-2,2]], k = 1 Output: [[-2,2]] Explanation: The distance between (1, 3) and the origin is sqrt(10). The distance between (-2, 2) and the origin is sqrt(8). Since sqrt(8) < sqrt(10), (-2, 2) is closer to the origin. We only want the closest k = 1 points from the origin, so the answer is just [[-2,2]].
 *
 * Example 2:
 *
 * Input: points = [[3,3],[5,-1],[-2,4]], k = 2 Output: [[3,3],[-2,4]] Explanation: The answer [[-2,4],[3,3]] would also be accepted.
 *
 * Constraints:
 *
 * 1 <= k <= points.length <= 10 4
 * -10 4 < x i, y i < 10 4
 */
// 求最小的第K个或者前K个，用大根堆保存最小的K个元素
// 求最大的第K个或者后K个，用小根堆保存最大的K个元素
import { PriorityQueue } from '../../utils/PriorityQueue';

function kClosest(points: number[][], k: number): number[][] {
  let pq = new PriorityQueue<number[]>((a, b) => {
    return b[0] * b[0] + b[1] * b[1] - (a[0] * a[0] + a[1] * a[1])    // Math.sqrt can be omitted
  })

  for (let i = 0; i < points.length; i++) {
    pq.enqueue(points[i])
    if (pq.size() > k) {
      pq.dequeue()
    }
  }

  let res = []
  while (pq.size() > 0) {
    res.push(pq.dequeue()!)
  }
  return res
};

function test_00973() {
  let points = [[1, 3], [-2, 2]], k = 1
  console.log(kClosest(points, k))
  points = [[3, 3], [5, -1], [-2, 4]], k = 2
  console.log(kClosest(points, k))
  points = [[-5, 4], [-6, -5], [4, 6]], k = 2
  console.log(kClosest(points, k))  //[[-5,4],[4,6]]


}

test_00973()
