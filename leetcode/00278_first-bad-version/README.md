# 00278. First Bad Version

You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.

Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.

You are given an API bool isBadVersion(version) which returns whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.

## Example 1

```txt
Input: n = 5, bad = 4没那么
Output: 4
Explanation:
call isBadVersion(3) -> false
call isBadVersion(5) -> true
call isBadVersion(4) -> true
Then 4 is the first bad version.
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
public int firstBadVersion(int n) {
    int start = 1;
    int end = n;
    int pos = 0;
    while ( start <= end ) {
        int middle = start + ((end - start)>>1);
        if ( isBadVersion(middle) ) {
            pos = middle;
            end = middle - 1;
        } else {
            start = middle + 1;
        }
    }
    return pos;
}
```

### Python

```python
class Solution:
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
        
```

### Go

```go
/** 
 * Forward declaration of isBadVersion API.
 * @param   version   your guess about first bad version
 * @return          true if current version is bad 
 *             false if current version is good
 * func isBadVersion(version int) bool;
 */

func firstBadVersion(n int) int {
    start, end := 1, n
 for start <= end {
  middle := (start + end) >> 1
  if isBadVersion(middle) {
   end = middle - 1
  } else {
   start = middle + 1
  }
 }
 return start    
}
```
