/**
 * UnionFind （并查集）
 */
export class UnionFind {
  parent: Array<number>
  size: Array<number>
  constructor(n: number) {
    this.parent = new Array(n).fill(0).map(() => -1)
    this.size = new Array(n).fill(1)
  }

  find(n: number): number {
    if (this.parent[n] === -1)
      return n
    return this.parent[n] = this.find(this.parent[n])
  }
  union(a: number, b: number) {
    const rootA = this.find(a)
    const rootB = this.find(b)
    if (rootA === rootB)
      return false
    if (this.size[rootA] < this.size[rootB]) {
      this.parent[rootA] = rootB
      this.size[rootB] += this.size[rootA]
    } else {
      this.parent[rootB] = rootA
      this.size[rootA] += this.size[rootB]
    }
    return true
  }
}

