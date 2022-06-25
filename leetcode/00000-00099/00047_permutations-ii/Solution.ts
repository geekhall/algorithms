/**
 * ID:    00047
 * Title: Permutations II
 * Difficulty: Medium
 * Description: Given a collection of numbers, nums, that might contain duplicates, return all possible unique permutations in any order.
 *
 * Example 1:
 *
 * Input: nums = [1,1,2] Output: [[1,1,2], [1,2,1], [2,1,1]]
 *
 * Example 2:
 *
 * Input: nums = [1,2,3] Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 *
 * Constraints:
 *
 * 1 <= nums.length <= 8
 * -10 <= nums[i] <= 10
 */
function permuteUnique(nums: number[]): number[][] {
  let res = new Array()
  let s = new Set()
  let visited = new Array(nums.length).fill(false)
  let temp = new Array()
  const helper = (temp: number[]) => {
    if (temp.length === nums.length && !s.has(temp.join(','))) {
      res.push(temp.slice())
      s.add(temp.slice().join(','))
    }
    for (let i = 0; i < nums.length; i++) {
      if (visited[i]) {
        continue
      }
      visited[i] = true
      temp.push(nums[i])
      helper(temp)
      temp.pop()
      visited[i] = false
    }
  }
  helper(temp)

  return res
};

function test_00047() {
  let nums = [1, 1, 2]
  console.log(permuteUnique(nums));
  nums = [1, 2, 3]
  console.log(permuteUnique(nums));
}

test_00047()
