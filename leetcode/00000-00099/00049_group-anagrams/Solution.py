#!/usr/bin/env python3
# -*- coding:UTF-8 -*-
'''
 ID:    00049
 Title: Group Anagrams
 Difficulty: Medium
 Description: Given an array of strings strs, group the anagrams together. You can return the answer in any order.
 *
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
 *
 * Example 1:
 *
 * Input: strs = ["eat","tea","tan","ate","nat","bat"] Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
 *
 * Example 2:
 *
 * Input: strs = [""] Output: [[""]]
 *
 * Example 3:
 *
 * Input: strs = ["a"] Output: [["a"]]
 *
 * Constraints:
 *
 * 1 <= strs.length <= 10 4
 * 0 <= strs[i].length <= 100
 * strs[i] consists of lowercase English letters.
'''


class Solution:
    def groupAnagrams(self, strs: list[str]) -> list[list[str]]:
        if not strs:
            return []
        dict = {}
        for s in strs:
            key = ''.join(sorted(s))
            if key in dict:
                dict[key].append(s)
            else:
                dict[key] = [s]
        return list(dict.values())


def test_00049():
    print(Solution().groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))
    print(Solution().groupAnagrams([""]))
    print(Solution().groupAnagrams(["a"]))


if __name__ == '__main__':
    test_00049()
