/**
 * ID:    01640
 * Title: Check Array Formation Through Concatenation
 * Difficulty: Easy
 * Description: You are given an array of distinct integers arr and an array of integer arrays pieces, where the integers in pieces are distinct. Your goal is to form arr by concatenating the arrays in pieces in any order. However, you are not allowed to reorder the integers in each array pieces[i].
 *
 * Return true if it is possible to form the array arr from pieces. Otherwise, return false.
 *
 * Example 1:
 *
 * Input: arr = [15,88], pieces = [[88],[15]] Output: true Explanation: Concatenate [15] then [88]
 *
 * Example 2:
 *
 * Input: arr = [49,18,16], pieces = [[16,18,49]] Output: false Explanation: Even though the numbers match, we cannot reorder pieces[0].
 *
 * Example 3:
 *
 * Input: arr = [91,4,64,78], pieces = [[78],[4,64],[91]] Output: true Explanation: Concatenate [91] then [4,64] then [78]
 *
 * Constraints:
 *
 * 1 <= pieces.length <= arr.length <= 100
 * sum(pieces[i].length) == arr.length
 * 1 <= pieces[i].length <= arr.length
 * 1 <= arr[i], pieces[i][j] <= 100
 * The integers in arr are distinct.
 * The integers in pieces are distinct (i.e., If we flatten pieces in a 1D array, all the integers in this array are distinct).
 */
function canFormArray(arr: number[], pieces: number[][]): boolean {
  let res = true
  for (let row of pieces) for (let e of row) if (arr.indexOf(e) === -1) return false

  for (let i = 0; i < pieces.length; i++) {
    if (pieces[i].length === 1) {
      continue
    } else if (pieces[i].length > 1) {
      let index = arr.indexOf(pieces[i][0])
      if (index === -1) {
        return false
      } else {
        let tempArr = arr.slice(index, index + pieces[i].length)
        for (let j = 0; j < pieces[i].length; j++) {
          if (tempArr[j] !== pieces[i][j]) {
            return false
          }
        }
      }
    }
  }
  return true
};

function test_01640() {
  console.log(canFormArray([15, 88], [[88], [15]]));
  console.log(canFormArray([49, 18, 16], [[16, 18, 49]]));
  console.log(canFormArray([91, 4, 64, 78], [[78], [4, 64], [91]]));
  console.log(canFormArray([1], [[12]]));
}

test_01640()
