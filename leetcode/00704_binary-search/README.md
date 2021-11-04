# 00704. Binary Search

Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.

## Example 1

```txt
Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4
```

## Example 2

```txt
Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1
```

## Constraints

```txt
1 <= nums.length <= 104
-104 < nums[i], target < 104
All the integers in nums are unique.
nums is sorted in ascending order.
```

## Solution 1

### Java

```java
public int search(int[] nums, int target) {
    int left= 0;
    int right = nums.length -1;
    while(left <= right){
        int middle = left + ((right - left) >> 1);
        if (nums[middle] > target){
            right = middle - 1;
        } else if (nums[middle] < target) {
            left = middle + 1;
        } else {
            return middle;
        }
    }
    return -1;
}
```

### Python

```python
def search(self, nums: List[int], target: int) -> int:
    left = 0
    right = len(nums) - 1
    while left <= right:    # 易错点：这里条件不能是 '<'， 当数组只有一个元素，且元素等于target时，返回不正确
        middle = left + ((right - left) >> 1) # 使用 >> 效率更高一些
        if nums[middle] == target:
            return middle
        elif nums[middle] > target:
            right = middle - 1
        else:
            left = middle + 1
    return -1
```

### Go

```go
func search(nums []int, target int) int {
 for left, right := 0, len(nums)-1; left <= right; {
  middle := left + ((right - left) >> 1)
  if nums[middle] == target {
   return middle
  } else if nums[middle] > target {
   right = middle - 1
  } else {
   left = middle + 1
  }
 }
 return -1
}
```
