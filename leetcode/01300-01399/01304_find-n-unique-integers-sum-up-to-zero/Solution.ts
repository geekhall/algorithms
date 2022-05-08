/**
 * ID:    01304
 * Title: Find N Unique Integers Sum up to Zero
 * Difficulty: Easy
 * Description: Given an integer n, return any array containing n unique integers such that they add up to 0.
 *
 * Example 1:
 *
 * Input: n = 5 Output: [-7,-1,1,3,4] Explanation: These arrays also are accepted [-5,-1,1,2,3] , [-3,-1,2,-2,4].
 *
 * Example 2:
 *
 * Input: n = 3 Output: [-1,0,1]
 *
 * Example 3:
 *
 * Input: n = 1 Output: [0]
 *
 * Constraints:
 *
 * 1 <= n <= 1000
 */
function sumZero(n: number): number[] {
  let res: number[] = []
  if (n === 0)
    return []
  if (n % 2) // odd
    res = [...Array.from({ length: Math.floor(n / 2) }, (_, i) => -i - 1), ...Array.from({ length: Math.floor(n / 2) }, (_, i) => i + 1), 0]
  else // even
    res = [...Array.from({ length: Math.floor(n / 2) }, (_, i) => -i - 1), ...Array.from({ length: Math.floor(n / 2) }, (_, i) => i + 1)]
  return res
};

function test_01304() {
  console.log(sumZero(3));
  console.log(Array.from({ length: Math.floor(3) }, (_, i) => -(i + 1)));

}

test_01304()
