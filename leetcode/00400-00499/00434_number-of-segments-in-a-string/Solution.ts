/**
 * ID:    00434
 * Title: Number of Segments in a String
 * Difficulty: Easy
 * Description: Given a string s, return the number of segments in the string.
 *
 * A segment is defined to be a contiguous sequence of non-space characters.
 *
 * Example 1:
 *
 * Input: s = "Hello, my name is John" Output: 5 Explanation: The five segments are ["Hello,", "my", "name", "is", "John"]
 *
 * Example 2:
 *
 * Input: s = "Hello" Output: 1
 *
 * Constraints:
 *
 * 0 <= s.length <= 300
 * s consists of lowercase and uppercase English letters, digits, or one of the following characters "!@#$%^&*()_+-=',.:".
 * The only space character in s is ' '.
 */
function countSegments(s: string): number {
  let arr = s.split(' ')
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '') {
      arr.splice(i, 1)
      i--
    }
  }
  return arr.length
};

function test_00434() {
  let s = "Hello, my name is John"
  console.log(countSegments(s));
  s = "Hello"
  console.log(countSegments(s));
  s = "                "  // expect 0
  console.log(countSegments(s));
  s = ", , , ,        a, eaefa" // expect 6
  console.log(countSegments(s));



}

test_00434()
