/**
 * ID:    00429
 * Title: N-ary Tree Level Order Traversal
 * Difficulty: Medium
 * Description: Given an n-ary tree, return the level order traversal of its nodes' values.
 *
 * Nary-Tree input serialization is represented in their level order traversal, each group of children is separated by the null value (See examples).
 *
 * Example 1:
 *
 * Input: root = [1,null,3,2,4,null,5,6] Output: [[1],[3,2,4],[5,6]]
 *
 * Example 2:
 *
 * Input: root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14] Output: [[1],[2,3,4,5],[6,7,8,9,10],[11,12,13],[14]]
 *
 * Constraints:
 *
 * The height of the n-ary tree is less than or equal to 1000
 * The total number of nodes is between [0, 10 4 ]
 */
import { Node } from "../../utils/TreeNode"
function levelOrder(root: Node | null): number[][] {
  if (!root)
    return []

  let res: number[][] = new Array()
  const bfs = (node: Node | null) => {
    let queue = new Array()
    queue.push(node)

    while (queue.length > 0) {
      let size = queue.length
      let level: number[] = new Array()
      for (let i = 0; i < size; i++) {
        let cur = queue.shift()
        level.push(cur.val)
        if (cur.children)
          queue.push(...cur.children)
      }
      res.push(level)
    }
  }
  bfs(root)
  return res
};

function test_00429() {
  // let root = [1, null, 3, 2, 4, null, 5, 6]
  let root = new Node(1)
  let n2 = new Node(3)
  let n3 = new Node(2)
  let n4 = new Node(4)
  let n5 = new Node(5)
  let n6 = new Node(6)
  n2.children = [n5, n6]
  root.children = [n2, n3, n4]
  console.log(levelOrder(root));
}

test_00429()
