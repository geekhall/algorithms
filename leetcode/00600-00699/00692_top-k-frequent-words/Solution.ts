/**
 * ID:    00692
 * Title: Top K Frequent Words
 * Difficulty: Medium
 * Description: Given an array of strings words and an integer k, return the k most frequent strings.
 *
 * Return the answer sorted by the frequency from highest to lowest. Sort the words with the same frequency by their lexicographical order.
 *
 * Example 1:
 *
 * Input: words = ["i","love","leetcode","i","love","coding"], k = 2 Output: ["i","love"] Explanation:"i" and "love" are the two most frequent words. Note that "i" comes before "love" due to a lower alphabetical order.
 *
 * Example 2:
 *
 * Input: words = ["the","day","is","sunny","the","the","the","sunny","is","is"], k = 4 Output: ["the","is","sunny","day"] Explanation:"the", "is", "sunny" and "day" are the four most frequent words, with the number of occurrence being 4, 3, 2 and 1 respectively.
 *
 * Constraints:
 *
 * 1 <= words.length <= 500
 * 1 <= words[i] <= 10
 * words[i] consists of lowercase English letters.
 * k is in the range [1, The number of unique words[i]]
 *
 * Follow-up: Could you solve it in O(n log(k)) time and O(n) extra space?
 */

import { PriorityQueueTemplate } from '../../utils/PriorityQueue'
function topKFrequent(words: string[], k: number): string[] {
  type WordCount = {
    word: string,
    count: number
  }
  let pq = new PriorityQueueTemplate<WordCount>((a: WordCount, b: WordCount) => {
    if (a.count === b.count) {
      return a.word > b.word ? 1 : -1
    }
    return b.count - a.count
  })
  let m = new Map<string, number>()
  for (let i = 0; i < words.length; i++) {
    m.set(words[i], (m.get(words[i]) || 0) + 1)
  }
  for (let [word, count] of m) {
    pq.enqueue({ word, count })
  }

  let result: string[] = []
  for (let i = 0; i < k; i++) {
    result.push(pq.dequeue()!.word)
  }
  return result
}
function test_00692() {
  let words = ["i", "love", "leetcode", "i", "love", "coding"], k = 2
  console.log(topKFrequent(words, k))
  words = ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], k = 4
  console.log(topKFrequent(words, k))
  words = ["i", "love", "leetcode", "i", "love", "coding"], k = 3
  console.log(topKFrequent(words, k))

  3
}

test_00692()
