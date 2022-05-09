/**
 * ID:    00830
 * Title: Positions of Large Groups
 * Difficulty: Easy
 * Description: In a string s of lowercase letters, these letters form consecutive groups of the same character.
 *
 * For example, a string like s = "abbxxxxzyy" has the groups "a", "bb", "xxxx", "z", and "yy".
 *
 * A group is identified by an interval [start, end], where start and end denote the start and end indices (inclusive) of the group. In the above example, "xxxx" has the interval [3,6].
 *
 * A group is considered large if it has 3 or more characters.
 *
 * Return the intervals of every large group sorted in increasing order by start index.
 *
 * Example 1:
 *
 * Input: s = "abbxxxxzzy" Output: [[3,6]] Explanation:"xxxx" is the only large group with start index 3 and end index 6.
 *
 * Example 2:
 *
 * Input: s = "abc" Output: [] Explanation: We have groups "a", "b", and "c", none of which are large groups.
 *
 * Example 3:
 *
 * Input: s = "abcdddeeeeaabbbcd" Output: [[3,5],[6,9],[12,14]] Explanation: The large groups are "ddd", "eeee", and "bbb".
 *
 * Constraints:
 *
 * 1 <= s.length <= 1000
 * s contains lowercase English letters only.
 */
function largeGroupPositions(s: string): number[][] {
  let res: number[][] = new Array()
  let cnt = 1
  let start = 0
  for (let i = 1; i < s.length; i++) {
    if (s[start] === s[i]) {
      cnt++
    } else {
      if (cnt >= 3) {
        res.push([start, i - 1])
      }
      start = i
      cnt = 1
    }
  }
  if (cnt >= 3) {
    res.push([start, s.length - 1])
  }
  return res
};

function test_00830() {
  let s = "abbxxxxzzy"
  console.log(largeGroupPositions(s));
  s = "abc"
  console.log(largeGroupPositions(s));
  s = "abcdddeeeeaabbbcd"
  console.log(largeGroupPositions(s));
  s = "aaa"
  console.log(largeGroupPositions(s));
}

test_00830()
