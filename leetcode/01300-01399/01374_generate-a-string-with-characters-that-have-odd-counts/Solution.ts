/**
 * ID:    01374
 * Title: Generate a String With Characters That Have Odd Counts
 * Difficulty: Easy
 * Description: Given an integer n, return a string with n characters such that each character in such string occurs an odd number of times.
 *
 * The returned string must contain only lowercase English letters. If there are multiples valid strings, return any of them.
 *
 * Example 1:
 *
 * Input: n = 4 Output:"pppz" Explanation:"pppz" is a valid string since the character 'p' occurs three times and the character 'z' occurs once. Note that there are many other valid strings such as "ohhh" and "love".
 *
 * Example 2:
 *
 * Input: n = 2 Output:"xy" Explanation:"xy" is a valid string since the characters 'x' and 'y' occur once. Note that there are many other valid strings such as "ag" and "ur".
 *
 * Example 3:
 *
 * Input: n = 7 Output:"holasss"
 *
 * Constraints:
 *
 * 1 <= n <= 500
 */
function generateTheString(n: number): string {
  let res = Array.from({ length: n - 1 }, v => 'a').join('')
  res += n % 2 ? 'a' : 'b'
  return res
};

function test_01374() {
  console.log(generateTheString(4));
  console.log(generateTheString(2));
  console.log(generateTheString(7));
  console.log(generateTheString(1));

}

test_01374()
