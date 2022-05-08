#!/usr/bin/env python3
# -*- coding:UTF-8 -*-

class Solution(object):

    # Solution 1
    def searchInsert(self, nums, target):
        """ 
        :type nums: List[int]
        :type target: int
        :rtype: int
        """
        start = 0
        end = len(nums) - 1
        while start <= end:
            # 这里需要注意 右移运算符">>"的优先级比加减运算符要低，下面的写法是不对的：
            # middle = start + (end - start) >> 1
            middle = start + ((end - start) >> 1)
            if nums[middle] >= target:
                end = middle - 1
            else :
                if middle == end or nums[middle + 1] >= target:
                    return middle + 1
                start = middle + 1  
        return start
        
if __name__ == '__main__':
    solution = Solution()
    test_data = [1,3,5,6]
    print(solution.searchInsert(test_data, 7))

