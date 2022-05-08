/**
 * ID:    01938
 * Title: Maximum Genetic Difference Query
 * Difficulty: Hard
 * Description: There is a rooted tree consisting of n nodes numbered 0 to n - 1. Each node's number denotes its unique genetic value (i.e. the genetic value of node x is x). The genetic difference between two genetic values is defined as the bitwise- XOR of their values. You are given the integer array parents, where parents[i] is the parent for node i. If node x is the root of the tree, then parents[x] == -1.
 * 
 * You are also given the array queries where queries[i] = [node i, val i ]. For each query i, find the maximum genetic difference between val i and p i, where p i is the genetic value of any node that is on the path between node i and the root (including node i and the root). More formally, you want to maximize val i XOR p i.
 * 
 * Return an array ans where ans[i] is the answer to the i th query.
 * 
 * Example 1:
 * 
 * Input: parents = [-1,0,1,1], queries = [[0,2],[3,2],[2,5]] Output: [2,3,7] Explanation: The queries are processed as follows: - [0,2]: The node with the maximum genetic difference is 0, with a difference of 2 XOR 0 = 2. - [3,2]: The node with the maximum genetic difference is 1, with a difference of 2 XOR 1 = 3. - [2,5]: The node with the maximum genetic difference is 2, with a difference of 5 XOR 2 = 7.
 * 
 * Example 2:
 * 
 * Input: parents = [3,7,-1,2,0,7,0,2], queries = [[4,6],[1,15],[0,5]] Output: [6,14,7] Explanation: The queries are processed as follows: - [4,6]: The node with the maximum genetic difference is 0, with a difference of 6 XOR 0 = 6. - [1,15]: The node with the maximum genetic difference is 1, with a difference of 15 XOR 1 = 14. - [0,5]: The node with the maximum genetic difference is 2, with a difference of 5 XOR 2 = 7.
 * 
 * Constraints:
 * 
 * 2 <= parents.length <= 10 5
 * 0 <= parents[i] <= parents.length - 1 for every node i that is not the root.
 * parents[root] == -1
 * 1 <= queries.length <= 3 * 10 4
 * 0 <= node i <= parents.length - 1
 * 0 <= val i <= 2 * 10 5
 */
function solution() {
  
}

function test_01938() {
  
}

test_01938()
