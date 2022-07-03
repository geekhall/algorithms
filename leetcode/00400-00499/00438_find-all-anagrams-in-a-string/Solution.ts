/**
 * ID:    00438
 * Title: Find All Anagrams in a String
 * Difficulty: Medium
 * Description: Given two strings s and p, return an array of all the start indices of p 's anagrams in s. You may return the answer in any order.
 *
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
 *
 * Example 1:
 *
 * Input: s = "cbaebabacd", p = "abc" Output: [0,6] Explanation: The substring with start index = 0 is "cba", which is an anagram of "abc". The substring with start index = 6 is "bac", which is an anagram of "abc".
 *
 * Example 2:
 *
 * Input: s = "abab", p = "ab" Output: [0,1,2] Explanation: The substring with start index = 0 is "ab", which is an anagram of "ab". The substring with start index = 1 is "ba", which is an anagram of "ab". The substring with start index = 2 is "ab", which is an anagram of "ab".
 *
 * Constraints:
 *
 * 1 <= s.length, p.length <= 3 * 10 4
 * s and p consist of lowercase English letters.
 */
function findAnagrams(s: string, p: string): number[] {
  if (s.length < p.length) return []
  const ans: number[] = []
  const pMap: Map<string, number> = new Map()
  const sMap: Map<string, number> = new Map()
  for (const c of p) {
    pMap.set(c, (pMap.get(c) || 0) + 1)
  }
  const isAnagram = (sMap: Map<string, number>, pMap: Map<string, number>) => {
    for (const [key, value] of pMap) {
      if (sMap.get(key) !== value) return false
    }
    return true
  }
  for (let i = 0; i < s.length; i++) {
    const c = s[i]
    sMap.set(c, (sMap.get(c) || 0) + 1)
    if (i >= p.length) {
      const d = s[i - p.length]
      sMap.set(d, sMap.get(d)! - 1)
      if (sMap.get(d) === 0) sMap.delete(d)
    }
    if (i >= p.length - 1) {
      if (isAnagram(sMap, pMap)) ans.push(i - p.length + 1)
    }
  }
  return ans
};

function test_00438() {
  let s = "cbaebabacd", p = "abc"
  console.log(findAnagrams(s, p))
  s = "abab", p = "ab"
  console.log(findAnagrams(s, p))
  s = "baa", p = "aa"
  console.log(findAnagrams(s, p))
}

test_00438()
