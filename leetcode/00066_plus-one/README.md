# 00066. PlusOne

You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits.

## 题目大意

给定一个由 整数 组成的 非空 数组所表示的非负整数，在该数的基础上加一。

最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。

你可以假设除了整数 0 之外，这个整数不会以零开头。

## Example 1

```txt
输入：digits = [1,2,3]
输出：[1,2,4]
解释：输入数组表示数字 123。
```

## Example 2

```txt
输入：digits = [4,3,2,1]
输出：[4,3,2,2]
解释：输入数组表示数字 4321。
```

## Example 3

```txt
输入：digits = [0]
输出：[1]
```

## Constraints

```txt
1 <= digits.length <= 100
0 <= digits[i] <= 9
```

## Solution 1

按照题目意思做就可以了，注意高位为0时需要补1

### Go

```go
func plusOne(digits []int) []int {
 for i := len(digits) - 1; i >= 0; i-- {
  digits[i]++
  if digits[i] != 10 {
   // no carry
   return digits
  }
  // carry
  digits[i] = 0
 }
 // all carry
 digits[0] = 1
 digits = append(digits, 0)
 return digits
}

```
