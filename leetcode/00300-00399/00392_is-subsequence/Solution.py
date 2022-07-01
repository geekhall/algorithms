#!/usr/bin/env python3
# -*- coding:UTF-8 -*-
'''
 ID:    00392
 Title: Is Subsequence
 Difficulty: Easy
 Description: Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
 *
 * A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of " a b c d e" while "aec" is not).
 *
 * Example 1:
 *
 * Input: s = "abc", t = "ahbgdc" Output: true
 *
 * Example 2:
 *
 * Input: s = "axc", t = "ahbgdc" Output: false
 *
 * Constraints:
 *
 * 0 <= s.length <= 100
 * 0 <= t.length <= 10 4
 * s and t consist only of lowercase English letters.
 *
 * Follow up: Suppose there are lots of incoming s, say s 1, s 2, ..., s k where k >= 10 9, and you want to check one by one to see if t has its subsequence. In this scenario, how would you change your code?
'''


class Solution:
    def isSubsequence(self, s: str, t: str) -> bool:
        if not s:
            return True
        if not t:
            return False
        i = 0
        j = 0
        while i < len(s) and j < len(t):
            if s[i] == t[j]:
                i += 1
            j += 1
        return i == len(s)


def test_00392():
    print(Solution.isSubsequence(Solution, "abc", "ahbgdc"))
    print(Solution.isSubsequence(Solution, "axc", "ahbgdc"))


if __name__ == '__main__':
    test_00392()
