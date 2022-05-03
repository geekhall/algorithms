function insertionSort(arr: number[]): number[] {
  let n = arr.length
  let preIndex, current
  for (let i = 1; i < n; i++) {
    preIndex = i - 1
    current = arr[i]
    while (preIndex >= 0 && arr[preIndex] > current) {
      arr[preIndex + 1] = arr[preIndex]
      preIndex--
    }
    arr[preIndex + 1] = current
  }
  return arr
}

function testInsertionSort() {
  let arr = [3, 5, 2, 6, 9, 1, 0, 8, 4, 7]
  insertionSort(arr)
  console.log(arr)
}

testInsertionSort()
