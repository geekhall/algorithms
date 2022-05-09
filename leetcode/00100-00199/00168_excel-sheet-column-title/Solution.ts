/**
 * ID:    00168
 * Title: Excel Sheet Column Title
 * Difficulty: Easy
 * Description: Given an integer columnNumber, return its corresponding column title as it appears in an Excel sheet.
 *
 * For example:
 *
 * A -> 1 B -> 2 C -> 3 ... Z -> 26 AA -> 27 AB -> 28 ...
 *
 * Example 1:
 *
 * Input: columnNumber = 1 Output:"A"
 *
 * Example 2:
 *
 * Input: columnNumber = 28 Output:"AB"
 *
 * Example 3:
 *
 * Input: columnNumber = 701 Output:"ZY"
 *
 * Constraints:
 *
 * 1 <= columnNumber <= 2 31 - 1
 */
function convertToTitle(columnNumber: number): string {
  let res: string[] = new Array<string>()
  while (columnNumber > 0) {
    res.unshift(String.fromCharCode((columnNumber - 1) % 26 + 65))
    columnNumber = Math.trunc((columnNumber - 1) / 26)
  }
  return res.join('')
};

function test_00168() {
  console.log(convertToTitle(1));
  console.log(convertToTitle(28));
  console.log(convertToTitle(701));
}

test_00168()
