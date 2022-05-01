/**
 * ID:    00014
 * Title: Longest Common Prefix
 * Difficulty: Easy
 * Description: Write a function to find the longest common prefix string amongst an array of strings.
 *
 * If there is no common prefix, return an empty string "".
 *
 * Example 1:
 *
 * Input: strs = ["flower","flow","flight"] Output:"fl"
 *
 * Example 2:
 *
 * Input: strs = ["dog","racecar","car"] Output:"" Explanation: There is no common prefix among the input strings.
 *
 * Constraints:
 *
 * 1 <= strs.length <= 200
 * 0 <= strs[i].length <= 200
 * strs[i] consists of only lower-case English letters.
 */
function longestCommonPrefix(strs: string[]): string {
  if (strs === null || strs.length === 0)
    return ""

  let minLength = Number.MAX_VALUE
  strs.forEach((str) => {
    if (str.length < minLength)
      minLength = str.length
  })

  if (minLength === 0)
    return ""

  // can be improved by binary search
  let length = 1
  for (; length <= minLength; length++) {
    if (!isCommonPrefix(strs, length)) {
      break
    }
  }

  return strs[0].substring(0, length - 1)
};

function isCommonPrefix(strs: string[], len: number): boolean {
  if (strs.length === 1) {
    if (len <= strs[0].length)
      return true
    else
      return false
  }

  let start = strs[0].substring(0, len)
  for (let i = 1; i < strs.length; i++) {
    if (start !== strs[i].substring(0, len))
      return false
  }
  return true
}
function test_00014() {
  console.log(longestCommonPrefix(["flower", "flow", "flight"]));
  console.log(longestCommonPrefix(["dog", "racecar", "car"]));
  console.log(longestCommonPrefix(["a"]));
  console.log(longestCommonPrefix([]));
  console.log(longestCommonPrefix(["", ""]));
  // console.log(isCommonPrefix(["flower", "flow", "flight"], 2)); // true
  // console.log(isCommonPrefix(["dog", "racecar", "car"], 1));    // false
}
test_00014()
