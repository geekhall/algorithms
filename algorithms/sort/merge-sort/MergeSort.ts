function mergeSort(arr: number[]): number[] {
  let n = arr.length
  if (n < 2) {
    return arr
  }
  let middle = Math.floor(n / 2)
  let left = arr.slice(0, middle)
  let right = arr.slice(middle)
  return merge(mergeSort(left), mergeSort(right))
}

function merge(left: number[], right: number[]): number[] {
  let res = new Array()

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      res.push(left.shift())
    } else {
      res.push(right.shift())
    }
  }

  while (left.length)
    res.push(left.shift())
  while (right.length)
    res.push(right.shift())

  return res
}

function testMergeSort() {
  let arr = [3, 5, 2, 6, 9, 1, 0, 8, 4, 7]
  let arr1 = mergeSort(arr)
  console.log(arr)
  console.log(arr1)
}

testMergeSort()
