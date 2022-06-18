/**
 * ID:    00567
 * Title: Permutation in String
 * Difficulty: Medium
 * Description: Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.
 *
 * In other words, return true if one of s1 's permutations is the substring of s2.
 *
 * Example 1:
 *
 * Input: s1 = "ab", s2 = "eidbaooo" Output: true Explanation: s2 contains one permutation of s1 ("ba").
 *
 * Example 2:
 *
 * Input: s1 = "ab", s2 = "eidboaoo" Output: false
 *
 * Constraints:
 *
 * 1 <= s1.length, s2.length <= 10 4
 * s1 and s2 consist of lowercase English letters.
 */
function checkInclusion(s1: string, s2: string): boolean {
  const map = new Map<string, number>();
  for (let i = 0; i < s1.length; i++) {
    const c = s1[i];
    if (map.has(c)) {
      map.set(c, map.get(c)! + 1);
    } else {
      map.set(c, 1);
    }
  }
  let left = 0;
  let right = 0;
  let count = map.size;
  while (right < s2.length) {
    const c = s2[right];
    if (map.has(c)) {
      map.set(c, map.get(c)! - 1);
      if (map.get(c) === 0) {
        count--;
      }
    }
    right++;
    while (count === 0) {
      if (right - left === s1.length) {
        return true;
      }
      const c = s2[left];
      if (map.has(c)) {
        map.set(c, map.get(c)! + 1);
        if (map.get(c) === 1) {
          count++;
        }
      }
      left++;
    }
  }
  return false;
};

function test_00567() {
  let s1 = "ab", s2 = "eidbaooo"
  console.log(checkInclusion(s1, s2));
  s1 = "ab", s2 = "eidboaoo"
  console.log(checkInclusion(s1, s2));
}

test_00567()
