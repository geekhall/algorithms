/**
 * ID:    01556
 * Title: Thousand Separator
 * Difficulty: Easy
 * Description: Given an integer n, add a dot (".") as the thousands separator and return it in string format.
 *
 * Example 1:
 *
 * Input: n = 987 Output:"987"
 *
 * Example 2:
 *
 * Input: n = 1234 Output:"1.234"
 *
 * Constraints:
 *
 * 0 <= n <= 2 31 - 1
 */
function thousandSeparator(n: number): string {
  if (n === 0)
    return "0"
  let res = ''
  let i = 0
  while (n > 0) {
    if (i % 3 === 0 && i !== 0) {
      res = '.' + res
    }
    res = n % 10 + res
    n = Math.floor(n / 10)
    i++
  }
  return res
};

function test_01556() {
  console.log(thousandSeparator(987));
  console.log(thousandSeparator(1234));
}

test_01556()
