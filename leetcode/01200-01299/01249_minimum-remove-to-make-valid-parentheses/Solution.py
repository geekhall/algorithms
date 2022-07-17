#!/usr/bin/env python3
# -*- coding:UTF-8 -*-
'''
 ID:    01249
 Title: Minimum Remove to Make Valid Parentheses
 Difficulty: Medium
 Description: Given a string s of '(', ')' and lowercase English characters.
 *
 * Your task is to remove the minimum number of parentheses ( '(' or ')', in any positions ) so that the resulting parentheses string is valid and return any valid string.
 *
 * Formally, a parentheses string is valid if and only if:
 *
 * It is the empty string, contains only lowercase characters, or
 * It can be written as AB (A concatenated with B), where A and B are valid strings, or
 * It can be written as (A), where A is a valid string.
 *
 * Example 1:
 *
 * Input: s = "lee(t(c)o)de)" Output:"lee(t(c)o)de" Explanation:"lee(t(co)de)" , "lee(t(c)ode)" would also be accepted.
 *
 * Example 2:
 *
 * Input: s = "a)b(c)d" Output:"ab(c)d"
 *
 * Example 3:
 *
 * Input: s = "))((" Output:"" Explanation: An empty string is also valid.
 *
 * Constraints:
 *
 * 1 <= s.length <= 10 5
 * s[i] is either '(', ')', or lowercase English letter.
'''


import re


class Solution:
    def minRemoveToMakeValid(self, s: str) -> str:
        stack = []
        split_str = list(s)
        for i in range(len(s)):
            if s[i] == '(':
                stack.append(i)
            elif s[i] == ')':
                if len(stack) != 0:
                    stack.pop()
                else:
                    split_str[i] = ""
        for i in stack:
            split_str[i] = ""
        return ''.join(split_str)


def test_01249():
    print(Solution().minRemoveToMakeValid("lee(t(c)o)de)"))
    print(Solution().minRemoveToMakeValid("a)b(c)d"))
    print(Solution().minRemoveToMakeValid("))(("))


if __name__ == '__main__':
    test_01249()
