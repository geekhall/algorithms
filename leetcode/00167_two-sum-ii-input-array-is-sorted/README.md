# 00167. Two Sum II - Input array is sorted

Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= first < second <= numbers.length.

Return the indices of the two numbers, index1 and index2, as an integer array [index1, index2] of length 2.

The tests are generated such that there is exactly one solution. You may not use the same element twice.

## Example 1

```txt
Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore index1 = 1, index2 = 2.
```

## Example 2

```txt
Input: numbers = [2,3,4], target = 6
Output: [1,3]
Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3.
```

## Example 3

```txt
Input: numbers = [-1,0], target = -1
Output: [1,2]
Explanation: The sum of 1 and 0 is -1. Therefore index1 = 1, index2 = 2.
```

## Constraints

```txt
2 <= numbers.length <= 3 * 104
-1000 <= numbers[i] <= 1000
numbers is sorted in non-decreasing order.
-1000 <= target <= 1000
The tests are generated such that there is exactly one solution.
```

## Solution 1

使用一个HashMap来存储原数组[value, index]，然后查看target - number是否在HashMap中存在

### Java

```java
public int[] twoSum(int[] numbers, int target) {
    Map<Integer, Integer> numbersMap = new HashMap<>();
    for (int i = 0; i < numbers.length; i++) {
        int another = target - numbers[i];
        if (numbersMap.containsKey(another)) {
            return new int[]{numbersMap.get(another) + 1, i+1};
        }
        numbersMap.put(numbers[i], i);
    }
    return new int[]{};
}
```

### Go

```go
func twoSum(numbers []int, target int) []int {
 numbersMap := make(map[int]int)
 for i := 0; i < len(numbers); i++ {
  another := target - numbers[i]
  _, ok := numbersMap[another]
  if ok {
   return []int{numbersMap[another] + 1, i + 1}
  } else {
   numbersMap[numbers[i]] = i
  }
 }
 return []int{}
}
```

### Python

```python
def twoSum(self, numbers: list[int], target: int) -> list[int]:
    i = 0
    j = len(numbers) - 1
    while i < j:
        if numbers[i] + numbers[j] == target:
            return [i+1, j+1]
        elif numbers[i] + numbers[j] < target:
            i += 1
        elif numbers[i] + numbers[j] > target:
            j -= 1
    return []
```

## Solution 2

使用双指针向内遍历查找

### Java

```java
public int[] twoSum(int[] numbers, int target) {
    // [num, index]
    int i=0;
    int j = numbers.length - 1;
    while( i < j ){
        if (numbers[i] + numbers[j] == target) {
            return new int[]{i+1, j+1};
        } else if (numbers[i] + numbers[j] < target) {
            i++;
        } else {
            j--;
        }
    }
    return new int[]{};
}
```

### Go

```go
func twoSum(numbers []int, target int) []int {
 for left, right := 0, len(numbers)-1; left < right; {
  if numbers[left]+numbers[right] == target {
   return []int{left + 1, right + 1}
  } else if numbers[left]+numbers[right] < target {
   left++
  } else {
   right--
  }
 }
 return []int{}
}

```

### Python

```python
def twoSum2(self, numbers: list[int], target: int) -> list[int]:
    dct = {}
    for i,v in enumerate(numbers, start=1):
        if target-v in dct :
            return [dct[target-v],i]
        dct[v]=i
```
