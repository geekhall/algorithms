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
  constructor(val?: number, inDegree?: number, outDegree?: number, neighbors?: Array<Point>, sides?: Array<Side>) {
    this.val = (val === undefined ? 0 : val)
    this.inDegree = (inDegree === undefined ? 0 : inDegree)
    this.outDegree = (outDegree === undefined ? 0 : outDegree)
    this.neighbors = (neighbors === undefined ? new Array<Point>() : neighbors)
    this.sides = (sides === undefined ? new Array<Side>() : sides)
  }
}

export class Graph {
  vertexes: Map<number, Point>
  sides: Set<Side>

  constructor(vertexes?: Map<number, Point>, sides?: Set<Side>) {
    this.vertexes = (vertexes === undefined ? new Map() : vertexes)
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
      if (!graph.vertexes?.has(from)) {
        graph.vertexes?.set(from, new Point(from))
      }
      if (!graph.vertexes?.has(to)) {
        graph.vertexes?.set(to, new Point(to))
      }
      let vertexFrom = graph.vertexes.get(from)
      let vertexTo = graph.vertexes.get(to)
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
}
