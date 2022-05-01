# 00167. Two Sum II - Input Array Is Sorted

  _Read this in other languages:_
    [_English_](README.md)

<p>Given a <strong>1-indexed</strong> array of integers <code>numbers</code> that is already <strong><em>sorted in non-decreasing order</em></strong>, find two numbers such that they add up to a specific <code>target</code> number. Let these two numbers be <code>numbers[index<sub>1</sub>]</code> and <code>numbers[index<sub>2</sub>]</code> where <code>1 &lt;= index<sub>1</sub> &lt; index<sub>2</sub> &lt;= numbers.length</code>.</p>

<p>Return<em> the indices of the two numbers, </em><code>index<sub>1</sub></code><em> and </em><code>index<sub>2</sub></code><em>, <strong>added by one</strong> as an integer array </em><code>[index<sub>1</sub>, index<sub>2</sub>]</code><em> of length 2.</em></p>

<p>The tests are generated such that there is <strong>exactly one solution</strong>. You <strong>may not</strong> use the same element twice.</p>

<p>Your solution must use only constant extra space.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre>
<strong>Input:</strong> numbers = [<u>2</u>,<u>7</u>,11,15], target = 9
<strong>Output:</strong> [1,2]
<strong>Explanation:</strong> The sum of 2 and 7 is 9. Therefore, index<sub>1</sub> = 1, index<sub>2</sub> = 2. We return [1, 2].
</pre>

<p><strong>Example 2:</strong></p>

<pre>
<strong>Input:</strong> numbers = [<u>2</u>,3,<u>4</u>], target = 6
<strong>Output:</strong> [1,3]
<strong>Explanation:</strong> The sum of 2 and 4 is 6. Therefore index<sub>1</sub> = 1, index<sub>2</sub> = 3. We return [1, 3].
</pre>

<p><strong>Example 3:</strong></p>

<pre>
<strong>Input:</strong> numbers = [<u>-1</u>,<u>0</u>], target = -1
<strong>Output:</strong> [1,2]
<strong>Explanation:</strong> The sum of -1 and 0 is -1. Therefore index<sub>1</sub> = 1, index<sub>2</sub> = 2. We return [1, 2].
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>2 &lt;= numbers.length &lt;= 3 * 10<sup>4</sup></code></li>
	<li><code>-1000 &lt;= numbers[i] &lt;= 1000</code></li>
	<li><code>numbers</code> is sorted in <strong>non-decreasing order</strong>.</li>
	<li><code>-1000 &lt;= target &lt;= 1000</code></li>
	<li>The tests are generated such that there is <strong>exactly one solution</strong>.</li>
</ul>


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
