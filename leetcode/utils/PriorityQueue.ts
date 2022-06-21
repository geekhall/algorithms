import { Side } from "./Graph";
export class PriorityQueue {
  private heap: number[]
  private count: number
  constructor(count?: number) {
    this.heap = []
    this.count = 0
  }
  size(): number {
    return this.count
  }
  // enqueue
  add(item: number): void {
    this.heap[this.count] = item
    this.siftUp(this.count)
    this.count++
  }
  // dequeue
  poll(): number {
    if (this.count === 0)
      return 0
    let item = this.heap[0]
    this.count--
    if (this.count > 0) {
      this.heap[0] = this.heap[this.count]
      this.siftDown(0)
    }
    // this.heap[this.count] = null
    return item
  }
  siftDown(n: number): void {
    let item = this.heap[n]
    while (true) {
      let child2N = (n + 1) * 2
      let child1N = child2N - 1
      let swap = null
      let child1: number = 0
      if (child1N < this.count) {
        child1 = this.heap[child1N]
        if (child1 < item)
          swap = child1N
      }
      if (child2N < this.count) {
        let child2 = this.heap[child2N]
        if (child2 < (swap === null ? item : child1))
          swap = child2N
      }
      if (swap === null)
        break
      this.heap[n] = this.heap[swap]
      this.heap[swap] = item
      n = swap
    }
  }
  siftUp(n: number): void {
    let item = this.heap[n]
    while (n > 0) {
      let parentN = Math.floor((n + 1) / 2) - 1
      let parent = this.heap[parentN]
      if (item >= parent)
        break
      this.heap[parentN] = item
      this.heap[n] = parent
      n = parentN
    }
  }
}
export class PriorityQueueTemplate<T> {
  private heap: T[]
  private count: number
  private compare: (a: T, b: T) => number
  constructor(compare: (a: T, b: T) => number) {
    this.heap = []
    this.count = 0
    this.compare = compare
  }
  size(): number {
    return this.count
  }
  isEmpty(): boolean {
    return this.count === 0
  }
  peek(): T | null {
    if (this.count === 0)
      return null
    return this.heap[0]
  }
  enqueue(item: T): void {
    this.heap[this.count] = item
    this.siftUp(this.count)
    this.count++
  }
  dequeue(): T | null {
    if (this.count === 0)
      return null
    let item = this.heap[0]
    this.count--
    if (this.count > 0) {
      this.heap[0] = this.heap[this.count]
      this.siftDown(0)
    }
    // this.heap[this.count] = null
    return item
  }
  siftDown(n: number): void {
    let item = this.heap[n]
    while (true) {
      let child2N = (n + 1) * 2
      let child1N = child2N - 1
      let swap = null
      let child1: T | null = null
      if (child1N < this.count) {
        child1 = this.heap[child1N]
        if (this.compare(child1, item) < 0)
          swap = child1N
      }
      if (child2N < this.count) {
        let child2 = this.heap[child2N]
        if (this.compare(child2, swap === null ? item : child1!) < 0)
          swap = child2N
      }
      if (swap === null)
        break
      this.heap[n] = this.heap[swap]
      this.heap[swap] = item
      n = swap
    }
  }
  siftUp(n: number): void {
    let item = this.heap[n]
    while (n > 0) {
      let parentN = Math.floor((n + 1) / 2) - 1
      let parent = this.heap[parentN]
      if (this.compare(item, parent) >= 0)
        break
      this.heap[parentN] = item
      this.heap[n] = parent
      n = parentN
    }
  }
}
