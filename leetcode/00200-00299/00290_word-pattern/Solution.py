#!/usr/bin/env python3
# -*- coding:UTF-8 -*-
'''
 ID:    00290
 Title: Word Pattern
 Difficulty: Easy
 Description: Given a pattern and a string s, find if s follows the same pattern.
 *
 * Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.
 *
 * Example 1:
 *
 * Input: pattern = "abba", s = "dog cat cat dog" Output: true
 *
 * Example 2:
 *
 * Input: pattern = "abba", s = "dog cat cat fish" Output: false
 *
 * Example 3:
 *
 * Input: pattern = "aaaa", s = "dog cat cat dog" Output: false
 *
 * Constraints:
 *
 * 1 <= pattern.length <= 300
 * pattern contains only lower-case English letters.
 * 1 <= s.length <= 3000
 * s contains only lowercase English letters and spaces ' '.
 * s does not contain any leading or trailing spaces.
 * All the words in s are separated by a single space.
'''


class Solution:
    def wordPattern(self, pattern: str, s: str) -> bool:
        if not pattern or not s:
            return False
        s = s.split()
        if len(pattern) != len(s):
            return False
        dict = {}
        for i in range(len(pattern)):
            if pattern[i] not in dict:
                if s[i] in dict.values():
                    return False
                dict[pattern[i]] = s[i]
            else:
                if dict[pattern[i]] != s[i]:
                    return False
        return True


def test_00290():
    print(Solution().wordPattern("abba", "dog cat cat dog"))
    print(Solution().wordPattern("abba", "dog cat cat fish"))
    print(Solution().wordPattern("aaaa", "dog cat cat dog"))
    print(Solution().wordPattern("", "dog cat cat dog"))


if __name__ == '__main__':
    test_00290()
