/**
 * ID:    00441
 * Title: Arranging Coins
 * Difficulty: Easy
 * Description: You have n coins and you want to build a staircase with these coins. The staircase consists of k rows where the i th row has exactly i coins. The last row of the staircase may be incomplete.
 *
 * Given the integer n, return the number of complete rows of the staircase you will build.
 *
 * Example 1:
 *
 * Input: n = 5 Output: 2 Explanation: Because the 3 rd row is incomplete, we return 2.
 *
 * Example 2:
 *
 * Input: n = 8 Output: 3 Explanation: Because the 4 th row is incomplete, we return 3.
 *
 * Constraints:
 *
 * 1 <= n <= 2 31 - 1
 */
function arrangeCoins(n: number): number {
  let i = 1
  for (; i <= n; i++) {
    n = n - i
  }
  return i - 1
};

function test_00441() {
  console.log(arrangeCoins(1));
  console.log(arrangeCoins(5));
  console.log(arrangeCoins(8));
  console.log(arrangeCoins(9));
  console.log(arrangeCoins(10));

}

test_00441()
