#!/usr/bin/env python3
# -*- coding:UTF-8 -*-
'''
 ID:    01465
 Title: Maximum Area of a Piece of Cake After Horizontal and Vertical Cuts
 Difficulty: Medium
 Description: You are given a rectangular cake of size h x w and two arrays of integers horizontalCuts and verticalCuts where:
 *
 * horizontalCuts[i] is the distance from the top of the rectangular cake to the i th horizontal cut and similarly, and
 * verticalCuts[j] is the distance from the left of the rectangular cake to the j th vertical cut.
 *
 * Return the maximum area of a piece of cake after you cut at each horizontal and vertical position provided in the arrays horizontalCuts and verticalCuts. Since the answer can be a large number, return this modulo 10 9 + 7.
 *
 * Example 1:
 *
 * Input: h = 5, w = 4, horizontalCuts = [1,2,4], verticalCuts = [1,3] Output: 4 Explanation: The figure above represents the given rectangular cake. Red lines are the horizontal and vertical cuts. After you cut the cake, the green piece of cake has the maximum area.
 *
 * Example 2:
 *
 * Input: h = 5, w = 4, horizontalCuts = [3,1], verticalCuts = [1] Output: 6 Explanation: The figure above represents the given rectangular cake. Red lines are the horizontal and vertical cuts. After you cut the cake, the green and yellow pieces of cake have the maximum area.
 *
 * Example 3:
 *
 * Input: h = 5, w = 4, horizontalCuts = [3], verticalCuts = [3] Output: 9
 *
 * Constraints:
 *
 * 2 <= h, w <= 10 9
 * 1 <= horizontalCuts.length <= min(h - 1, 10 5)
 * 1 <= verticalCuts.length <= min(w - 1, 10 5)
 * 1 <= horizontalCuts[i] < h
 * 1 <= verticalCuts[i] < w
 * All the elements in horizontalCuts are distinct.
 * All the elements in verticalCuts are distinct.
'''


class Solution:
    def maxArea(self, h: int, w: int, horizontalCuts: list[int], verticalCuts: list[int]) -> int:
        horizontalCuts.sort()
        verticalCuts.sort()
        max_height = 0
        max_width = 0
        if len(horizontalCuts) == 1:
            max_height = max(horizontalCuts[0], h - horizontalCuts[0])
        else:
            for i in range(0, len(horizontalCuts)+1):
                if i == 0:
                    max_height = max(max_height, horizontalCuts[i])
                elif i == len(horizontalCuts):
                    max_height = max(max_height, h - horizontalCuts[i-1])
                else:
                    max_height = max(
                        max_height, horizontalCuts[i] - horizontalCuts[i - 1])

        if len(verticalCuts) == 1:
            max_width = max(verticalCuts[0], w - verticalCuts[0])
        else:
            for i in range(0, len(verticalCuts)+1):
                if i == 0:
                    max_width = max(max_width, verticalCuts[i])
                elif i == len(verticalCuts):
                    max_width = max(max_width, w - verticalCuts[i-1])
                else:
                    max_width = max(
                        max_width, verticalCuts[i] - verticalCuts[i - 1])

        return (max_width * max_height) % (10**9 + 7)


def test_01465():
    print(Solution.maxArea(Solution, 5, 4, [1, 2, 4], [1, 3]))
    print(Solution.maxArea(Solution, 5, 4, [3, 1], [1]))
    print(Solution.maxArea(Solution, 5, 4, [3], [3]))
    print(Solution.maxArea(Solution, 5, 2, [3, 1, 2], [1]))
    print(Solution.maxArea(Solution, 8, 3, [5, 7, 3, 4, 6], [2]))


if __name__ == '__main__':
    test_01465()
