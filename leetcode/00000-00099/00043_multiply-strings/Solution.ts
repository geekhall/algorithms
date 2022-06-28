/**
 * ID:    00043
 * Title: Multiply Strings
 * Difficulty: Medium
 * Description: Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.
 *
 * Note: You must not use any built-in BigInteger library or convert the inputs to integer directly.
 *
 * Example 1:
 *
 * Input: num1 = "2", num2 = "3" Output:"6"
 *
 * Example 2:
 *
 * Input: num1 = "123", num2 = "456" Output:"56088"
 *
 * Constraints:
 *
 * 1 <= num1.length, num2.length <= 200
 * num1 and num2 consist of digits only.
 * Both num1 and num2 do not contain any leading zero, except the number 0 itself.
 */
// number bigger than 10^18 will overflow?
function multiply(num1: string, num2: string): string {
  if (num1 === "0" || num2 === "0") {
    return "0";
  }
  let m = num1.length;
  let n = num2.length;
  let dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j] + dp[i][j - 1] - dp[i - 1][j - 1];
      dp[i][j] %= 10;
    }
  }
  let res = "";
  for (let i = m; i >= 1; i--) {
    for (let j = n; j >= 1; j--) {
      if (dp[i][j] !== 0) {
        res += dp[i][j];
      }
    }
  }
  return res;
};




function test_00043() {
  console.log(multiply("123", "456"));  // expect 56088
  console.log(multiply("123456789", "987654321"));  //"121932631112635269"
  console.log(987654321 * 123456789);
  console.log(121932631112635269);
  console.log(Number.MAX_VALUE);
}

test_00043()


