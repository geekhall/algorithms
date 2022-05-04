//LSD Radix Sort
let counter: number[][] = [];
function radixSort(arr: number[], maxDigit: number) {
  let mod = 10;
  let dev: number = 1;
  for (let i = 0; i < maxDigit; i++, dev *= 10, mod *= 10) {
    for (let j = 0; j < arr.length; j++) {
      let bucket = Math.floor((arr[j] % mod) / dev);
      if (counter[bucket] == null) {
        counter[bucket] = [];
      }
      counter[bucket].push(arr[j]);
    }
    var pos = 0;
    for (var j = 0; j < counter.length; j++) {
      var value = null;
      if (counter[j] != null) {
        while ((value = counter[j].shift()) != null) {
          arr[pos++] = value;
        }
      }
    }
  }
  return arr;
}

function testRadixSort() {
  let arr = [8, 9, 1, 7, 2, 3, 5, 4, 6, 0]
  console.log(arr);
  radixSort(arr, 1)
  console.log(arr)
}

testRadixSort()
