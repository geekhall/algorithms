#!/usr/bin/env python3
# -*- coding:UTF-8 -*-
'''
 ID:    00424
 Title: Longest Repeating Character Replacement
 Difficulty: Medium
 Description: You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.
 *
 * Return the length of the longest substring containing the same letter you can get after performing the above operations.
 *
 * Example 1:
 *
 * Input: s = "ABAB", k = 2 Output: 4 Explanation: Replace the two 'A's with two 'B's or vice versa.
 *
 * Example 2:
 *
 * Input: s = "AABABBA", k = 1 Output: 4 Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA". The substring "BBBB" has the longest repeating letters, which is 4.
 *
 * Constraints:
 *
 * 1 <= s.length <= 10 5
 * s consists of only uppercase English letters.
 * 0 <= k <= s.length
'''


from operator import le


class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        m = {}
        max_len = 0
        left = 0
        for right in range(len(s)):
            m[s[right]] = m.get(s[right], 0) + 1
            max_len = max(max_len, m[s[right]])
            if right - left + 1 - max_len > k:
                m[s[left]] -= 1
                left += 1
        return len(s) - left


def test_00424():
    print(Solution.characterReplacement(Solution, "ABAB", 2))
    print(Solution.characterReplacement(Solution, "AABABBA", 1))


if __name__ == '__main__':
    test_00424()
