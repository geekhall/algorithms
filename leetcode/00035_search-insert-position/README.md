# 00035. Search Insert Position

Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

## Example 1

```txt
Input: nums = [1,3,5,6], target = 5
Output: 2
```

## Example 2

```txt
Input: nums = [1,3,5,6], target = 2
Output: 1
```

## Example 3

```txt
Input: nums = [1,3,5,6], target = 7
Output: 4
```

## Example 4

```txt
Input: nums = [1,3,5,6], target = 0
Output: 0
```

## Example 5

```txt
Input: nums = [1], target = 0
Output: 0
```

## Constraints

```txt
1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums contains distinct values sorted in ascending order.
-104 <= target <= 104
```

## Solution 1

### Java

这里注意同样的算法使用Java会报Time Limit Exceeded。但是Python和Go的就都没问题。迷。。

```java
public int searchInsert(int[] nums, int target) {
    int start = 0;
    int end = nums.length;
    while ( start < end ) {
        int middle = start + (end - start)/2;
        if (nums[middle] == target){
            return middle;
        }else if ( nums[middle] > target ) {
            end = middle;
        } else {
            start = middle + 1;
        }
    }
    return start;
}
```

### Python

```python
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
```

### Go

```go
func searchInsert(nums []int, target int) int {
    start, end := 0, len(nums)-1
 for start <= end {
  middle := start + (end - start)>>1
  if nums[middle] >= target {
   end = middle - 1
  } else {
   if middle == end || nums[middle+1] >= target {
    return middle + 1
   }
   start = middle + 1
  }
 }
 return start
}
```
