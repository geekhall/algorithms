/**
 * ID:    00006
 * Title: Zigzag Conversion
 * Difficulty: Medium
 * Description: The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)
 *
 * P A H N A P L S I I G Y I R
 *
 * And then read line by line: "PAHNAPLSIIGYIR"
 *
 * Write the code that will take a string and make this conversion given a number of rows:
 *
 * string convert(string s, int numRows);
 *
 * Example 1:
 *
 * Input: s = "PAYPALISHIRING", numRows = 3 Output:"PAHNAPLSIIGYIR"
 *
 * Example 2:
 *
 * Input: s = "PAYPALISHIRING", numRows = 4 Output:"PINALSIGYAHRPI" Explanation: P I N A L S I G Y A H R P I
 *
 * Example 3:
 *
 * Input: s = "A", numRows = 1 Output:"A"
 *
 * Constraints:
 *
 * 1 <= s.length <= 1000
 * s consists of English letters (lower-case and upper-case), ',' and '.'.
 * 1 <= numRows <= 1000
 */
function convert(s: string, numRows: number): string {
  if (numRows === 1) {
    return s;
  }
  let res = '';
  let index = 0;
  let step = 1;
  let buckets = new Array(numRows).fill('').map(() => new Array().fill(''));

  for (let i = 0; i < s.length; i++) {
    if (index === numRows - 1) {
      step = -1;
    } else if (index === 0) {
      step = 1;
    }
    buckets[index].push(s[i]);
    index += step;
  }

  for (let i = 0; i < numRows; i++) {
    res += buckets[i].join('');
  }
  return res;
};

function test_00006() {
  console.log(convert('PAYPALISHIRING', 3));
  console.log(convert('PAYPALISHIRING', 4));
  console.log(convert('A', 1));
}

test_00006()
