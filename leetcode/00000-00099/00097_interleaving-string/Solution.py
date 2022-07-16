#!/usr/bin/env python3
# -*- coding:UTF-8 -*-
'''
 ID:    00097
 Title: Interleaving String
 Difficulty: Medium
 Description: Given strings s1, s2, and s3, find whether s3 is formed by an interleaving of s1 and s2.
 *
 * An interleaving of two strings s and t is a configuration where they are divided into non-empty substrings such that:
 *
 * s = s 1 + s 2 + ... + s n
 * t = t 1 + t 2 + ... + t m
 * |n - m| <= 1
 * The interleaving is s 1 + t 1 + s 2 + t 2 + s 3 + t 3 + ... or t 1 + s 1 + t 2 + s 2 + t 3 + s 3 + ...
 *
 * Note: a + b is the concatenation of strings a and b.
 *
 * Example 1:
 *
 * Input: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac" Output: true
 *
 * Example 2:
 *
 * Input: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbbaccc" Output: false
 *
 * Example 3:
 *
 * Input: s1 = "", s2 = "", s3 = "" Output: true
 *
 * Constraints:
 *
 * 0 <= s1.length, s2.length <= 100
 * 0 <= s3.length <= 200
 * s1, s2, and s3 consist of lowercase English letters.
 *
 * Follow up: Could you solve it using only O(s2.length) additional memory space?
'''


class Solution:
    def isInterleave(self, s1: str, s2: str, s3: str) -> bool:
        if len(s1) + len(s2) != len(s3):
            return False
        dp = [[False for _ in range(len(s2) + 1)] for _ in range(len(s1) + 1)]
        for i in range(len(s1) + 1):
            for j in range(len(s2) + 1):
                if i == 0 and j == 0:
                    dp[i][j] = True
                elif i == 0:
                    dp[i][j] = dp[i][j - 1] and s2[j - 1] == s3[i + j - 1]
                elif j == 0:
                    dp[i][j] = dp[i - 1][j] and s1[i - 1] == s3[i + j - 1]
                else:
                    dp[i][j] = (dp[i - 1][j] and s1[i - 1] == s3[i + j - 1]
                                ) or (dp[i][j - 1] and s2[j - 1] == s3[i + j - 1])
        return dp[len(s1)][len(s2)]


def test_00097():
    print(Solution().isInterleave("aabcc", "dbbca", "aadbbcbcac"))
    print(Solution().isInterleave("aabcc", "dbbca", "aadbbbaccc"))
    print(Solution().isInterleave("", "", ""))
    pass


if __name__ == '__main__':
    # test_00097()
    s1 = "abc"
    s2 = "defghi"
    dp = [[False for _ in range(len(s2) + 1)] for _ in range(len(s1) + 1)]
    print(dp)
