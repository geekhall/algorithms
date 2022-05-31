/**
 * ID:    01122
 * Title: Relative Sort Array
 * Difficulty: Easy
 * Description: Given two arrays arr1 and arr2, the elements of arr2 are distinct, and all elements in arr2 are also in arr1.
 *
 * Sort the elements of arr1 such that the relative ordering of items in arr1 are the same as in arr2. Elements that do not appear in arr2 should be placed at the end of arr1 in ascending order.
 *
 * Example 1:
 *
 * Input: arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6] Output: [2,2,2,1,4,3,3,9,6,7,19]
 *
 * Example 2:
 *
 * Input: arr1 = [28,6,22,8,44,17], arr2 = [22,28,8,6] Output: [22,28,8,6,17,44]
 *
 * Constraints:
 *
 * 1 <= arr1.length, arr2.length <= 1000
 * 0 <= arr1[i], arr2[i] <= 1000
 * All the elements of arr2 are distinct.
 * Each arr2[i] is in arr1.
 */
function relativeSortArray(arr1: number[], arr2: number[]): number[] {
  const arr2map = (arr: number[]): Map<number, number> => {
    let m = new Map<number, number>()
    for (let i = 0; i < arr.length; i++) {
      if (m.get(arr[i]) === undefined) {
        m.set(arr[i], 1)
      } else {
        m.set(arr[i], m.get(arr[i])! + 1)
      }
    }
    return m
  }
  let m = arr2map(arr1)
  let res = new Array()
  for (let i = 0; i < arr2.length; i++) {
    if (m.has(arr2[i])) {
      let v = m.get(arr2[i])!
      while (v > 0) {
        res.push(arr2[i])
        v--
      }
      m.delete(arr2[i])
    }
  }
  let remaining = new Map([...m.entries()].sort((a, b) => a[0] - b[0]))
  remaining.forEach((v, k) => {
    while (v > 0) {
      res.push(k)
      v--
    }
  })
  return res
};

function test_01122() {
  let arr1 = [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], arr2 = [2, 1, 4, 3, 9, 6]
  console.log(relativeSortArray(arr1, arr2))

}

test_01122()
