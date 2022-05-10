/**
 * ID:    00316
 * Title: Remove Duplicate Letters
 * Difficulty: Medium
 * Description: Given a string s, remove duplicate letters so that every letter appears once and only once. You must make sure your result is the smallest in lexicographical order among all possible results.
 *
 * Example 1:
 *
 * Input: s = "bcabc" Output:"abc"
 *
 * Example 2:
 *
 * Input: s = "cbacdcbc" Output:"acdb"
 *
 * Constraints:
 *
 * 1 <= s.length <= 10 4
 * s consists of lowercase English letters.
 *
 * Note: This question is the same as 1081: https://leetcode.com/problems/smallest-subsequence-of-distinct-characters/
 */
function removeDuplicateLetters(s: string): string {
  let lastAcc = new Map()
  let st: string[] = []
  let visited = new Set()

  for (let i = 0; i < s.length; i++) {
    lastAcc.set(s[i], i)
  }

  for (let i = 0; i < s.length; i++) {
    if (!visited.has(s[i])) {
      while (st.length > 0 &&                 // stack is not null
        st[st.length - 1] > s[i] &&           // is smaller than pre
        lastAcc.get(st[st.length - 1]) > i) { // s[st.top()] is not first appear
        // 当前字母前面的字母比当前字母大，并且map中最后出现的顺序大于i的都要删掉
        visited.delete(st.pop())
      }

      st.push(s[i])
      visited.add(s[i])
    }
  }
  return st.join("")
};

function test_00316() {
  let s = "bcabc"
  console.log(removeDuplicateLetters(s));
  s = "cbacdcbc"
  console.log(removeDuplicateLetters(s));
}

test_00316()
