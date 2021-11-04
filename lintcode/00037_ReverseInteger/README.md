# 00037. Reverse Integer

Reverse a 3-digit number
 
## 题目大意
反转一个只有3位数的整数。

## Example 1:
```
Input : number = 123
Output : 321
```
## Example 2:
```
Input: number = 900
Output: 9
```

## Constraints:
```
你可以假设输入一定是一个只有三位数的整数，这个整数大于等于100，小于1000。
```

# Solutions

## Solution 1
### Go
```go
func reverseInteger(number int) int {
	// write your code here
	last := number % 10
	middle := (number % 100) / 10
	high := number / 100
	return last*100 + middle*10 + high
}
```