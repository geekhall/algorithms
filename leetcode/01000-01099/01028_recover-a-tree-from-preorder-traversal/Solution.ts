/**
 * ID:    01028
 * Title: Recover a Tree From Preorder Traversal
 * Difficulty: Hard
 * Description: We run a preorder depth-first search (DFS) on the root of a binary tree.
 *
 * At each node in this traversal, we output D dashes (where D is the depth of this node), then we output the value of this node. If the depth of a node is D, the depth of its immediate child is D + 1. The depth of the root node is 0.
 *
 * If a node has only one child, that child is guaranteed to be the left child.
 *
 * Given the output traversal of this traversal, recover the tree and return its root.
 *
 * Example 1:
 *
 * Input: traversal = "1-2--3--4-5--6--7" Output: [1,2,5,3,4,6,7]
 *
 * Example 2:
 *
 * Input: traversal = "1-2--3---4-5--6---7" Output: [1,2,5,3,null,6,null,4,null,7]
 *
 * Example 3:
 *
 * Input: traversal = "1-401--349---90--88" Output: [1,401,null,349,88,90]
 *
 * Constraints:
 *
 * The number of nodes in the original tree is in the range [1, 1000].
 * 1 <= Node.val <= 10 9
 */
import { TreeNode } from "../../utils/TreeNode";
function recoverFromPreorder(traversal: string): TreeNode | null {
  let root = new TreeNode(parseInt(traversal.split("-")[0]))
  interface Info {
    node: TreeNode
    depth: number
    parent: TreeNode | null
  }
  let stack: Info[] = [{ node: root, depth: 0, parent: null }]
  let cur: TreeNode | null = null
  let pre: TreeNode | null = null
  let pre_depth = 0
  let cur_depth = 0
  let pre_val = 0
  let cur_val = 0
  let temp_depth = 0
  let i = 0
  while (i < traversal.length) {
    if (traversal[i] === "-") {
      i++
      temp_depth++
      continue
    }

    pre_val = cur_val
    cur_val = parseInt((traversal.substring(i)))
    pre = cur
    cur = new TreeNode(cur_val)
    cur_depth = temp_depth
    if (pre_depth < cur_depth) {
      stack[stack.length - 1].node.left = cur
    } else if (pre_depth > cur_depth) {
      while (stack.length > 0 && stack[stack.length - 1].depth >= cur_depth) {
        stack.pop()
      }
      stack[stack.length - 1].node.right = cur
    }
    stack.push({ node: new TreeNode(cur_val), depth: temp_depth, parent: pre })
    temp_depth = 0
  }


  return root
};

function test_01028() {
  // let traversal = "1-2--3--4-5--6--7"
  // TreeNode.print(recoverFromPreorder(traversal))
  // traversal = "1-2--3---4-5--6---7"
  // TreeNode.print(recoverFromPreorder(traversal))
  // traversal = "1-401--349---90--88"
  // TreeNode.print(recoverFromPreorder(traversal))

  let traversal = "1-401--349---90--88"
  console.log(traversal.substring(2));
  console.log(parseInt(traversal.substring(2)));

}

test_01028()
