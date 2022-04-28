// Given two string arrays words1 and words2, return the number of strings that appear exactly once in each of the two arrays.

function countWords(words1: string[], words2: string[]): number {
  let m1 = new Map<string, number>()
  let m2 = new Map<string, number>()

  words1.forEach((v, i) => {
    if (m1.get(v) !== undefined)
      m1.set(v, m1.get(v)! + 1)
    else
      m1.set(v, 1)
  })

  words2.forEach((v, i) => {
    if (m2.get(v) !== undefined)
      m2.set(v, m2.get(v)! + 1)
    else
      m2.set(v, 1)
  })

  let s1 = new Set()
  m1.forEach((v, k) => {
    if (v === 1)
      s1.add(k)
  })

  let res = 0
  m2.forEach((v, k) => {
    if (v === 1 && s1.has(k))
      res++
  })
  return res
};

function intersectionArray(nums1: number[], nums2: number[]): number[] {
  let s2 = new Set(nums2)
  return [...new Set(nums1.filter((v, _) => s2.has(v)))]
}

function test_02085() {
  // Input: words1 = ["leetcode","is","amazing","as","is"], words2 = ["amazing","leetcode","is"]
  // Output: 2
  // Explanation:
  // - "leetcode" appears exactly once in each of the two arrays. We count this string.
  // - "amazing" appears exactly once in each of the two arrays. We count this string.
  // - "is" appears in each of the two arrays, but there are 2 occurrences of it in words1. We do not count this string.
  // - "as" appears once in words1, but does not appear in words2. We do not count this string.
  // Thus, there are 2 strings that appear exactly once in each of the two arrays.
  let words1 = ["leetcode", "is", "amazing", "as", "is"], words2 = ["amazing", "leetcode", "is"]
  console.log(countWords(words1, words2));

  // Input: words1 = ["b","bb","bbb"], words2 = ["a","aa","aaa"]
  // Output: 0
  // Explanation: There are no strings that appear in each of the two arrays.
  words1 = ["b", "bb", "bbb"], words2 = ["a", "aa", "aaa"]
  console.log(countWords(words1, words2));

  // Input: words1 = ["a","ab"], words2 = ["a","a","a","ab"]
  // Output: 1
  // Explanation: The only string that appears exactly once in each of the two arrays is "ab".
  words1 = ["a", "ab"], words2 = ["a", "a", "a", "ab"]
  console.log(countWords(words1, words2));
}
test_02085()
