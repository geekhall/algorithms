package main

import "fmt"

// Solution
// 滑动窗口算法
func lengthOfLongestSubstring(s string) int {
	// HashMap 记录每个字符是否出现过
	m := map[byte]int{}
	// 右指针初始化为-1
	ans, right := 0, -1
	n := len(s)
	// 左指针向右遍历
	for i := 0; i < n; i++ {
		// 删除Map中左侧的元素
		if i != 0 {
			delete(m, s[i-1])
		}
		// 右指针向右移动直到遇到重复元素，并向map中添加元素
		for ; right+1 < n && m[s[right+1]] == 0; right++ {
			m[s[right+1]]++
		}

		// 保存每轮的最大无重复次数
		if ans < right-i+1 {
			ans = right - i + 1
		}
	}
	return ans
}

func main() {
	test_data := "abcdssabcdefgs"
	res := lengthOfLongestSubstring(test_data)
	fmt.Println(res)
}
