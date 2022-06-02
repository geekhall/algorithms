/**
 * ID:    01716
 * Title: Calculate Money in Leetcode Bank
 * Difficulty: Easy
 * Description: Hercy wants to save money for his first car. He puts money in the Leetcode bank every day.
 *
 * He starts by putting in $1 on Monday, the first day. Every day from Tuesday to Sunday, he will put in $1 more than the day before. On every subsequent Monday, he will put in $1 more than the previous Monday.
 *
 * Given n, return the total amount of money he will have in the Leetcode bank at the end of the n th day.
 *
 * Example 1:
 *
 * Input: n = 4 Output: 10 Explanation: After the 4 th day, the total is 1 + 2 + 3 + 4 = 10.
 *
 * Example 2:
 *
 * Input: n = 10 Output: 37 Explanation: After the 10 th day, the total is (1 + 2 + 3 + 4 + 5 + 6 + 7) + (2 + 3 + 4) = 37. Notice that on the 2 nd Monday, Hercy only puts in $2.
 *
 * Example 3:
 *
 * Input: n = 20 Output: 96 Explanation: After the 20 th day, the total is (1 + 2 + 3 + 4 + 5 + 6 + 7) + (2 + 3 + 4 + 5 + 6 + 7 + 8) + (3 + 4 + 5 + 6 + 7 + 8) = 96.
 *
 * Constraints:
 *
 * 1 <= n <= 1000
 */
function totalMoney(n: number): number {
  let res = 0
  let round = Math.floor(n / 7)
  let remain = n % 7
  if (round === 0) {
    for (let i = 1; i <= remain; i++) {
      res += i
    }
  } else {
    for (let i = 1; i <= round; i++) {
      res += 28 + 7 * (i - 1)
    }
    for (let i = 1; i <= remain; i++) {
      res += round + i
    }
  }
  return res
};

function test_01716() {
  console.log(totalMoney(4));
  console.log(totalMoney(10));
  console.log(totalMoney(20));
}

test_01716()
