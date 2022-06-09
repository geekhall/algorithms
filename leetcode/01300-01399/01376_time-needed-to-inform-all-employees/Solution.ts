/**
 * ID:    01376
 * Title: Time Needed to Inform All Employees
 * Difficulty: Medium
 * Description: A company has n employees with a unique ID for each employee from 0 to n - 1. The head of the company is the one with headID.
 *
 * Each employee has one direct manager given in the manager array where manager[i] is the direct manager of the i-th employee, manager[headID] = -1. Also, it is guaranteed that the subordination relationships have a tree structure.
 *
 * The head of the company wants to inform all the company employees of an urgent piece of news. He will inform his direct subordinates, and they will inform their subordinates, and so on until all employees know about the urgent news.
 *
 * The i-th employee needs informTime[i] minutes to inform all of his direct subordinates (i.e., After informTime[i] minutes, all his direct subordinates can start spreading the news).
 *
 * Return the number of minutes needed to inform all the employees about the urgent news.
 *
 * Example 1:
 *
 * Input: n = 1, headID = 0, manager = [-1], informTime = [0] Output: 0 Explanation: The head of the company is the only employee in the company.
 *
 * Example 2:
 *
 * Input: n = 6, headID = 2, manager = [2,2,-1,2,2,2], informTime = [0,0,1,0,0,0] Output: 1 Explanation: The head of the company with id = 2 is the direct manager of all the employees in the company and needs 1 minute to inform them all. The tree structure of the employees in the company is shown.
 *
 * Constraints:
 *
 * 1 <= n <= 10 5
 * 0 <= headID < n
 * manager.length == n
 * 0 <= manager[i] < n
 * manager[headID] == -1
 * informTime.length == n
 * 0 <= informTime[i] <= 1000
 * informTime[i] == 0 if employee i has no subordinates.
 * It is guaranteed that all the employees can be informed.
 */
function numOfMinutes(n: number, headID: number, manager: number[], informTime: number[]): number {
  interface Node {
    val: number
    children: Node[]
  }

  const graph: Node[] = []
  for (let i = 0; i < n; i++) {
    graph[i] = { val: informTime[i], children: [] }
  }

  for (let i = 0; i < n; i++) {
    if (manager[i] !== -1) {
      graph[manager[i]].children.push(graph[i])
    }
  }
  let max_time = 0
  const dfs = (node: Node, current_time: number) => {
    // console.log(`dfs ${node.val} ${current_time}`)
    if (node.children.length === 0) {
      max_time = Math.max(max_time, current_time)
    }
    for (const child of node.children) {
      dfs(child, current_time + child.val)
    }
  }
  dfs(graph[headID], informTime[headID])

  return max_time
};

function test_01376() {
  let n = 1, headID = 0, manager = [-1], informTime = [0]
  console.log(numOfMinutes(n, headID, manager, informTime))
  n = 6, headID = 2, manager = [2, 2, -1, 2, 2, 2], informTime = [0, 0, 1, 0, 0, 0]
  console.log(numOfMinutes(n, headID, manager, informTime))
  n = 15, headID = 0, manager = [-1, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6], informTime = [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0]
  console.log(numOfMinutes(n, headID, manager, informTime))
}

test_01376()
