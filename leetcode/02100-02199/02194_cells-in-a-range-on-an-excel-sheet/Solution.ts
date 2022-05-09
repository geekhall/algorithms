/**
 * ID:    02194
 * Title: Cells in a Range on an Excel Sheet
 * Difficulty: Easy
 * Description: A cell (r, c) of an excel sheet is represented as a string "<col><row>" where:
 *
 * <col> denotes the column number c of the cell. It is represented by alphabetical letters.
 *
 * For example, the 1 st column is denoted by 'A', the 2 nd by 'B', the 3 rd by 'C', and so on.
 *
 * <row> is the row number r of the cell. The r th row is represented by the integer r.
 *
 * You are given a string s in the format "<col1><row1>:<col2><row2>", where <col1> represents the column c1, <row1> represents the row r1, <col2> represents the column c2, and <row2> represents the row r2, such that r1 <= r2 and c1 <= c2.
 *
 * Return the list of cells (x, y) such that r1 <= x <= r2 and c1 <= y <= c2. The cells should be represented as strings in the format mentioned above and be sorted in non-decreasing order first by columns and then by rows.
 *
 * Example 1:
 *
 * Input: s = "K1:L2" Output: ["K1","K2","L1","L2"] Explanation: The above diagram shows the cells which should be present in the list. The red arrows denote the order in which the cells should be presented.
 *
 * Example 2:
 *
 * Input: s = "A1:F1" Output: ["A1","B1","C1","D1","E1","F1"] Explanation: The above diagram shows the cells which should be present in the list. The red arrow denotes the order in which the cells should be presented.
 *
 * Constraints:
 *
 * s.length == 5
 * 'A' <= s[0] <= s[3] <= 'Z'
 * '1' <= s[1] <= s[4] <= '9'
 * s consists of uppercase English letters, digits and ':'.
 */
function cellsInRange(s: string): string[] {
  let res: string[] = new Array<string>()
  let c1 = s[0]
  let r1 = s[1]
  let c2 = s[3]
  let r2 = s[4]
  for (let i = c1.charCodeAt(0); i <= c2.charCodeAt(0); i++) {
    for (let j = parseInt(r1); j <= parseInt(r2); j++) {
      res.push(String.fromCharCode(i) + j.toString())
    }
  }
  return res
};

function test_02194() {
  let s = "K1:L2"
  console.log(cellsInRange(s));
  s = "A1:F1"
  console.log(cellsInRange(s));
  s = "C1:C9"
  console.log(cellsInRange(s));
  s = "B3:B3"
  console.log(cellsInRange(s));
}

test_02194()
