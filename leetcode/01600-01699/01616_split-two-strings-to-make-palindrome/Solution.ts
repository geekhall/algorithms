/**
 * ID:    01616
 * Title: Split Two Strings to Make Palindrome
 * Difficulty: Medium
 * Description: You are given two strings a and b of the same length. Choose an index and split both strings at the same index, splitting a into two strings: a prefix and a suffix where a = a prefix + a suffix, and splitting b into two strings: b prefix and b suffix where b = b prefix + b suffix. Check if a prefix + b suffix or b prefix + a suffix forms a palindrome.
 * 
 * When you split a string s into s prefix and s suffix, either s suffix or s prefix is allowed to be empty. For example, if s = "abc", then "" + "abc", "a" + "bc", "ab" + "c", and "abc" + "" are valid splits.
 * 
 * Return true if it is possible to form a palindrome string, otherwise return false.
 * 
 * Notice that x + y denotes the concatenation of strings x and y.
 * 
 * Example 1:
 * 
 * Input: a = "x", b = "y" Output: true Explaination: If either a or b are palindromes the answer is true since you can split in the following way: a prefix = "", a suffix = "x" b prefix = "", b suffix = "y" Then, a prefix + b suffix = "" + "y" = "y", which is a palindrome.
 * 
 * Example 2:
 * 
 * Input: a = "xbdef", b = "xecab" Output: false
 * 
 * Example 3:
 * 
 * Input: a = "ulacfd", b = "jizalu" Output: true Explaination: Split them at index 3: a prefix = "ula", a suffix = "cfd" b prefix = "jiz", b suffix = "alu" Then, a prefix + b suffix = "ula" + "alu" = "ulaalu", which is a palindrome.
 * 
 * Constraints:
 * 
 * 1 <= a.length, b.length <= 10 5
 * a.length == b.length
 * a and b consist of lowercase English letters
 */
function solution() {
  
}

function test_01616() {
  
}

test_01616()
