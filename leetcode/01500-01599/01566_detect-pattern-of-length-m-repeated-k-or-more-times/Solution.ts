/**
 * ID:    01566
 * Title: Detect Pattern of Length M Repeated K or More Times
 * Difficulty: Easy
 * Description: Given an array of positive integers arr, find a pattern of length m that is repeated k or more times.
 *
 * A pattern is a subarray (consecutive sub-sequence) that consists of one or more values, repeated multiple times consecutively without overlapping. A pattern is defined by its length and the number of repetitions.
 *
 * Return true if there exists a pattern of length m that is repeated k or more times, otherwise return false.
 *
 * Example 1:
 *
 * Input: arr = [1,2,4,4,4,4], m = 1, k = 3 Output: true Explanation: The pattern (4) of length 1 is repeated 4 consecutive times. Notice that pattern can be repeated k or more times but not less.
 *
 * Example 2:
 *
 * Input: arr = [1,2,1,2,1,1,1,3], m = 2, k = 2 Output: true Explanation: The pattern (1,2) of length 2 is repeated 2 consecutive times. Another valid pattern (2,1) is also repeated 2 times.
 *
 * Example 3:
 *
 * Input: arr = [1,2,1,2,1,3], m = 2, k = 3 Output: false Explanation: The pattern (1,2) is of length 2 but is repeated only 2 times. There is no pattern of length 2 that is repeated 3 or more times.
 *
 * Constraints:
 *
 * 2 <= arr.length <= 100
 * 1 <= arr[i] <= 100
 * 1 <= m <= 100
 * 2 <= k <= 100
 */
function containsPattern(arr: number[], m: number, k: number): boolean {
  let temp = ""
  let target = ""
  for (let i = 0; i < arr.length; i++) {
    let cnt = 1
    target = arr.slice(i, i + m).join('').toString()
    for (let j = i + m; j + m <= arr.length; j += m) {
      temp = arr.slice(j, j + m).join('').toString()
      if (temp === target)
        cnt++
      else
        break
    }
    if (cnt >= k)
      return true

  }
  return false
};

function test_01566() {
  let arr = [1, 2, 4, 4, 4, 4], m = 1, k = 3
  console.log(containsPattern(arr, m, k));
  arr = [1, 2, 1, 2, 1, 1, 1, 3], m = 2, k = 2
  console.log(containsPattern(arr, m, k));
  arr = [1, 2, 1, 2, 1, 3], m = 2, k = 3
  console.log(containsPattern(arr, m, k));
  arr = [1, 2, 3, 1, 2], m = 2, k = 2
  console.log(containsPattern(arr, m, k));  // expected false , not consecutively
  arr = [3, 2, 2, 1, 2, 2, 1, 1, 1, 2, 3, 2, 2], m = 3, k = 2
  console.log(containsPattern(arr, m, k));  // expected true [2,2,1] repeat 2 times
  arr = [2, 2, 1, 2, 2, 1, 1, 1, 2, 1], m = 2, k = 2
  console.log(containsPattern(arr, m, k));  // expected false

}

test_01566()
