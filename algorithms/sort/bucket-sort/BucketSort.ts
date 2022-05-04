function bucketSort(arr: number[], bucketSize: number) {
  if (arr.length === 0) {
    return arr;
  }
  let minValue = arr[0];
  let maxValue = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < minValue)
      minValue = arr[i];                // set minimum value of input
    else if (arr[i] > maxValue)
      maxValue = arr[i];                // set maximum value of input
  }

  let DEFAULT_BUCKET_SIZE = 5;            // initialize bucket ,set default bucket size
  bucketSize = bucketSize || DEFAULT_BUCKET_SIZE;
  let bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
  let buckets = new Array(bucketCount);
  for (let i = 0; i < buckets.length; i++)
    buckets[i] = [];

  for (let i = 0; i < arr.length; i++)    //利用映射函数将数据分配到各个桶中
    buckets[Math.floor((arr[i] - minValue) / bucketSize)].push(arr[i]);

  arr.length = 0;
  for (let i = 0; i < buckets.length; i++) {
    insertionSort(buckets[i]);                      // 对每个桶进行排序，这里使用了插入排序
    for (let j = 0; j < buckets[i].length; j++)
      arr.push(buckets[i][j]);
  }
  return arr;
}

function testBucketSort() {
  let arr = [3, 5, 2, 6, 9, 1, 0, 8, 4, 7]
  bucketSort(arr, 10)
  console.log(arr)
}

testBucketSort()

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
