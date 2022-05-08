/**
 * ID:    00028
 * Title: Implement strStr()
 * Difficulty: Easy
 * Description: Implement strStr().
 *
 * Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
 *
 * Clarification:
 *
 * What should we return when needle is an empty string? This is a great question to ask during an interview.
 *
 * For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().
 *
 * Example 1:
 *
 * Input: haystack = "hello", needle = "ll" Output: 2
 *
 * Example 2:
 *
 * Input: haystack = "aaaaa", needle = "bba" Output: -1
 *
 * Constraints:
 *
 * 1 <= haystack.length, needle.length <= 10 4
 * haystack and needle consist of only lowercase English characters.
 */
function strStr(haystack: string, needle: string): number {
  if (needle === "")
    return 0

  return haystack.indexOf(needle)
};

function test_00028() {
  let haystack = "hello", needle = "ll"
  console.log(strStr(haystack, needle));

}

test_00028()
