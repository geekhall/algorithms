/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}

function averageOfSubtree(root: TreeNode | null): number {
  return 0
};

function getAverageOfNodePreOrder(root: TreeNode | null): number {
  if (root === null)
    return 0
  let res = 0
  let stack: TreeNode[] = []
  stack.push(root);
  while (stack.length > 0) {
    let node = stack.pop();
    console.log(node?.val);

    if (node!.right !== null) {
      stack.push(node!.right);
    }
    if (node!.left != null) {
      stack.push(node!.left);
    }
  }

  return res
}

function getAverageOfNodeAfterOrder(head: TreeNode | null): number {
  let res = 0
  if (head == null) {
    return 0;
  }
  let cur = head;
  let stack: TreeNode[] = new Array()
  let ansStack = []
  stack.push(head)
  while (stack.length > 0) {
    let peek = stack[stack.length - 1];
    if (peek.left !== null && peek.left !== cur && peek.right !== cur) {
      stack.push(peek.left);
    } else if (peek.right !== null && peek.right !== cur) {
      stack.push(peek.right);
    } else {
      console.log(stack.pop()!.val + " ");
      ansStack.push([stack.pop(),])
      cur = peek;
    }
  }
  return res
}

function testGetAverageOfNode() {
  let root = new TreeNode(4, null, null)
  root.left = new TreeNode(8, new TreeNode(0, null, null), new TreeNode(1, null, null))
  root.right = new TreeNode(5, null, new TreeNode(6, null, null))

  console.log(getAverageOfNodePreOrder(root));
  console.log('====');

  console.log(getAverageOfNodeAfterOrder(root));

}
testGetAverageOfNode()
