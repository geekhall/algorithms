/**
 * ID:    00559
 * Title: Maximum Depth of N-ary Tree
 * Difficulty: Easy
 * Description: Given a n-ary tree, find its maximum depth.
 *
 * The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
 *
 * Nary-Tree input serialization is represented in their level order traversal, each group of children is separated by the null value (See examples).
 *
 * Example 1:
 *
 * Input: root = [1,null,3,2,4,null,5,6] Output: 3
 *
 * Example 2:
 *
 * Input: root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14] Output: 5
 *
 * Constraints:
 *
 * The total number of nodes is in the range [0, 10 4 ].
 * The depth of the n-ary tree is less than or equal to 1000.
 */
import { Node } from "../../utils/TreeNode"
function maxDepth(root: Node | null): number {
  if (root === null)
    return 0

  let depth = 0
  let max = 0
  const dfs = (node: Node | null, depth: number) => {
    if (!node)
      return
    if (depth > max)
      max = depth
    for (let i = 0; i < node.children.length; i++) {
      dfs(node.children[i], depth + 1)
    }
  }
  dfs(root, 1)
  return max
};

function test_00559() {
  let root = new Node(1)
  let n1 = new Node(3)
  n1.children = [new Node(5), new Node(6)]
  root.children = [n1, new Node(2), new Node(4)]
  console.log(maxDepth(root));

}

test_00559()
