class AVLTreeNode {
  value: number;
  balanceFactor: number;
  left: AVLTreeNode | null;
  right: AVLTreeNode | null;
  constructor(val: number, left: AVLTreeNode | null = null, right: AVLTreeNode | null = null) {
    this.value = val;
    this.balanceFactor = 0;
    this.left = left;
    this.right = right;
  }

}
export class AVLTree {
  public root: AVLTreeNode | null = null
  public count: number = 0
  public compare: (a: any, b: any) => number
  public constructor(compare: (a: any, b: any) => number) {
    this.compare = compare
  }
  public insert(value: any): void {
    this.root = this.insertNode(this.root, value)
  }
  public insertNode(node: AVLTreeNode | null, value: any): AVLTreeNode | null {
    if (node === null) {
      this.count++
      return new AVLTreeNode(value)
    }
    if (this.compare(value, node.value) < 0) {
      node.left = this.insertNode(node.left, value)
    } else {
      node.right = this.insertNode(node.right, value)
    }
    return this.balance(node)
  }
  public balance(node: AVLTreeNode | null): AVLTreeNode | null {
    if (node === null)
      return null
    if (node.balanceFactor > 1) {
      if (node.left !== null && node.left.balanceFactor < 0) {
        node.left = this.rotateLeft(node.left)
      }
      return this.rotateRight(node)
    }
    if (node.balanceFactor < -1) {
      if (node.right !== null && node.right.balanceFactor > 0) {
        node.right = this.rotateRight(node.right)
      }
      return this.rotateLeft(node)
    }
    return node
  }

  public rotateLeft(node: AVLTreeNode | null): AVLTreeNode | null {
    if (node === null)
      return null
    let right = node.right!
    node.right = right.left
    right.left = node
    right.balanceFactor = node.balanceFactor
    node.balanceFactor = 0
    return right
  }
  public rotateRight(node: AVLTreeNode | null): AVLTreeNode | null {
    if (node === null)
      return null
    let left = node.left!
    node.left = left.right
    left.right = node
    left.balanceFactor = node.balanceFactor
    node.balanceFactor = 0
    return left
  }
}
