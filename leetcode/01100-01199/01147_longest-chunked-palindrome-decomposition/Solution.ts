/**
 * ID:    01147
 * Title: Longest Chunked Palindrome Decomposition
 * Difficulty: Hard
 * Description: You are given a string text. You should split it to k substrings (subtext 1, subtext 2, ..., subtext k) such that:
 * 
 * subtext i is a non-empty string.
 * The concatenation of all the substrings is equal to text (i.e., subtext 1 + subtext 2 + ... + subtext k == text).
 * subtext i == subtext k - i + 1 for all valid values of i (i.e., 1 <= i <= k).
 * 
 * Return the largest possible value of k.
 * 
 * Example 1:
 * 
 * Input: text = "ghiabcdefhelloadamhelloabcdefghi" Output: 7 Explanation: We can split the string on "(ghi)(abcdef)(hello)(adam)(hello)(abcdef)(ghi)".
 * 
 * Example 2:
 * 
 * Input: text = "merchant" Output: 1 Explanation: We can split the string on "(merchant)".
 * 
 * Example 3:
 * 
 * Input: text = "antaprezatepzapreanta" Output: 11 Explanation: We can split the string on "(a)(nt)(a)(pre)(za)(tpe)(za)(pre)(a)(nt)(a)".
 * 
 * Constraints:
 * 
 * 1 <= text.length <= 1000
 * text consists only of lowercase English characters.
 */
function solution() {
  
}

function test_01147() {
  
}

test_01147()
