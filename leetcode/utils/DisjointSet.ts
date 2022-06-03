export class DisjointSet {
  private parent: Map<number, number>

  constructor(parent?: Map<number, number>, rank?: Map<number, number>, count?: number) {
    this.parent = parent || new Map()
  }

  init(n: number) {
    for (let i = 0; i < n; i++) {
      this.parent.set(i, i)
    }
  }
  makeSet(n: number) {
    this.parent.set(n, n)
  }

  getParent(p: number): number {
    while (p !== this.parent.get(p)!) {
      p = this.parent.get(p)!
    }
    return p
  }

  isConnected(p1: number, p2: number): boolean {
    return this.getParent(p1) === this.getParent(p2)
  }

  union(p1: number, p2: number) {
    const p1Parent = this.getParent(p1)
    const p2Parent = this.getParent(p2)

    if (p1Parent === p2Parent) {
      return
    } else if (p1Parent > p2Parent) {
      this.parent.set(p2Parent, p1Parent)
    } else {
      this.parent.set(p1Parent, p2Parent)
    }
  }
}
