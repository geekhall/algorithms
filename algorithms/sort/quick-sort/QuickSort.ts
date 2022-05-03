/**
 * Iterative method
 * @param arr
 * @param left
 * @param right
 */
function quickSort(arr: number[], left: number, right: number) {
  let n = arr.length
  let partitionIndex
  left = typeof left != 'number' ? 0 : left
  right = typeof right != 'number' ? n - 1 : right;

  if (left < right) {
    partitionIndex = partition(arr, left, right)
    quickSort(arr, left, partitionIndex - 1)
    quickSort(arr, partitionIndex + 1, right)
  }
  return arr
}

function partition(arr: number[], left: number, right: number) {
  let pivot = left
  let index = pivot + 1
  for (let i = index; i <= right; i++) {
    if (arr[i] < arr[pivot]) {
      swap(arr, i, index)
      index++
    }
  }
  swap(arr, pivot, index - 1)
  return index - 1
}

function swap(arr: number[], i: number, j: number) {
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}


/**
 * Recursive method
 * @param arr
 * @param low
 * @param high
 * @returns
 */
function partition2(arr: number[], low: number, high: number) {
  let pivot = arr[low]
  while (low < high) {
    while (low < high && arr[low] <= pivot) {
      ++low
    }
    arr[high] = arr[low]
  }
  arr[low] = pivot
  return low
}

function quickSort2(arr: number[], low: number, high: number) {
  if (low < high) {
    let pivot = partition2(arr, low, high)
    quickSort2(arr, low, pivot - 1)
    quickSort2(arr, pivot + 1, high)
  }
}

function testQuickSort() {
  let arr = [3, 5, 2, 6, 9, 1, 0, 8, 4, 7]
  let arr1 = quickSort(arr, 0, arr.length - 1)
  console.log(arr);
  console.log(arr1);
}

testQuickSort()


