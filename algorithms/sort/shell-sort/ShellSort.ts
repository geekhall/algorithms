function shellSort(arr: number[]): number[] {
  let n = arr.length, temp, gap = 1

  while (gap < n / 3) { // Dynamically define interval sequence
    gap = gap * 3 + 1
  }

  while (gap > 0) {
    for (let i = gap; i < n; i++) {
      temp = arr[i]
      let j = i - gap;
      while (j >= 0 && arr[j] > temp) { // insertion sort (ascending order)
        arr[j + gap] = arr[j]           // shift element
        j -= gap
      }
      arr[j + gap] = temp   // insert element at proper position
    }
    gap = Math.floor(gap / 3)
  }

  return arr
}

function testShellSort() {
  let arr = [8, 9, 1, 7, 2, 3, 5, 4, 6, 0]
  console.log(arr);
  shellSort(arr)
  console.log(arr)
}

testShellSort()
