/**
 * ID:    01857
 * Title: Largest Color Value in a Directed Graph
 * Difficulty: Hard
 * Description: There is a directed graph of n colored nodes and m edges. The nodes are numbered from 0 to n - 1.
 * 
 * You are given a string colors where colors[i] is a lowercase English letter representing the color of the i th node in this graph (0-indexed). You are also given a 2D array edges where edges[j] = [a j, b j ] indicates that there is a directed edge from node a j to node b j.
 * 
 * A valid path in the graph is a sequence of nodes x 1 -> x 2 -> x 3 -> ... -> x k such that there is a directed edge from x i to x i+1 for every 1 <= i < k. The color value of the path is the number of nodes that are colored the most frequently occurring color along that path.
 * 
 * Return the largest color value of any valid path in the given graph, or -1 if the graph contains a cycle.
 * 
 * Example 1:
 * 
 * Input: colors = "abaca", edges = [[0,1],[0,2],[2,3],[3,4]] Output: 3 Explanation: The path 0 -> 2 -> 3 -> 4 contains 3 nodes that are colored "a" (red in the above image).
 * 
 * Example 2:
 * 
 * Input: colors = "a", edges = [[0,0]] Output: -1 Explanation: There is a cycle from 0 to 0.
 * 
 * Constraints:
 * 
 * n == colors.length
 * m == edges.length
 * 1 <= n <= 10 5
 * 0 <= m <= 10 5
 * colors consists of lowercase English letters.
 * 0 <= a j, b j < n
 */
function solution() {
  
}

function test_01857() {
  
}

test_01857()