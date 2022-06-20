/**
 * ID:    00365
 * Title: Water and Jug Problem
 * Difficulty: Medium
 * Description: You are given two jugs with capacities jug1Capacity and jug2Capacity liters. There is an infinite amount of water supply available. Determine whether it is possible to measure exactly targetCapacity liters using these two jugs.
 *
 * If targetCapacity liters of water are measurable, you must have targetCapacity liters of water contained within one or both buckets by the end.
 *
 * Operations allowed:
 *
 * Fill any of the jugs with water.
 * Empty any of the jugs.
 * Pour water from one jug into another till the other jug is completely full, or the first jug itself is empty.
 *
 * Example 1:
 *
 * Input: jug1Capacity = 3, jug2Capacity = 5, targetCapacity = 4 Output: true Explanation: The famous Die Hard example
 *
 * Example 2:
 *
 * Input: jug1Capacity = 2, jug2Capacity = 6, targetCapacity = 5 Output: false
 *
 * Example 3:
 *
 * Input: jug1Capacity = 1, jug2Capacity = 2, targetCapacity = 3 Output: true
 *
 * Constraints:
 *
 * 1 <= jug1Capacity, jug2Capacity, targetCapacity <= 10 6
 */
function canMeasureWater(jug1Capacity: number, jug2Capacity: number, targetCapacity: number): boolean {
  let res = false

  const gcd = (a: number, b: number) => {
    while (b !== 0) {
      let temp = b
      b = a % b
      a = temp
    }
    return a
  }
  if (jug1Capacity + jug2Capacity < targetCapacity) return false
  if (jug1Capacity === targetCapacity || jug2Capacity === targetCapacity || jug1Capacity + jug2Capacity === targetCapacity)
    return true
  return targetCapacity % gcd(jug1Capacity, jug2Capacity) === 0
};

function test_00365() {
  let jug1Capacity = 3, jug2Capacity = 5, targetCapacity = 4
  console.log(canMeasureWater(jug1Capacity, jug2Capacity, targetCapacity))
  jug1Capacity = 2, jug2Capacity = 6, targetCapacity = 5
  console.log(canMeasureWater(jug1Capacity, jug2Capacity, targetCapacity))
  jug1Capacity = 1, jug2Capacity = 2, targetCapacity = 3
  console.log(canMeasureWater(jug1Capacity, jug2Capacity, targetCapacity))


}

test_00365()
