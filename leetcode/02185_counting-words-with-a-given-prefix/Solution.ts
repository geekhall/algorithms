/**
 * ID:    02185
 * Title: Counting Words With a Given Prefix
 * Difficulty: Easy
 * Description: You are given an array of strings words and a string pref.
 *
 * Return the number of strings in words that contain pref as a prefix.
 *
 * A prefix of a string s is any leading contiguous substring of s.
 *
 * Example 1:
 *
 * Input: words = ["pay"," at tention","practice"," at tend"], pref = "at" Output: 2 Explanation: The 2 strings that contain "at" as a prefix are: " at tention" and " at tend".
 *
 * Example 2:
 *
 * Input: words = ["leetcode","win","loops","success"], pref = "code" Output: 0 Explanation: There are no strings that contain "code" as a prefix.
 *
 * Constraints:
 *
 * 1 <= words.length <= 100
 * 1 <= words[i].length, pref.length <= 100
 * words[i] and pref consist of lowercase English letters.
 */
function prefixCount(words: string[], pref: string): number {
  let res = 0
  words.forEach(v => {
    if (v.trim().startsWith(pref))
      res++
  })
  return res
};

function test_02185() {
  let words = ["pay", " at tention", "practice", " at tend"], pref = "at"
  console.log(prefixCount(words, pref));

}

test_02185()
