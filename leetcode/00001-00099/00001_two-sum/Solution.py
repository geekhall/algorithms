#!/usr/bin/env python3
# -*- coding:UTF-8 -*-

class Solution:

    # Solution 1
    # We can use two for loops to loop through the array 
    # and find the indices of the two numbers that add up to the target number.
    # 使用双循环，不推荐。
    def twoSum1(self, nums: list[int], target: int) -> list[int]:
        for i in range(len(nums) - 1):
            for j in range(i+1, len(nums)):
                if nums[i] + nums[j] == target:
                    return [i, j]
        return []

    # Solution 2
    # O(n) time, O(n) space 
    # We can use a hash table to store the numbers as keys and the indices as values.
    # Then we check to see if the difference (target - number) is in the hash table. 
    # If it is, return both the index of the number and the index of the difference.

    # 使用一个HashTable来存储原数组（值作为Key，索引作为Value）
    # 然后查看target - number是否在HashTable中存在，
    # 存在则直接返回HashTable的值，和原数组的索引值，否则继续处理。
    def twoSum2(self, nums: list[int], target: int) -> list[int]:
        values = {}
        for i, num in enumerate(nums):
            another = target - num
            if another in values:
                return [values[another], i]
            values[num] = i
        return []

    # Solution 3
    # O(nlogn) time, O(1) space
    # You can use the two pointer method. 
    # After sorting the array and creating an array of the numbers and their indices, 
    # create two pointers i and j where i = 0 and j = len(array)-1. 
    # If the sum is smaller than target, increment i, if larger, increment j. 
    # If equal, return the indices.。
    # 使用双指针
    # 将原数组排序后使用双指针向内遍历查找
    def twoSum3(self, nums: list[int], target: int) -> list[int]:
        i = 0
        j = len(nums) - 1
        # [num, index]
        sortedNums = sorted(zip(nums, range(len(nums))))
        while i < j:
            if sortedNums[i][0] + sortedNums[j][0] == target:
                return [sortedNums[i][1], sortedNums[j][1]]
            elif sortedNums[i][0] + sortedNums[j][0] < target:
                i += 1
            elif sortedNums[i][0] + sortedNums[j][0] > target:
                j -= 1
        return []

if __name__ == '__main__':
    test_arr = [2,6,7,9,1,3,14,8]
    target = 9
    solution = Solution()
    print(solution.twoSum1(test_arr, target))
    print(solution.twoSum2(test_arr, target))
    print(solution.twoSum3(test_arr, target))

