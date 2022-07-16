#!/usr/bin/env python3
# -*- coding:UTF-8 -*-
'''
 ID:    00409
 Title: Longest Palindrome
 Difficulty: Easy
 Description: Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.
 *
 * Letters are case sensitive, for example, "Aa" is not considered a palindrome here.
 *
 * Example 1:
 *
 * Input: s = "abccccdd" Output: 7 Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.
 *
 * Example 2:
 *
 * Input: s = "a" Output: 1 Explanation: The longest palindrome that can be built is "a", whose length is 1.
 *
 * Constraints:
 *
 * 1 <= s.length <= 2000
 * s consists of lowercase and/or uppercase English letters only.
'''


from re import L


class Solution:
    def longestPalindrome(self, s: str) -> int:
        if not s:
            return 0
        count = 0
        oddFlag = False
        for i in set(s):
            count += s.count(i) // 2 * 2
            if s.count(i) % 2 == 1 and not oddFlag:
                oddFlag = True
                count += 1
        return count


def test_00409():
    print(Solution().longestPalindrome("abccccdd"))
    print(Solution().longestPalindrome("ccc"))


if __name__ == '__main__':
    test_00409()
