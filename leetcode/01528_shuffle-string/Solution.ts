/**
 * ID:    01528
 * Title: Shuffle String
 * Difficulty: Easy
 * Description: You are given a string s and an integer array indices of the same length. The string s will be shuffled such that the character at the i th position moves to indices[i] in the shuffled string.
 *
 * Return the shuffled string.
 *
 * Example 1:
 *
 * Input: s = "codeleet", indices = [4,5,6,7,0,2,1,3] Output:"leetcode" Explanation: As shown, "codeleet" becomes "leetcode" after shuffling.
 *
 * Example 2:
 *
 * Input: s = "abc", indices = [0,1,2] Output:"abc" Explanation: After shuffling, each character remains in its position.
 *
 * Constraints:
 *
 * s.length == indices.length == n
 * 1 <= n <= 100
 * s consists of only lowercase English letters.
 * 0 <= indices[i] < n
 * All values of indices are unique.
 */
function restoreString(s: string, indices: number[]): string {
  let res = new Array(s.length).fill('')
  indices.forEach((v, i) => {
    res[v] = s.charAt(i)
  })
  return res.join("")
};

function test_01528() {
  let s = "codeleet", indices = [4, 5, 6, 7, 0, 2, 1, 3]
  console.log(restoreString(s, indices));

}

test_01528()
