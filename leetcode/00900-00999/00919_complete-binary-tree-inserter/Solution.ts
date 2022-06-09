/**
 * ID:    00919
 * Title: Complete Binary Tree Inserter
 * Difficulty: Medium
 * Description: A complete binary tree is a binary tree in which every level, except possibly the last, is completely filled, and all nodes are as far left as possible.
 *
 * Design an algorithm to insert a new node to a complete binary tree keeping it complete after the insertion.
 *
 * Implement the CBTInserter class:
 *
 * CBTInserter(TreeNode root) Initializes the data structure with the root of the complete binary tree.
 * int insert(int v) Inserts a TreeNode into the tree with value Node.val == val so that the tree remains complete, and returns the value of the parent of the inserted TreeNode.
 * TreeNode get_root() Returns the root node of the tree.
 *
 * Example 1:
 *
 * Input ["CBTInserter", "insert", "insert", "get_root"] [[[1, 2]], [3], [4], []] Output [null, 1, 2, [1, 2, 3, 4]] Explanation CBTInserter cBTInserter = new CBTInserter([1, 2]); cBTInserter.insert(3); // return 1 cBTInserter.insert(4); // return 2 cBTInserter.get_root(); // return [1, 2, 3, 4]
 *
 * Constraints:
 *
 * The number of nodes in the tree will be in the range [1, 1000].
 * 0 <= Node.val <= 5000
 * root is a complete binary tree.
 * 0 <= val <= 5000
 * At most 10 4 calls will be made to insert and get_root.
 */
import { TreeNode } from "../../utils/TreeNode"

class CBTInserter {
  arr: Array<number>
  constructor(root: TreeNode | null) {
    this.arr = new Array()
    let queue = new Array()
    queue.push(root)
    while (queue.length > 0) {
      let cur = queue.shift()
      this.arr.push(cur.val)
      if (cur.left)
        queue.push(cur.left)
      if (cur.right)
        queue.push(cur.right)
    }
  }

  insert(val: number): number {
    this.arr.push(val)
    if (this.arr.length === 1) {
      return -1
    }
    return this.arr[Math.floor((this.arr.length) / 2) - 1]
  }

  get_root(): TreeNode | null {
    if (!this.arr || this.arr.length === 0)
      return null
    let treeNodeQueue = new Array<TreeNode>()
    let numberQueue = new Array<number>()
    for (let i = 1; i < this.arr.length; i++) {
      numberQueue.push(this.arr[i])
    }
    let root = new TreeNode(this.arr[0])
    treeNodeQueue.push(root)
    while (numberQueue.length > 0) {
      let leftValue = numberQueue.length > 0 ? numberQueue.shift() : null
      let rightValue = numberQueue.length > 0 ? numberQueue.shift() : null
      let currentNode = treeNodeQueue.shift()
      if (leftValue !== null) {
        let leftNode = new TreeNode(leftValue, null, null)
        currentNode!.left = leftNode
        treeNodeQueue.push(leftNode)
      }
      if (rightValue !== null) {
        let rightNode = new TreeNode(rightValue, null, null)
        currentNode!.right = rightNode
        treeNodeQueue.push(rightNode)
      }
    }
    return root
  }
}

function test_00919() {
  let cBTInserter = new CBTInserter(TreeNode.create([1, 2]));
  console.log(cBTInserter.insert(3)); // return 1
  console.log(cBTInserter.insert(4));  // return 2
  TreeNode.print(cBTInserter.get_root()); // return [1, 2, 3, 4]
}

test_00919()
