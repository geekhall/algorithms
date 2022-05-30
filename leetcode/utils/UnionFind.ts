import { Graph, Point } from "./Graph"
/**
 * UnionFind （并查集）
 */
export class UnionFind {
  private parent: Map<number, Point>
  private rank: Map<number, number>
  private count: number

  constructor(parent?: Map<number, Point>, rank?: Map<number, number>, count?: number) {
    this.parent = (parent === undefined ? new Map() : parent)
    this.rank = (rank === undefined ? new Map() : rank)
    this.count = (count === undefined ? 0 : count)
  }

  isConnected(p1: Point, p2: Point): boolean {
    return false
  }
  union(p1: Point, p2: Point) {
    return
  }
}
