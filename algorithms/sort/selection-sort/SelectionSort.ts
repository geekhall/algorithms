function selectionSort(arr: number[]): number[] {
  let n = arr.length
  let minIndex, temp;
  for (let i = 0; i < n - 1; i++) {
    minIndex = i
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) // find the min value
        minIndex = j
    }
    // swap arr[i] and arr[minIndex]
    temp = arr[i]
    arr[i] = arr[minIndex]
    arr[minIndex] = temp
  }
  return arr
}

function testSelectionSort() {
  let arr = [3, 5, 2, 6, 9, 1, 0, 8, 4, 7]
  selectionSort(arr)
  console.log(arr);

}

testSelectionSort()
