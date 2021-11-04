# 0001 TwoSum

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

* Example 1:

```txt
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].
```

* Example 2:

```txt
Input: nums = [3,2,4], target = 6
Output: [1,2]
```

* Example 3:

```txt
Input: nums = [3,3], target = 6
Output: [0,1]
```

Constraints:

```txt
2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.
```

## Solution 1

*$O(n^2) time， O(1) space$*

We can use two for loops to loop through the array

and find the indices of the two numbers that add up to the target number.

使用双循环，不推荐。

### Java

```java
public static int[] findTwoSum1(int [] nums, int target){
    for (int i = 0; i < nums.length - 1; i++){
        for (int j = i + 1; j<nums.length; j++){
            if (nums[i] + nums[j] == target) {
                return new int[]{i, j};
            }
        }
    }
    return new int[]{};
} 
```

### Go

```go
func twoSum1(nums []int, target int) []int {
 for i := 0; i < len(nums)-1; i++ {
  for j := i + 1; j < len(nums); j++ {
   if nums[i]+nums[j] == target {
    return []int{i, j}
   }
  }
 }
 return nil
}
```

### Python3

```python
def twoSum1(self, nums: list[int], target: int) -> list[int]:
    for i in range(len(nums) - 1):
        for j in range(i+1, len(nums)):
            if nums[i] + nums[j] == target:
                return [i, j]
    return []
```

## Solution 2

*$O(n) time, O(n) space$*

We can use a hash table to store the numbers as keys and the indices as values.

Then we check to see if the difference (target - number) is in the hash table.

If it is, return both the index of the number and the index of the difference.

使用一个HashTable来存储原数组（值作为Key，索引作为Value）

然后查看target - number是否在HashTable中存在，

存在则直接返回HashTable的值，和原数组的索引值，否则继续处理。

### Java

```java
public static int[] findTwoSum2(int [] nums, int target){
    Map<Integer, Integer> numMap = new HashMap<>();

    for (int i = 0; i < nums.length; i++){
        int another = target - nums[i];
        if (numMap.containsKey(another)){
            return new int [] {numMap.get(another), i};
        } else {
            numMap.put(nums[i], i);
        }   
    }
    return new int[]{};
}
```

### Go

```Go
func twoSum2(nums []int, target int) []int {
 m := make(map[int]int)
 for i := 0; i < len(nums); i++ {
  another := target - nums[i]
  if _, ok := m[another]; ok {
   return []int{m[another], i}
  }
  m[nums[i]] = i
 }
 return nil
}

```

### Python3

```python
def twoSum2(self, nums: list[int], target: int) -> list[int]:
    values = {}
    for i, num in enumerate(nums):
        another = target - num
        if another in values:
            return [values[another], i]
        values[num] = i
    return []
```

## Solution 3

*O(nlogn) time, O(1) space*
You can use the two pointer method.

After sorting the array and creating an array of the numbers and their indices,

create two pointers i and j where i = 0 and j = len(array)-1.

If the sum is smaller than target, increment i, if larger, decrement j.

If equal, return the indices.。

使用双指针

将原数组排序后使用双指针向内遍历查找，

### Java

```java
public static int[] findTwoSum3(int []nums, int target){        
    int[][] mergedNums = new int[nums.length][];
    for (int i = 0; i< nums.length; i++){
        mergedNums[i] = new int[2];
        mergedNums[i][0] = nums[i];
        mergedNums[i][1] = i;
    }
    Arrays.sort(mergedNums, new Comparator<int []>(){
        @Override
        public int compare(int[] a, int[] b) {
            // TODO Auto-generated method stub
            return a[0] - b[0];
        }
    });

    int i=0;
    int j = nums.length - 1;
    while( i < j ){
        if (mergedNums[i][0] + mergedNums[j][0] == target) {
            return new int[]{mergedNums[i][1], mergedNums[j][1]};
        } else if (mergedNums[i][0] + mergedNums[j][0] < target) {
            i++;
        } else if (mergedNums[i][0] + mergedNums[j][0] > target) {
            j--;
        }
    }
    return new int[]{};
}
```

### Go

```Go

```

### Python3

```python
def twoSum3(self, nums: list[int], target: int) -> list[int]:
        i = 0
        j = len(nums) - 1
        sortedNums = sorted(zip(nums, range(len(nums))))
        while i < j:
            if sortedNums[i][0] + sortedNums[j][0] == target:
                return [sortedNums[i][1], sortedNums[j][1]]
            elif sortedNums[i][0] + sortedNums[j][0] < target:
                i += 1
            elif sortedNums[i][0] + sortedNums[j][0] > target:
                j -= 1
        return []
```
