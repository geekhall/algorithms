/**
 * ID:    01925
 * Title: Count Square Sum Triples
 * Difficulty: Easy
 * Description: A square triple (a,b,c) is a triple where a, b, and c are integers and a 2 + b 2 = c 2.
 *
 * Given an integer n, return the number of square triples such that 1 <= a, b, c <= n.
 *
 * Example 1:
 *
 * Input: n = 5 Output: 2 Explanation: The square triples are (3,4,5) and (4,3,5).
 *
 * Example 2:
 *
 * Input: n = 10 Output: 4 Explanation: The square triples are (3,4,5), (4,3,5), (6,8,10), and (8,6,10).
 *
 * Constraints:
 *
 * 1 <= n <= 250
 */
function countTriples(n: number): number {
  if (n < 5)
    return 0
  let count = 0
  for (let i = 1; i <= n; i++) {
    for (let j = i; j <= n; j++) {
      for (let k = j; k <= n; k++) {
        if (i * i + j * j === k * k) {
          count++
        }
      }
    }
  }
  return count * 2
};

function test_01925() {
  let n = 5
  console.log(countTriples(n))
  n = 10
  console.log(countTriples(n))
}

test_01925()
