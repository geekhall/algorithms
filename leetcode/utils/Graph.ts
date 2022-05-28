export class Side {
  weight: number
  from: Vertex | null
  to: Vertex | null
  constructor(from?: Vertex, to?: Vertex, weight?: number) {
    this.from = (from === undefined ? null : from)
    this.to = (to === undefined ? null : to)
    this.weight = (weight === undefined ? 0 : weight)
  }
}

export class Vertex {
  val: number
  inDegree: number
  outDegree: number
  neighbors: Array<Vertex>
  sides: Array<Side>
  constructor(val?: number, inDegree?: number, outDegree?: number, neighbors?: Array<Vertex>, sides?: Array<Side>) {
    this.val = (val === undefined ? 0 : val)
    this.inDegree = (inDegree === undefined ? 0 : inDegree)
    this.outDegree = (outDegree === undefined ? 0 : outDegree)
    this.neighbors = (neighbors === undefined ? new Array<Vertex>() : neighbors)
    this.sides = (sides === undefined ? new Array<Side>() : sides)
  }
}

export class Graph {
  vertexes: Map<number, Vertex>
  sides: Set<Side>

  constructor(vertexes?: Map<number, Vertex>, sides?: Set<Side>) {
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
        graph.vertexes?.set(from, new Vertex(from))
      }
      if (!graph.vertexes?.has(to)) {
        graph.vertexes?.set(to, new Vertex(to))
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
}
