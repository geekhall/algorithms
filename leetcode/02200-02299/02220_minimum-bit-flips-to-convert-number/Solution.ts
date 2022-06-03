/**
 * ID:    02220
 * Title: Minimum Bit Flips to Convert Number
 * Difficulty: Easy
 * Description: A bit flip of a number x is choosing a bit in the binary representation of x and flipping it from either 0 to 1 or 1 to 0.
 *
 * For example, for x = 7, the binary representation is 111 and we may choose any bit (including any leading zeros not shown) and flip it. We can flip the first bit from the right to get 110, flip the second bit from the right to get 101, flip the fifth bit from the right (a leading zero) to get 10111, etc.
 *
 * Given two integers start and goal, return the minimum number of bit flips to convert start to goal.
 *
 * Example 1:
 *
 * Input: start = 10, goal = 7 Output: 3 Explanation: The binary representation of 10 and 7 are 1010 and 0111 respectively. We can convert 10 to 7 in 3 steps: - Flip the first bit from the right: 101 0 -> 101 1. - Flip the third bit from the right: 1 0 11 -> 1 1 11. - Flip the fourth bit from the right: 1 111 -> 0 111. It can be shown we cannot convert 10 to 7 in less than 3 steps. Hence, we return 3.
 *
 * Example 2:
 *
 * Input: start = 3, goal = 4 Output: 3 Explanation: The binary representation of 3 and 4 are 011 and 100 respectively. We can convert 3 to 4 in 3 steps: - Flip the first bit from the right: 01 1 -> 01 0. - Flip the second bit from the right: 0 1 0 -> 0 0 0. - Flip the third bit from the right: 0 00 -> 1 00. It can be shown we cannot convert 3 to 4 in less than 3 steps. Hence, we return 3.
 *
 * Constraints:
 *
 * 0 <= start, goal <= 10 9
 */
function minBitFlips1(start: number, goal: number): number {
  let res = 0
  let start_bin_arr = start.toString(2).split('')
  let goal_bin_arr = goal.toString(2).split('')
  let start_bin_len_diff = goal_bin_arr.length - start_bin_arr.length
  if (start_bin_len_diff > 0) {
    for (let i = 0; i < start_bin_len_diff; i++) {
      start_bin_arr.unshift('0')
    }
  } else if (start_bin_len_diff < 0) {
    for (let i = 0; i < -start_bin_len_diff; i++) {
      goal_bin_arr.unshift('0')
    }
  }
  for (let i = 0; i < start_bin_arr.length; i++) {
    if (start_bin_arr[i] !== goal_bin_arr[i]) {
      res++
    }
  }
  return res
};

function minBitFlips(start: number, goal: number): number {
  return (start ^ goal).toString(2).split('').filter(x => x === '1').length
}

function test_02220() {
  let start = 10
  let goal = 7
  console.log(minBitFlips(start, goal))
  start = 3
  goal = 4
  console.log(minBitFlips(start, goal))
}

test_02220()
