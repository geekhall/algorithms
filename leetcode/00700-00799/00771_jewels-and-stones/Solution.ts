/**
 * ID:    00771
 * Title: Jewels and Stones
 * Difficulty: Easy
 * Description: You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.
 *
 * Letters are case sensitive, so "a" is considered a different type of stone from "A".
 *
 * Example 1:
 *
 * Input: jewels = "aA", stones = "aAAbbbb" Output: 3
 *
 * Example 2:
 *
 * Input: jewels = "z", stones = "ZZ" Output: 0
 *
 * Constraints:
 *
 * 1 <= jewels.length, stones.length <= 50
 * jewels and stones consist of only English letters.
 * All the characters of jewels are unique.
 */
function numJewelsInStones(jewels: string, stones: string): number {
  let res = 0
  let m = new Map()
  for (let i = 0; i < stones.length; i++) {
    if (m.get(stones[i]) === undefined) {
      m.set(stones[i], 1)
    } else {
      m.set(stones[i], m.get(stones[i]) + 1)
    }
  }
  for (let i = 0; i < jewels.length; i++) {
    if (m.get(jewels[i]) !== undefined)
      res += m.get(jewels[i])
  }
  return res
};

function test_00771() {
  let jewels = "aA", stones = "aAAbbbb"
  console.log(numJewelsInStones(jewels, stones));
  jewels = "z", stones = "ZZ"
  console.log(numJewelsInStones(jewels, stones));

}

test_00771()
