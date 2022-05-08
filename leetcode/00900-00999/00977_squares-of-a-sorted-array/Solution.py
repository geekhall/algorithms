#!/usr/bin/env python3
# -*- coding:UTF-8 -*-

class Solution:

    # Solution 1
    def sortedSquares(self, nums: list[int]) -> list[int]:
        answer = [None]*len(nums)
        left = 0
        right = len(nums) - 1
        i=len(nums) - 1
        while left <= right:
            if nums[left] * nums[left] < nums[right]* nums[right]:
                answer[i] = nums[right] * nums[right]
                right-=1
                i-=1
            else:
                answer[i] = nums[left] * nums[left]
                left+=1
                i-=1
        return answer
            

if __name__ == '__main__':
    test_data = [-6,-2,7,9,13,15,19]
    solution = Solution()
    print(solution.sortedSquares(test_data))

