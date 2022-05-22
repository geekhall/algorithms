/**
 * ID:    00633
 * Title: Sum of Square Numbers
 * Difficulty: Medium
 * Description: Given a non-negative integer c, decide whether there're two integers a and b such that a 2 + b 2 = c.
 *
 * Example 1:
 *
 * Input: c = 5 Output: true Explanation: 1 * 1 + 2 * 2 = 5
 *
 * Example 2:
 *
 * Input: c = 3 Output: false
 *
 * Constraints:
 *
 * 0 <= c <= 2 31 - 1
 */

function judgeSquareSum(c: number): boolean {
  if (c === 0)
    return true
  const isSquare = (n: number): boolean => {
    let t = Math.trunc(Math.sqrt(n))
    return t * t === n
  }
  for (let i = 0; i < c; i++) {
    let another = c - i * i
    if (isSquare(another))
      return true
    if (i * i > c)
      break
  }
  return false
};

function test_00633() {
  console.log(judgeSquareSum(5));
  console.log(judgeSquareSum(6));
  console.log(judgeSquareSum(12));
  console.log(judgeSquareSum(13));
  console.log(judgeSquareSum(16));
  console.log(judgeSquareSum(0));

}

test_00633()
