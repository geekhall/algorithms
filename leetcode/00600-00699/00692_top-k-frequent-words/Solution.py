#!/usr/bin/env python3
# -*- coding:UTF-8 -*-
'''
 ID:    00692
 Title: Top K Frequent Words
 Difficulty: Medium
 Description: Given an array of strings words and an integer k, return the k most frequent strings.
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
'''
from queue import PriorityQueue


class Solution:
    def topKFrequent(self, words: list[str], k: int) -> list[str]:
        dic = {}
        for word in words:
            if word in dic:
                dic[word] += 1
            else:
                dic[word] = 1
        pq = PriorityQueue()
        for key, value in dic.items():
            pq.put((-1*value, key))
        res = []
        for i in range(k):
            res.append(pq.get()[1])
        return res


def test_00692():
    print(Solution.topKFrequent(
        Solution, ["i", "love", "leetcode", "i", "love", "coding"], 2))
    print(Solution.topKFrequent(
        Solution, ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], 4))
    print(Solution.topKFrequent(
        Solution, ["i", "love", "leetcode", "i", "love", "coding"], 3))


if __name__ == '__main__':
    test_00692()
