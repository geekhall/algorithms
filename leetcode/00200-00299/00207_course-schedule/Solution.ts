/**
 * ID:    00207
 * Title: Course Schedule
 * Difficulty: Medium
 * Description: There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [a i, b i ] indicates that you must take course b i first if you want to take course a i.
 *
 * For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
 *
 * Return true if you can finish all courses. Otherwise, return false.
 *
 * Example 1:
 *
 * Input: numCourses = 2, prerequisites = [[1,0]] Output: true Explanation: There are a total of 2 courses to take. To take course 1 you should have finished course 0. So it is possible.
 *
 * Example 2:
 *
 * Input: numCourses = 2, prerequisites = [[1,0],[0,1]] Output: false Explanation: There are a total of 2 courses to take. To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.
 *
 * Constraints:
 *
 * 1 <= numCourses <= 2000
 * 0 <= prerequisites.length <= 5000
 * prerequisites[i].length == 2
 * 0 <= a i, b i < numCourses
 * All the pairs prerequisites[i] are unique.
 */

function canFinish(numCourses: number, prerequisites: number[][]): boolean {

  // i -> j
  let matrix = Array.from({ length: numCourses }, () => Array.from({ length: numCourses }, () => 0))
  let in_degree = Array.from({ length: numCourses }, () => 0)

  for (let i = 0; i < prerequisites.length; i++) {
    let ready = prerequisites[i][0];
    let pre = prerequisites[i][1];
    if (matrix[pre][ready] == 0)
      in_degree[ready]++; //duplicate case
    matrix[pre][ready] = 1;
  }

  let count = 0;
  let queue = new Array<number>()
  for (let i = 0; i < in_degree.length; i++) {
    if (in_degree[i] == 0) queue.push(i);
  }
  while (queue.length > 0) {
    let course = queue.shift()!
    count++;
    for (let i = 0; i < matrix.length; i++) {
      if (matrix[course][i] != 0) {
        if (--in_degree[i] == 0)
          queue.push(i);
      }
    }
  }
  return count === numCourses;
};

function test_00207() {
  console.log(canFinish(2, [[1, 0]]));
  console.log(canFinish(2, [[1, 0], [0, 1]]));
  console.log(canFinish(3, [[1, 0], [2, 1]]));
}

test_00207()
