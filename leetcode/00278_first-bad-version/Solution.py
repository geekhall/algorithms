#!/usr/bin/env python3
# -*- coding:UTF-8 -*-

def isBadVersion(n):
    if n>= 4:
        return True
    else :
        return False
        
class Solution:

    # Solution 1
    def firstBadVersion(self, n):
        """
        :type n: int
        :rtype: int
        """
        start = 1
        end = n
        while start <= end:
            middle = (start + end)>>1
            if isBadVersion(middle):
                end = middle - 1
            else:
                start = middle + 1
        return start
        
if __name__ == '__main__':
    solution = Solution()
    print(solution.firstBadVersion(500))

