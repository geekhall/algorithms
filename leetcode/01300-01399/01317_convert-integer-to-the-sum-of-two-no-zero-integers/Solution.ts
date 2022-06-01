/**
 * ID:    01317
 * Title: Convert Integer to the Sum of Two No-Zero Integers
 * Difficulty: Easy
 * Description: No-Zero integer is a positive integer that does not contain any 0 in its decimal representation.
 *
 * Given an integer n, return a list of two integers [A, B] where:
 *
 * A and B are No-Zero integers.
 * A + B = n
 *
 * The test cases are generated so that there is at least one valid solution. If there are many valid solutions you can return any of them.
 *
 * Example 1:
 *
 * Input: n = 2 Output: [1,1] Explanation: A = 1, B = 1. A + B = n and both A and B do not contain any 0 in their decimal representation.
 *
 * Example 2:
 *
 * Input: n = 11 Output: [2,9]
 *
 * Constraints:
 *
 * 2 <= n <= 10 4
 */
function getNoZeroIntegers(n: number): number[] {
  let res: number[] = new Array()
  for (let i = 1; i < n; i++) {
    if (String(i).indexOf('0') === -1 && String(n - i).indexOf('0') === -1) {
      res = [i, n - i]
      break
    }
  }
  return res
};

function test_01317() {
  let n = 2
  console.log(getNoZeroIntegers(n));
  n = 11
  console.log(getNoZeroIntegers(n));
}

test_01317()
