#!/usr/bin/env python3
# -*- coding:UTF-8 -*-
'''
 ID:    00187
 Title: Repeated DNA Sequences
 Difficulty: Medium
 Description: The DNA sequence is composed of a series of nucleotides abbreviated as 'A', 'C', 'G', and 'T'.
 *
 * For example, "ACGAATTCCG" is a DNA sequence.
 *
 * When studying DNA, it is useful to identify repeated sequences within the DNA.
 *
 * Given a string s that represents a DNA sequence, return all the 10 -letter-long sequences (substrings) that occur more than once in a DNA molecule. You may return the answer in any order.
 *
 * Example 1:
 *
 * Input: s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT" Output: ["AAAAACCCCC","CCCCCAAAAA"]
 *
 * Example 2:
 *
 * Input: s = "AAAAAAAAAAAAA" Output: ["AAAAAAAAAA"]
 *
 * Constraints:
 *
 * 1 <= s.length <= 10 5
 * s[i] is either 'A', 'C', 'G', or 'T'.
'''


class Solution:
    def findRepeatedDnaSequences(self, s: str) -> list[str]:
        if not s:
            return []
        dict = {}
        for i in range(len(s) - 9):
            key = s[i:i + 10]
            if key in dict:
                dict[key] += 1
            else:
                dict[key] = 1
        res = []
        for key in dict:
            if dict[key] > 1:
                res.append(key)
        return res


def test_00187():
    print(Solution().findRepeatedDnaSequences(
        "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"))
    print(Solution().findRepeatedDnaSequences("AAAAAAAAAAAAA"))


if __name__ == '__main__':
    # test_00187()
    s = "abcdefghijklmnopqrstuvwxyz"
    print(s[1:4])
