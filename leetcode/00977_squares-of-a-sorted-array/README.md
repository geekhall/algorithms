# 00000. Squares of a Sorted Array

Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

## Example 1

```txt
Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].
```

## Example 2

```txt
Input: nums = [-7,-3,2,3,11]
Output: [4,9,9,49,121]
```

## Constraints

```txt
1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums is sorted in non-decreasing order.

```

## Solution 1

使用双指针，左右分别取绝对值比较后依次插入。

### Go

```go
func sortedSquares(nums []int) []int {
 answer := make([]int, len(nums))
 for left, right, i := 0, len(nums)-1, len(answer)-1; i >= 0; i-- {
  // if math.Abs(float64(nums[left])) > math.Abs(float64(nums[right])) { // also ok
  if nums[left]*nums[left] > nums[right]*nums[right] {
   answer[i] = nums[left] * nums[left]
   left++
  } else {
   answer[i] = nums[right] * nums[right]
   right--
  }
 }
 return answer
}

```

```python
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
```
