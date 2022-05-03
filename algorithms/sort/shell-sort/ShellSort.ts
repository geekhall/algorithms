function shellSort(arr: number[]): number[] {
  let n = arr.length, temp, gap = 1

  while (gap < n / 3) { // Dynamically define interval sequence
    gap = gap * 3 + 1
  }

  while (gap > 0) {
    console.log("gap = ", gap);

    for (let i = gap; i < n; i++) {
      temp = arr[i]
      let j = i - gap;
      while (j >= 0 && arr[j] > temp) {
        arr[j + gap] = arr[j]
        j -= gap
      }
      arr[j + gap] = temp
    }
    console.log("gap" + gap + ":" + arr);

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
