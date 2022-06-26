import { UnionFind } from "./UnionFind"
import { NumberPriorityQueue } from "./PriorityQueue"

export class Side {
  weight: number
  from: Point | null
  to: Point | null
  constructor(from?: Point, to?: Point, weight?: number) {
    this.from = (from === undefined ? null : from)
    this.to = (to === undefined ? null : to)
    this.weight = (weight === undefined ? 0 : weight)
  }
}

export class Point {
  val: number
  inDegree: number
  outDegree: number
  neighbors: Array<Point>
  sides: Array<Side>
  distance: number
  constructor(val?: number, inDegree?: number, outDegree?: number, neighbors?: Array<Point>, sides?: Array<Side>, distance?: number) {
    this.val = (val === undefined ? 0 : val)
    this.inDegree = (inDegree === undefined ? 0 : inDegree)
    this.outDegree = (outDegree === undefined ? 0 : outDegree)
    this.neighbors = (neighbors === undefined ? new Array<Point>() : neighbors)
    this.sides = (sides === undefined ? new Array<Side>() : sides)
    this.distance = (distance === undefined ? 0 : distance)
  }
}

export class Graph {
  points: Map<number, Point>
  sides: Set<Side>

  constructor(points?: Map<number, Point>, sides?: Set<Side>) {
    this.points = (points === undefined ? new Map() : points)
    this.sides = (sides === undefined ? new Set() : sides)
  }

  /**
   * create a graph from a matrix
   * @param matrix [[from, to, weight],[from, to, weight],...]
   * @returns
   */
  static create(matrix: number[][] | null): Graph | null {
    if (matrix === null)
      return null
    let graph = new Graph()
    for (let i = 0; i < matrix.length; i++) {
      let from = matrix[i][0]
      let to = matrix[i][1]
      let weight = matrix[i][2]
      if (!graph.points?.has(from)) {
        graph.points?.set(from, new Point(from))
      }
      if (!graph.points?.has(to)) {
        graph.points?.set(to, new Point(to))
      }
      let vertexFrom = graph.points.get(from)
      let vertexTo = graph.points.get(to)
      let side = new Side(vertexFrom, vertexTo, weight)
      vertexFrom!.neighbors.push(vertexTo!)
      vertexFrom!.outDegree++
      vertexTo!.inDegree++
      vertexFrom!.sides.push(side)
      graph.sides!.add(side)
    }
    return graph
  }

  /**
   *  1. use queue
   *  2. 从源点开始，把它的邻接点加入队列，然后弹出
   *  3. 每弹出一个点，就把它的没有进过队列的邻接点加入队列
   *  4. 如果队列为空，说明所有邻接点都被访问过了，返回
   */
  static bfs(point: Point) {
    if (!point)
      return
    let queue = new Array<Point>()
    let visited = new Set<Point>()
    queue.push(point)
    visited.add(point)

    while (queue.length > 0) {
      let current = queue.shift()
      console.log(current!.val)
      for (let neighbor of current!.neighbors) {
        if (!visited.has(neighbor)) {
          queue.push(neighbor)
          visited.add(neighbor)
        }
      }
    }
  }

  /**
   * 1. use stack
   * 2. 从源点开始，把它的邻接点加入栈，然后弹出
   * 3. 每弹出一个点，就把它的没有进过栈的邻接点加入栈
   * 4. 如果栈为空，说明所有邻接点都被访问过了，返回
   */
  static dfs(point: Point) {
    if (!point)
      return
    let stack = new Array<Point>()
    let visited = new Set<Point>()
    stack.push(point)
    visited.add(point)
    console.log(point.val)
    while (stack.length > 0) {
      let current = stack.pop()
      for (let neighbor of current!.neighbors) {
        if (!visited.has(neighbor)) {
          stack.push(current!)
          stack.push(neighbor)
          visited.add(neighbor)
          console.log(neighbor.val)
          break
        }
      }
    }
  }

  /**
   * Topology sort.（拓扑排序）
   * 1. 找到入度为0的点，放入队列
   * 2. 如果队列为空，说明所有点都没有入度为0的点，返回
   * 3. 如果队列不为空，弹出队列的第一个点，输出，然后把它的邻接点的入度减1，如果入度为0，放入队列
   * 4. 重复2-4，直到队列为空
   *
   * @param graph
   */
  static topologySort(graph: Graph) {
    let inMap = new Map()
    let zeroQueue = new Array()
    for (let point of graph.points) {
      inMap.set(point[0], point[1].inDegree)
      if (point[1].inDegree === 0) {
        zeroQueue.push(point[1])
      }
    }
    let result = new Array()
    while (zeroQueue.length > 0) {
      let current = zeroQueue.shift()
      result.push(current)
      for (let neighbor of current.neighbors) {
        inMap.set(neighbor.val, inMap.get(neighbor.val) - 1)
        if (inMap.get(neighbor.val) === 0) {
          zeroQueue.push(neighbor)
        }
      }
    }
  }

  /**
   * Kruskal's MST(最小生成树) algorithm.
   * @param graph
   */
  static kruskalMST(graph: Graph) {
    let result = new Array()
    let edges = new Array()
    for (let side of graph.sides) {
      edges.push(side)
    }
    edges.sort((a, b) => a.weight - b.weight)
    let uf = new UnionFind(graph.points)
    for (let edge of edges) {
      if (!uf.isConnected(edge.from, edge.to)) {
        result.push(edge)
        uf.union(edge.from, edge.to)
      }
    }
  }

  /**
   * Prim MST algorithm
   * @param graph
   */
  static primMST(graph: Graph) {
    let result = new Array()
    let edges = new Array()
    for (let side of graph.sides) {
      edges.push(side)
    }
    edges.sort((a, b) => a.weight - b.weight)
    let uf = new UnionFind(graph.points)
    const compare = (a: Side, b: Side) => { return a.weight - b.weight }
    let pq = new NumberPriorityQueue<Side>(compare)
    for (let edge of edges) {
      pq.enqueue(edge)
    }
    while (pq.size() > 0) {
      let edge = pq.dequeue()
      if (!uf.isConnected(edge!.from!, edge!.to!)) {
        result.push(edge)
        uf.union(edge!.from!, edge!.to!)
      }
    }
  }

  static dijkstra(graph: Graph, start: Point) {
    let result = new Array()
    let pq = new NumberPriorityQueue<Point>((a, b) => a.val - b.val)
    for (let point of graph.points) {
      point[1].distance = Number.MAX_VALUE
      pq.enqueue(point[1])
    }
    start.distance = 0
    // pq.update(start)
    while (pq.size() > 0) {
      let current = pq.dequeue()
      result.push(current)
      for (let neighbor of current!.neighbors) {
        // if (neighbor.distance > current!.distance + neighbor.weight) {
        //   neighbor.distance = current!.distance + neighbor.weight
        if (neighbor.distance > current!.distance + neighbor.val) {
          neighbor.distance = current!.distance + neighbor.val
          // pq.update(neighbor)
        }
      }
    }
  }
}
