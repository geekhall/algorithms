/**
 * ID:    01530
 * Title: Number of Good Leaf Nodes Pairs
 * Difficulty: Medium
 * Description: You are given the root of a binary tree and an integer distance. A pair of two different leaf nodes of a binary tree is said to be good if the length of the shortest path between them is less than or equal to distance.
 *
 * Return the number of good leaf node pairs in the tree.
 *
 * Example 1:
 *
 * Input: root = [1,2,3,null,4], distance = 3 Output: 1 Explanation: The leaf nodes of the tree are 3 and 4 and the length of the shortest path between them is 3. This is the only good pair.
 *
 * Example 2:
 *
 * Input: root = [1,2,3,4,5,6,7], distance = 3 Output: 2 Explanation: The good pairs are [4,5] and [6,7] with shortest path = 2. The pair [4,6] is not good because the length of ther shortest path between them is 4.
 *
 * Example 3:
 *
 * Input: root = [7,1,4,6,null,5,3,null,null,null,null,null,2], distance = 3 Output: 1 Explanation: The only good pair is [2,5].
 *
 * Constraints:
 *
 * The number of nodes in the tree is in the range [1, 2 10 ].
 * 1 <= Node.val <= 100
 * 1 <= distance <= 10
 */
import { TreeNode } from "../../utils/TreeNode";
function countPairs1(root: TreeNode | null, distance: number): number {
  if (root === null) {
    return 0
  }
  let count = 0
  const dfs = (node: TreeNode | null, distance: number): number[] => {
    if (!node)
      return new Array(distance + 1).fill(0)
    if (node.left === null && node.right === null) {
      let res = new Array(distance + 1).fill(0)
      res[1]++
      return res
    }
    let left = dfs(node.left, distance)
    let right = dfs(node.right, distance)
    for (let l = 1; l < left.length; l++) {
      for (let r = distance - 1; r >= 0; r--) {
        if (l + r <= distance)
          count += left[l] * right[r];
      }
    }
    let res = new Array(distance + 1).fill(0);
    //shift by 1
    for (let i = res.length - 2; i >= 1; i--) {
      res[i + 1] = left[i] + right[i];
    }

    return res;
  }

  dfs(root, distance)
  return count
}
function countPairs(root: TreeNode | null, distance: number): number {
  let count = 0
  let dfs = (root: TreeNode | null, m = new Map()) => {
    if (!root)
      return m;
    let L = dfs(root.left);
    let R = dfs(root.right);
    if (!root.left && !root.right)
      m.set(1, 1); // add leaf node to map with distance 1 and count 1
    for (let [dist1, cnt1] of L.entries())
      for (let [dist2, cnt2] of R.entries())
        if (dist1 + dist2 <= distance) // count "good" leaf node pairs
          count += (cnt1 * cnt2);
    // propagate coalesced child node maps up the recursive stack
    // (dist + 1 because parent is dist + 1 from child)
    for (let [dist, cnt] of L.entries()) m.set(dist + 1, cnt + (m.get(dist + 1) || 0));
    for (let [dist, cnt] of R.entries()) m.set(dist + 1, cnt + (m.get(dist + 1) || 0));
    return m;
  };
  dfs(root);
  return count;
}
function test_01530() {
  let root = TreeNode.create([1, 2, 3, null, 4]), distance = 3
  console.log(countPairs(root, distance))
  root = TreeNode.create([1, 2, 3, 4, 5, 6, 7]), distance = 3
  console.log(countPairs(root, distance))
  root = TreeNode.create([7, 1, 4, 6, null, 5, 3, null, null, null, null, null, 2]), distance = 3
  console.log(countPairs(root, distance))

}

test_01530()
