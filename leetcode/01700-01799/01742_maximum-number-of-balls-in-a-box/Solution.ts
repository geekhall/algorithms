/**
 * ID:    01742
 * Title: Maximum Number of Balls in a Box
 * Difficulty: Easy
 * Description: You are working in a ball factory where you have n balls numbered from lowLimit up to highLimit inclusive (i.e., n == highLimit - lowLimit + 1), and an infinite number of boxes numbered from 1 to infinity.
 *
 * Your job at this factory is to put each ball in the box with a number equal to the sum of digits of the ball's number. For example, the ball number 321 will be put in the box number 3 + 2 + 1 = 6 and the ball number 10 will be put in the box number 1 + 0 = 1.
 *
 * Given two integers lowLimit and highLimit, return the number of balls in the box with the most balls.
 *
 * Example 1:
 *
 * Input: lowLimit = 1, highLimit = 10 Output: 2 Explanation: Box Number: 1 2 3 4 5 6 7 8 9 10 11 ... Ball Count: 2 1 1 1 1 1 1 1 1 0 0 ... Box 1 has the most number of balls with 2 balls.
 *
 * Example 2:
 *
 * Input: lowLimit = 5, highLimit = 15 Output: 2 Explanation: Box Number: 1 2 3 4 5 6 7 8 9 10 11 ... Ball Count: 1 1 1 1 2 2 1 1 1 0 0 ... Boxes 5 and 6 have the most number of balls with 2 balls in each.
 *
 * Example 3:
 *
 * Input: lowLimit = 19, highLimit = 28 Output: 2 Explanation: Box Number: 1 2 3 4 5 6 7 8 9 10 11 12 ... Ball Count: 0 1 1 1 1 1 1 1 1 2 0 0 ... Box 10 has the most number of balls with 2 balls.
 *
 * Constraints:
 *
 * 1 <= lowLimit <= highLimit <= 10 5
 */
function countBalls(lowLimit: number, highLimit: number): number {
  // max size is 99999 contains 5*9 and index begins from 0 so plus 1 = 46
  const MAX_BUCKET_SIZE = 46
  let bucket = new Array(MAX_BUCKET_SIZE).fill(0)
  for (let i = lowLimit; i <= highLimit; i++) {
    let count = 0
    let num = i
    while (num > 0) {
      count += num % 10
      num = Math.floor(num / 10)
    }
    bucket[count]++
  }
  bucket.sort((a, b) => b - a)
  return bucket[0]
};

function test_01742() {
  console.log(countBalls(1, 10));
  console.log(countBalls(5, 15));
  console.log(countBalls(19, 28));
  console.log(countBalls(99999, 99999));
}

test_01742()
