/**
 * ID:    00171
 * Title: Excel Sheet Column Number
 * Difficulty: Easy
 * Description: Given a string columnTitle that represents the column title as appear in an Excel sheet, return its corresponding column number.
 *
 * For example:
 *
 * A -> 1 B -> 2 C -> 3 ... Z -> 26 AA -> 27 AB -> 28 ...
 *
 * Example 1:
 *
 * Input: columnTitle = "A" Output: 1
 *
 * Example 2:
 *
 * Input: columnTitle = "AB" Output: 28
 *
 * Example 3:
 *
 * Input: columnTitle = "ZY" Output: 701
 *
 * Constraints:
 *
 * 1 <= columnTitle.length <= 7
 * columnTitle consists only of uppercase English letters.
 * columnTitle is in the range ["A", "FXSHRXW"].
 */
function titleToNumber(columnTitle: string): number {
  let res = 0
  for (let i = columnTitle.length - 1; i >= 0; i--) {
    res += (columnTitle.charCodeAt(i) - 64) * Math.pow(26, columnTitle.length - i - 1)
  }
  return res
};

function test_00171() {
  console.log(titleToNumber('A'));
  console.log(titleToNumber('AB'));
  console.log(titleToNumber('ZY'));

}

test_00171()
