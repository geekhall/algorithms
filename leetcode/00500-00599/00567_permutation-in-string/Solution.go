package main

import "fmt"

// Solution 1
func checkInclusion(s1, s2 string) bool {
	n1, n2 := len(s1), len(s2)
	if n1 > n2 {
		return false
	}
	var cnt1, cnt2 [26]int
	// cnt1和cnt2 分别保存s1长度范围内的每个字母出现次数
	for i, _ := range s1 {
		cnt1[s1[i]-'a']++
		cnt2[s2[i]-'a']++
	}
	// 初始状态若前n1个字母满足排列组合条件则直接返回true
	if cnt1 == cnt2 {
		return true
	}
	// 指针右移同时滑动窗口头++ 尾--
	for i := n1; i < n2; i++ {
		cnt2[s2[i]-'a']++
		cnt2[s2[i-n1]-'a']--
		if cnt1 == cnt2 {
			return true
		}
	}
	return false
}

// Solution2 优化
func checkInclusion2(s1, s2 string) bool {
	n, m := len(s1), len(s2)
	if n > m {
		return false
	}
	cnt := [26]int{}
	for i, ch := range s1 {
		cnt[ch-'a']--
		cnt[s2[i]-'a']++
	}
	diff := 0
	for _, c := range cnt[:] {
		if c != 0 {
			diff++
		}
	}
	if diff == 0 {
		return true
	}
	for i := n; i < m; i++ {
		x, y := s2[i]-'a', s2[i-n]-'a'
		if x == y {
			continue
		}
		if cnt[x] == 0 {
			diff++
		}
		cnt[x]++
		if cnt[x] == 0 {
			diff--
		}
		if cnt[y] == 0 {
			diff++
		}
		cnt[y]--
		if cnt[y] == 0 {
			diff--
		}
		if diff == 0 {
			return true
		}
	}
	return false
}

// Solution3 双指针

func checkInclusion3(s1, s2 string) bool {
	n, m := len(s1), len(s2)
	if n > m {
		return false
	}
	cnt := [26]int{}
	for _, ch := range s1 {
		cnt[ch-'a']--
	}
	left := 0
	for right, ch := range s2 {
		x := ch - 'a'
		cnt[x]++
		for cnt[x] > 0 {
			cnt[s2[left]-'a']--
			left++
		}
		if right-left+1 == n {
			return true
		}
	}
	return false
}

func main() {
	// m1 := make(map[byte]int, 5)
	// m3 := make(map[byte]int, 5)
	// m1['a'] = 1
	// m1['b'] = 2
	// m1['c'] = 3
	// m1['d'] = 4
	// m1['e'] = 5
	// fmt.Println(m1)

	// copy_map(m3, m1)
	// copy_map(m3, m1)
	// fmt.Println(len(m3))
	s1 := "ab"
	s2 := "eidbaooo"
	res := checkInclusion(s1, s2)
	fmt.Println(res)
}
