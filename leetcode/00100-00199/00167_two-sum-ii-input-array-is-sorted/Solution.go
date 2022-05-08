package main

import "fmt"

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

func twoSum2(numbers []int, target int) []int {
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

func main() {
	testData := []int{2, 3, 7, 9, 11}
	res := twoSum2(testData, 9)
	fmt.Println(res)
}
