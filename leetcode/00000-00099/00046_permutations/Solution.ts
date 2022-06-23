/**
 * ID:    00046
 * Title: Permutations
 * Difficulty: Medium
 * Description: Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.
 *
 * Example 1:
 *
 * Input: nums = [1,2,3] Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 *
 * Example 2:
 *
 * Input: nums = [0,1] Output: [[0,1],[1,0]]
 *
 * Example 3:
 *
 * Input: nums = [1] Output: [[1]]
 *
 * Constraints:
 *
 * 1 <= nums.length <= 6
 * -10 <= nums[i] <= 10
 * All the integers of nums are unique.
 */
function permute(nums: number[]): number[][] {
  let res: number[][] = []
  let visited: boolean[] = new Array(nums.length).fill(false)
  const helper = (path: number[]) => {
    if (path.length === nums.length) {
      res.push(path)
      return
    }
    for (let i = 0; i < nums.length; i++) {
      if (visited[i]) continue
      visited[i] = true
      helper([...path, nums[i]])
      visited[i] = false
    }
  }
  helper([])
  return res
};

function test_00046() {
  let nums = [1, 2, 3]
  console.log(permute(nums)) // [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
  nums = [0, 1]
  console.log(permute(nums)) // [[0,1],[1,0]]
  nums = [1]
  console.log(permute(nums)) // [[1]]
}

test_00046()
