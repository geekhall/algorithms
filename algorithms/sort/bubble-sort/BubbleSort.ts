function bubbleSort(arr: number[]): number[] {
  let n = arr.length
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
      }
    }
  }
  return arr
}

function testBubbleSort() {
  let arr = [3, 5, 2, 6, 9, 1, 0, 8, 4, 7]
  bubbleSort(arr)
  console.log(arr);

}

testBubbleSort()
