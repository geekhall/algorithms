/**
 * ID:    02303
 * Title: Calculate Amount Paid in Taxes
 * Difficulty: Easy
 * Description: You are given a 0-indexed 2D integer array brackets where brackets[i] = [upper i, percent i ] means that the i th tax bracket has an upper bound of upper i and is taxed at a rate of percent i. The brackets are sorted by upper bound (i.e. upper i-1 < upper i for 0 < i < brackets.length).
 *
 * Tax is calculated as follows:
 *
 * The first upper 0 dollars earned are taxed at a rate of percent 0.
 * The next upper 1 - upper 0 dollars earned are taxed at a rate of percent 1.
 * The next upper 2 - upper 1 dollars earned are taxed at a rate of percent 2.
 * And so on.
 *
 * You are given an integer income representing the amount of money you earned. Return the amount of money that you have to pay in taxes. Answers within 10 -5 of the actual answer will be accepted.
 *
 * Example 1:
 *
 * Input: brackets = [[3,50],[7,10],[12,25]], income = 10 Output: 2.65000 Explanation: Based on your income, you have 3 dollars in the 1 st tax bracket, 4 dollars in the 2 nd tax bracket, and 3 dollars in the 3 rd tax bracket. The tax rate for the three tax brackets is 50%, 10%, and 25%, respectively. In total, you pay $3 * 50% + $4 * 10% + $3 * 25% = $2.65 in taxes.
 *
 * Example 2:
 *
 * Input: brackets = [[1,0],[4,25],[5,50]], income = 2 Output: 0.25000 Explanation: Based on your income, you have 1 dollar in the 1 st tax bracket and 1 dollar in the 2 nd tax bracket. The tax rate for the two tax brackets is 0% and 25%, respectively. In total, you pay $1 * 0% + $1 * 25% = $0.25 in taxes.
 *
 * Example 3:
 *
 * Input: brackets = [[2,50]], income = 0 Output: 0.00000 Explanation: You have no income to tax, so you have to pay a total of $0 in taxes.
 *
 * Constraints:
 *
 * 1 <= brackets.length <= 100
 * 1 <= upper i <= 1000
 * 0 <= percent i <= 100
 * 0 <= income <= 1000
 * upper i is sorted in ascending order.
 * All the values of upper i are unique.
 * The upper bound of the last tax bracket is greater than or equal to income.
 */
function calculateTax(brackets: number[][], income: number): number {
  if (income === 0) return 0
  if (income <= brackets[0][0]) {
    return income * brackets[0][1] / 100
  }

  let tax = brackets[0][0] * brackets[0][1] / 100
  for (let i = 1; i < brackets.length; i++) {
    if (income <= brackets[i][0]) {
      return tax + (income - brackets[i - 1][0]) * brackets[i][1] / 100
    }
    tax += (brackets[i][0] - brackets[i - 1][0]) * brackets[i][1] / 100
  }
  return tax
};

function test_02303() {
  let brackets = [[3, 50], [7, 10], [12, 25]], income = 10
  console.log(calculateTax(brackets, income));
  brackets = [[1, 0], [4, 25], [5, 50]], income = 2
  console.log(calculateTax(brackets, income));
  brackets = [[2, 50]], income = 0
  console.log(calculateTax(brackets, income));
}

test_02303()
