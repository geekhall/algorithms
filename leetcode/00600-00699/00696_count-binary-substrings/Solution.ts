/**
 * ID:    00696
 * Title: Count Binary Substrings
 * Difficulty: Easy
 * Description: Give a binary string s, return the number of non-empty substrings that have the same number of 0 's and 1 's, and all the 0 's and all the 1 's in these substrings are grouped consecutively.
 *
 * Substrings that occur multiple times are counted the number of times they occur.
 *
 * Example 1:
 *
 * Input: s = "00110011" Output: 6 Explanation: There are 6 substrings that have equal number of consecutive 1's and 0's: "0011", "01", "1100", "10", "0011", and "01". Notice that some of these substrings repeat and are counted the number of times they occur. Also, "00110011" is not a valid substring because all the 0's (and 1's) are not grouped together.
 *
 * Example 2:
 *
 * Input: s = "10101" Output: 4 Explanation: There are 4 substrings: "10", "01", "10", "01" that have equal number of consecutive 1's and 0's.
 *
 * Constraints:
 *
 * 1 <= s.length <= 10 5
 * s[i] is either '0' or '1'.
 */
function countBinarySubstrings(s: string): number {
  let res = 0
  let pre = 0
  let cur = 1
  for (let i = 1; i < s.length; i++) {
    let previous = s[i - 1]
    if (s[i] === previous) {
      cur++
    } else {
      pre = cur
      cur = 1
    }
    if (pre >= cur) {
      res += 1
    }
  }
  return res
};

function test_00696() {
  let s = "00110011"
  console.log(countBinarySubstrings(s));
  s = "10101"
  console.log(countBinarySubstrings(s));
}

test_00696()
