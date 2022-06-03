import { Graph, Point } from "./Graph"
/**
 * UnionFind （并查集）
 */
export class UnionFind {
  private parent: Map<number, Point>
  private rank: Map<number, number>
  private count: number

  constructor(parent?: Map<number, Point>, rank?: Map<number, number>, count?: number) {
    this.parent = parent || new Map()
    this.rank = rank || new Map()
    this.count = count || 0
  }

  getParent(p: Point): Point {
    return this.parent.get(p.val)!
  }

  isConnected(p1: Point, p2: Point): boolean {
    return this.getParent(p1) === this.getParent(p2)
  }

  union(p1: Point, p2: Point) {

  }
}

