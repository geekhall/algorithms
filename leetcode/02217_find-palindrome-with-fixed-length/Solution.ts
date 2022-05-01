/**
 * ID:    02217
 * Title: Find Palindrome With Fixed Length
 * Difficulty: Medium
 * Description: Given an integer array queries and a positive integer intLength, return an array answer where answer[i] is either the queries[i] th smallest positive palindrome of length intLength or -1 if no such palindrome exists.
 *
 * A palindrome is a number that reads the same backwards and forwards. Palindromes cannot have leading zeros.
 *
 * Example 1:
 *
 * Input: queries = [1,2,3,4,5,90], intLength = 3 Output: [101,111,121,131,141,999] Explanation: The first few palindromes of length 3 are: 101, 111, 121, 131, 141, 151, 161, 171, 181, 191, 202, ... The 90 th palindrome of length 3 is 999.
 *
 * Example 2:
 *
 * Input: queries = [2,4,6], intLength = 4 Output: [1111,1331,1551] Explanation: The first six palindromes of length 4 are: 1001, 1111, 1221, 1331, 1441, and 1551.
 *
 * Constraints:
 *
 * 1 <= queries.length <= 5 * 10 4
 * 1 <= queries[i] <= 10 9
 * 1 <= intLength <= 15
 */
function kthPalindrome(queries: number[], intLength: number): number[] {
  if (intLength === 1)
    return queries.map(v => v - 1)

  if (intLength === 2)
    return queries.map(v => v + v * Math.pow(10, 1))

  if (intLength === 3) {
    return queries.map((v) => {
      return v * Math.pow(10, intLength - 1) + v + Math.floor(v / 10) * 10
    })
  }
  if (intLength === 4) {
    return queries.map((v) => {
      return v * Math.pow(10, intLength - 1) + v + Math.floor(v / 10) * Math.pow(10, intLength - 2) + Math.floor(v / 10) * Math.pow(10, intLength - 1)
    })
  }
  if (intLength === 5) {
    return queries.map((v) => {
      return v
    })
  }
  let res: number[] = []
  let halfLength = Math.floor(intLength / 2)
  if (intLength % 2 === 0) {

  } else {

  }

  return res;
};
function nthPalindrome(n: number, intLength: number): number {

  return 0
}
function test_02217() {

  console.log(kthPalindrome([1, 2, 3, 4, 5, 90], 3));
  console.log(Math.pow(2, 3));
  console.log(Math.pow(3, 4));
  console.log(Math.pow(10, 2));

  let arr = [1, 2, 3, 4, 5, 90]
  let arr1 = arr.map(v => v - 1)

  console.log(arr);
  console.log(arr1);

}
test_02217()
