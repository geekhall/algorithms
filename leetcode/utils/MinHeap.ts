export class MinHeap {
  arr: number[]
  constructor() {
    this.arr = new Array()
  }

  getParent(index: number) {
    return Math.floor((index - 1) / 2)
  }

  getLeftChild(index: number) {
    return 2 * index + 1
  }

  getRightChild(index: number) {
    return 2 * index + 2
  }

  insert(val: number) {
    this.arr.push(val)
    this.siftUp(this.arr.length - 1)
  }

  siftUp(index: number) {
    let parent = this.getParent(index)
    if (parent < 0)
      return
    if (this.arr[parent] > this.arr[index]) {
      let temp = this.arr[parent]
      this.arr[parent] = this.arr[index]
      this.arr[index] = temp
      this.siftUp(parent)
    }
  }

  extractMin() {
    if (this.arr.length === 0)
      return
    let min = this.arr[0]
    this.arr[0] = this.arr[this.arr.length - 1]
    this.arr.pop()
    this.siftDown(0)
    return min
  }

  siftDown(index: number) {
    let left = this.getLeftChild(index)
    let right = this.getRightChild(index)
    let min = index
    if (left < this.arr.length && this.arr[left] < this.arr[min]) {
      min = left
    }
    if (right < this.arr.length && this.arr[right] < this.arr[min]) {
      min = right
    }
    if (min !== index) {
      let temp = this.arr[index]
      this.arr[index] = this.arr[min]
      this.arr[min] = temp
      this.siftDown(min)
    }
  }

  getSum() {
    return this.arr.reduce((pre, cur) => pre + cur, 0)
  }
}
