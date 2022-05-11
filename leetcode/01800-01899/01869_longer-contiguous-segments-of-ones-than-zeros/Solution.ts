/**
 * ID:    01869
 * Title: Longer Contiguous Segments of Ones than Zeros
 * Difficulty: Easy
 * Description: Given a binary string s, return true if the longest contiguous segment of 1 ' s is strictly longer than the longest contiguous segment of 0 ' s in s, or return false otherwise.
 *
 * For example, in s = " 11 01 000 10" the longest continuous segment of 1 s has length 2, and the longest continuous segment of 0 s has length 3.
 *
 * Note that if there are no 0 's, then the longest continuous segment of 0 's is considered to have a length 0. The same applies if there is no 1 's.
 *
 * Example 1:
 *
 * Input: s = "1101" Output: true Explanation: The longest contiguous segment of 1s has length 2: " 11 01" The longest contiguous segment of 0s has length 1: "11 0 1" The segment of 1s is longer, so return true.
 *
 * Example 2:
 *
 * Input: s = "111000" Output: false Explanation: The longest contiguous segment of 1s has length 3: " 111 000" The longest contiguous segment of 0s has length 3: "111 000" The segment of 1s is not longer, so return false.
 *
 * Example 3:
 *
 * Input: s = "110100010" Output: false Explanation: The longest contiguous segment of 1s has length 2: " 11 0100010" The longest contiguous segment of 0s has length 3: "1101 000 10" The segment of 1s is not longer, so return false.
 *
 * Constraints:
 *
 * 1 <= s.length <= 100
 * s[i] is either '0' or '1'.
 */
function checkZeroOnes(s: string): boolean {
  // const ones = [...s.match(/1+/g)!]
  // const zeros = [...s.match(/0+/g)!]
  const ones = s.split(/0+/g)
  const zeros = s.split(/1+/g)
  let max_1 = 0
  ones.forEach((v, i) => {
    if (v!.length > max_1) {
      max_1 = v!.length
    }
  })
  let max_0 = 0
  zeros.forEach((v, i) => {
    if (v!.length > max_0) {
      max_0 = v!.length
    }
  })
  return max_1 > max_0;
};

function test_01869() {
  let s = "1101"
  console.log(checkZeroOnes(s));
  s = "111000"
  console.log(checkZeroOnes(s));
  s = "110100010"
  console.log(checkZeroOnes(s));
}

test_01869()
