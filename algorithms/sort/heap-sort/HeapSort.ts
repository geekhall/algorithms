let len: number

function buildMaxHeap(arr: number[]) {
  len = arr.length
  for (let i = Math.floor(len / 2); i >= 0; i--) {
    heapify(arr, i)
  }
}

function heapify(arr: number[], i: number) {
  let left = 2 * i + 1
  let right = 2 * i + 2
  let largest = i
  if (left < len && arr[left] > arr[largest]) {
    largest = left;
  }

  if (right < len && arr[right] > arr[largest]) {
    largest = right;
  }

  if (largest != i) {
    swap(arr, i, largest);
    heapify(arr, largest);
  }
}
function swap(arr: number[], i: number, j: number) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function heapSort(arr: number[]) {
  buildMaxHeap(arr)
  for (var i = arr.length - 1; i > 0; i--) {
    swap(arr, 0, i);
    len--;
    heapify(arr, 0);
  }
  return arr;
}
function testHeapSort() {
  let arr = [3, 5, 2, 6, 9, 1, 0, 8, 4, 7]
  heapSort(arr)
  console.log(arr)
}

testHeapSort()
