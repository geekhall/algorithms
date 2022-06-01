/**
 * ID:    01523
 * Title: Count Odd Numbers in an Interval Range
 * Difficulty: Easy
 * Description: Given two non-negative integers low and high. Return the count of odd numbers between low and high (inclusive).
 *
 * Example 1:
 *
 * Input: low = 3, high = 7 Output: 3 Explanation: The odd numbers between 3 and 7 are [3,5,7].
 *
 * Example 2:
 *
 * Input: low = 8, high = 10 Output: 1 Explanation: The odd numbers between 8 and 10 are [9].
 *
 * Constraints:
 *
 * 0 <= low <= high <= 10^9
 */
// too slow
function countOdds1(low: number, high: number): number {
  let odd = 0
  for (let i = low; i <= high; i++) {
    if (i % 2 === 1)
      odd++
  }
  return odd
};

function countOdds(low: number, high: number): number {
  return (high - low + high % 2 + low % 2) / 2
};

function test_01523() {
  console.log(countOdds(3, 7));
  console.log(countOdds(8, 10));
}

test_01523()
