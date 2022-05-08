/**
 * ID:    01611
 * Title: Minimum One Bit Operations to Make Integers Zero
 * Difficulty: Hard
 * Description: Given an integer n, you must transform it into 0 using the following operations any number of times:
 * 
 * Change the rightmost (0 th) bit in the binary representation of n.
 * Change the i th bit in the binary representation of n if the (i-1) th bit is set to 1 and the (i-2) th through 0 th bits are set to 0.
 * 
 * Return the minimum number of operations to transform n into 0.
 * 
 * Example 1:
 * 
 * Input: n = 3 Output: 2 Explanation: The binary representation of 3 is "11". " 1 1" -> " 0 1" with the 2 nd operation since the 0 th bit is 1. "0 1" -> "0 0" with the 1 st operation.
 * 
 * Example 2:
 * 
 * Input: n = 6 Output: 4 Explanation: The binary representation of 6 is "110". " 1 10" -> " 0 10" with the 2 nd operation since the 1 st bit is 1 and 0 th through 0 th bits are 0. "01 0" -> "01 1" with the 1 st operation. "0 1 1" -> "0 0 1" with the 2 nd operation since the 0 th bit is 1. "00 1" -> "00 0" with the 1 st operation.
 * 
 * Constraints:
 * 
 * 0 <= n <= 10 9
 */
function solution() {
  
}

function test_01611() {
  
}

test_01611()
