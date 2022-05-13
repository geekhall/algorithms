/**
 * ID:    01209
 * Title: Remove All Adjacent Duplicates in String II
 * Difficulty: Medium
 * Description: You are given a string s and an integer k, a k duplicate removal consists of choosing k adjacent and equal letters from s and removing them, causing the left and the right side of the deleted substring to concatenate together.
 *
 * We repeatedly make k duplicate removals on s until we no longer can.
 *
 * Return the final string after all such duplicate removals have been made. It is guaranteed that the answer is unique.
 *
 * Example 1:
 *
 * Input: s = "abcd", k = 2 Output:"abcd" Explanation: There's nothing to delete.
 *
 * Example 2:
 *
 * Input: s = "deeedbbcccbdaa", k = 3 Output:"aa" Explanation: First delete "eee" and "ccc", get "ddbbbdaa" Then delete "bbb", get "dddaa" Finally delete "ddd", get "aa"
 *
 * Example 3:
 *
 * Input: s = "pbbcggttciiippooaais", k = 2 Output:"ps"
 *
 * Constraints:
 *
 * 1 <= s.length <= 10 5
 * 2 <= k <= 10 4
 * s only contains lower case English letters.
 */
function removeDuplicates(s: string, k: number): string {
  let st: string[] = new Array()
  for (let i = 0; i < s.length; i++) {
    if (st.length >= k - 1 && st[st.length - 1] === s[i] && st[st.length - 2] === s[i]) {
      for (let j = k - 1; j > 0; j--) {
        st.pop()
      }
    } else {
      st.push(s[i])
    }
  }
  return st.join('')
};

function test_01209() {
  let s = "pbbcggttciiippooaais", k = 2
  console.log(removeDuplicates(s, k));

}

test_01209()
