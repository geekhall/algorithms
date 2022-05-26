import { TreeNode } from "./TreeNode";

export class BST extends TreeNode {
  static search(root: BST | null, value: number): BST | null {
    if (root === null || root.val === value) {
      return root
    }

    if (root.val < value)
      return this.search(root.right, value)
    return this.search(root.left, value)
  }
}
