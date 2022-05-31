/**
 * ID:    01217
 * Title: Minimum Cost to Move Chips to The Same Position
 * Difficulty: Easy
 * Description: We have n chips, where the position of the i th chip is position[i].
 *
 * We need to move all the chips to the same position. In one step, we can change the position of the i th chip from position[i] to:
 *
 * position[i] + 2 or position[i] - 2 with cost = 0.
 * position[i] + 1 or position[i] - 1 with cost = 1.
 *
 * Return the minimum cost needed to move all the chips to the same position.
 *
 * Example 1:
 *
 * Input: position = [1,2,3] Output: 1 Explanation: First step: Move the chip at position 3 to position 1 with cost = 0. Second step: Move the chip at position 2 to position 1 with cost = 1. Total cost is 1.
 *
 * Example 2:
 *
 * Input: position = [2,2,2,3,3] Output: 2 Explanation: We can move the two chips at position 3 to position 2. Each move has cost = 1. The total cost = 2.
 *
 * Example 3:
 *
 * Input: position = [1,1000000000] Output: 1
 *
 * Constraints:
 *
 * 1 <= position.length <= 100
 * 1 <= position[i] <= 10^9
 */
function minCostToMoveChips(position: number[]): number {
  let odd = 0
  for (let i = 0; i < position.length; i++) {
    if (position[i] % 2 === 1) {
      odd++
    }
  }
  let even = position.length - odd
  return Math.min(odd, even)
};

function test_01217() {
  let position = [1, 2, 3]
  console.log(minCostToMoveChips(position));
  position = [2, 2, 2, 3, 3]
  console.log(minCostToMoveChips(position));
  position = [1, 1000000000]
  console.log(minCostToMoveChips(position));
}

test_01217()
