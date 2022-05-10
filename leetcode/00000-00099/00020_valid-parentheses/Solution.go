package main

import "fmt"

// Solution 1
func isValid1(s string) bool {
	stack := make([]byte, 0)
	for _, v := range []byte(s) {
		if v == '{' || v == '[' || v == '(' {
			stack = append(stack, v)
		} else {
			// 第一种情况 是遍历字符串匹配的过程中，栈已经为空了，没有匹配的字符了，说明右括号没有找到对应的左括号 return false
			if len(stack) == 0 {
				return false
			}
			// 出栈
			element := stack[len(stack)-1]
			stack = stack[:len(stack)-1]
			if v == '}' && element != '{' ||
				v == ']' && element != '[' ||
				v == ')' && element != '(' {
				// 第二种情况 遍历字符串匹配的过程中，发现栈里没有我们要匹配的字符。所以return false
				return false
			}
		}
	}
	// 第三种情况 此时我们已经遍历完了字符串，但是栈不为空，说明有相应的左括号没有右括号来匹配，所以return false，否则就return true
	if len(stack) > 0 {
		return false
	}
	return true
}

// Solution 2 直接将右括号入栈
func isValid(s string) bool {
	stack := make([]byte, 0)
	for _, v := range []byte(s) {
		if v == '{' {
			stack = append(stack, '}')
		} else if v == '[' {
			stack = append(stack, ']')
		} else if v == '(' {
			stack = append(stack, ')')
		} else {
			// 第一种情况 是遍历字符串匹配的过程中，栈已经为空了，没有匹配的字符了，说明右括号没有找到对应的左括号 return false
			if len(stack) == 0 {
				return false
			}
			// 第二种情况 遍历字符串匹配的过程中，发现栈里没有我们要匹配的字符。所以return false
			if v != stack[len(stack)-1] {
				return false
			}
			// 出栈
			stack = stack[:len(stack)-1]
		}
	}
	// 第三种情况 此时我们已经遍历完了字符串，但是栈不为空，说明有相应的左括号没有右括号来匹配，所以return false，否则就return true
	if len(stack) > 0 {
		return false
	}
	return true
}

func main() {
	fmt.Println(isValid("{[()]}"))
	fmt.Println(isValid("{[("))
	fmt.Println(isValid("]"))
}
