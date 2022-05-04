function countingSort(arr: number[], maxValue: number) {
  let bucket = new Array(maxValue + 1);
  let sortedIndex = 0;
  let arrLen = arr.length;
  let bucketLen = maxValue + 1;

  for (var i = 0; i < arrLen; i++) {
    if (!bucket[arr[i]]) {
      bucket[arr[i]] = 0;
    }
    bucket[arr[i]]++;
  }

  for (var j = 0; j < bucketLen; j++) {
    while (bucket[j] > 0) {
      arr[sortedIndex++] = j;
      bucket[j]--;
    }
  }

  return arr;
}

function testCountingSort() {
  let arr = [3, 5, 2, 6, 9, 1, 0, 8, 4, 7]
  countingSort(arr, 9)
  console.log(arr)
}

testCountingSort()
