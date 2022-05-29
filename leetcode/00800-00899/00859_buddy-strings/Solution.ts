/**
 * ID:    00859
 * Title: Buddy Strings
 * Difficulty: Easy
 * Description: Given two strings s and goal, return true if you can swap two letters in s so the result is equal to goal, otherwise, return false.
 *
 * Swapping letters is defined as taking two indices i and j (0-indexed) such that i != j and swapping the characters at s[i] and s[j].
 *
 * For example, swapping at indices 0 and 2 in "abcd" results in "cbad".
 *
 * Example 1:
 *
 * Input: s = "ab", goal = "ba" Output: true Explanation: You can swap s[0] = 'a' and s[1] = 'b' to get "ba", which is equal to goal.
 *
 * Example 2:
 *
 * Input: s = "ab", goal = "ab" Output: false Explanation: The only letters you can swap are s[0] = 'a' and s[1] = 'b', which results in "ba" != goal.
 *
 * Example 3:
 *
 * Input: s = "aa", goal = "aa" Output: true Explanation: You can swap s[0] = 'a' and s[1] = 'a' to get "aa", which is equal to goal.
 *
 * Constraints:
 *
 * 1 <= s.length, goal.length <= 2 * 10 4
 * s and goal consist of lowercase letters.
 */
function buddyStrings(s: string, goal: string): boolean {
  if (s.length !== goal.length)
    return false
  let diffPos = new Array()
  let m = new Map()
  for (let i = 0; i < s.length; i++) {
    if (m.get(s[i]) === undefined) {
      m.set(s[i], 1)
    } else {
      m.set(s[i], m.get(s[i])! + 1)
    }
    if (s[i] !== goal[i]) {
      diffPos.push(i)
    }
  }

  if (diffPos.length === 2 && s[diffPos[0]] === goal[diffPos[1]] && s[diffPos[1]] === goal[diffPos[0]])
    return true

  let res = false
  if (diffPos.length === 0) {
    m.forEach((v, k) => {
      if (v > 1) {
        res = true
        return
      }
    })
  }
  return res
};

function test_00859() {
  let s = "ab", goal = "ba"
  console.log(buddyStrings(s, goal))
  s = "ab", goal = "ab"
  console.log(buddyStrings(s, goal))
  s = "aa", goal = "aa"
  console.log(buddyStrings(s, goal))

  s = "abcaa", goal = "abcbb"
  console.log(buddyStrings(s, goal))
}

test_00859()
