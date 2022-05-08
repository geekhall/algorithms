/**
 * ID:    01545
 * Title: Find Kth Bit in Nth Binary String
 * Difficulty: Medium
 * Description: Given two positive integers n and k, the binary string S n is formed as follows:
 * 
 * S 1 = "0"
 * S i = S i - 1 + "1" + reverse(invert(S i - 1)) for i > 1
 * 
 * Where + denotes the concatenation operation, reverse(x) returns the reversed string x, and invert(x) inverts all the bits in x (0 changes to 1 and 1 changes to 0).
 * 
 * For example, the first four strings in the above sequence are:
 * 
 * S 1 = "0"
 * S 2 = "0 1 1"
 * S 3 = "011 1 001"
 * S 4 = "0111001 1 0110001"
 * 
 * Return the k th bit in S n. It is guaranteed that k is valid for the given n.
 * 
 * Example 1:
 * 
 * Input: n = 3, k = 1 Output:"0" Explanation: S 3 is " 0 111001". The 1 st bit is "0".
 * 
 * Example 2:
 * 
 * Input: n = 4, k = 11 Output:"1" Explanation: S 4 is "0111001101 1 0001". The 11 th bit is "1".
 * 
 * Constraints:
 * 
 * 1 <= n <= 20
 * 1 <= k <= 2 n - 1
 */
function solution() {
  
}

function test_01545() {
  
}

test_01545()
