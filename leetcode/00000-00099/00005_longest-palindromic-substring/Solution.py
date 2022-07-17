#!/usr/bin/env python3
# -*- coding:UTF-8 -*-
'''
 ID:    00005
 Title: Longest Palindromic Substring
 Difficulty: Medium
 Description: Given a string s, return the longest palindromic substring in s.
 *
 * Example 1:
 *
 * Input: s = "babad" Output:"bab" Explanation:"aba" is also a valid answer.
 *
 * Example 2:
 *
 * Input: s = "cbbd" Output:"bb"
 *
 * Constraints:
 *
 * 1 <= s.length <= 1000
 * s consist of only digits and English letters.
'''


from operator import le
from turtle import right


class Solution:
    # time limit exceeded
    def longestPalindrome1(self, s: str) -> str:
        if not s:
            return ''
        if len(s) == 1:
            return s
        res = ''
        for i in range(len(s)):
            for j in range(i + 1, len(s) + 1):
                if s[i:j] == s[i:j][::-1]:
                    if len(s[i:j]) > len(res):
                        res = s[i:j]
        return res

    def longestPalindrome(self, s: str) -> str:
        res = ''
        for i in range(len(s)):
            left = i
            right = i
            while left >= 0 and right < len(s) and s[left] == s[right]:
                left -= 1
                right += 1
            if right - left - 1 > len(res):
                res = s[left + 1:right]
        for i in range(len(s)):
            left = i
            right = i + 1
            while left >= 0 and right < len(s) and s[left] == s[right]:
                left -= 1
                right += 1
            if right - left - 1 > len(res):
                res = s[left + 1:right]
        return res


def test_00005():
    print(Solution().longestPalindrome("babad"))
    print(Solution().longestPalindrome("cbbd"))
    print(Solution().longestPalindrome("abb"))


if __name__ == '__main__':
    test_00005()
