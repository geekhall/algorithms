/**
 * ID:    01014
 * Title: Best Sightseeing Pair
 * Difficulty: Medium
 * Description: You are given an integer array values where values[i] represents the value of the i th sightseeing spot. Two sightseeing spots i and j have a distance j - i between them.
 *
 * The score of a pair (i < j) of sightseeing spots is values[i] + values[j] + i - j: the sum of the values of the sightseeing spots, minus the distance between them.
 *
 * Return the maximum score of a pair of sightseeing spots.
 *
 * Example 1:
 *
 * Input: values = [8,1,5,2,6] Output: 11 Explanation: i = 0, j = 2, values[i] + values[j] + i - j = 8 + 5 + 0 - 2 = 11
 *
 * Example 2:
 *
 * Input: values = [1,2] Output: 2
 *
 * Constraints:
 *
 * 2 <= values.length <= 5 * 10 4
 * 1 <= values[i] <= 1000
 */
function maxScoreSightseeingPair(values: number[]): number {
  let max = 0
  let prev = 0
  for (let i = 0; i < values.length; i++) {
    max = Math.max(max, prev + values[i] - i)
    prev = Math.max(prev, values[i] + i)
  }
  return max
};

function test_01014() {
  let values = [8, 1, 5, 2, 6]
  console.log(maxScoreSightseeingPair(values))
  values = [1, 2]
  console.log(maxScoreSightseeingPair(values))

}

test_01014()
