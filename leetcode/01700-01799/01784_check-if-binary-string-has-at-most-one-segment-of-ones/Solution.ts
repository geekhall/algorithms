/**
 * ID:    01784
 * Title: Check if Binary String Has at Most One Segment of Ones
 * Difficulty: Easy
 * Description: Given a binary string s ​​​​​without leading zeros, return true ​​​ if s contains at most one contiguous segment of ones. Otherwise, return false.
 *
 * Example 1:
 *
 * Input: s = "1001" Output: false Explanation: The ones do not form a contiguous segment.
 *
 * Example 2:
 *
 * Input: s = "110" Output: true
 *
 * Constraints:
 *
 * 1 <= s.length <= 100
 * s[i] ​​​​ is either '0' or '1'.
 * s[0] is '1'.
 */
// Regex
function checkOnesSegment(s: string): boolean {
  return s.split(/1+/g).length === 2;
};

function test_01784() {
  let s = "1001"
  console.log(checkOnesSegment(s));
  s = "110"
  console.log(checkOnesSegment(s));
  console.log(checkOnesSegment('1'));
}

test_01784()
