package main

import "fmt"

/**
 * Forward declaration of isBadVersion API.
 * @param   version   your guess about first bad version
 * @return 	 	      true if current version is bad
 *			          false if current version is good
 * func isBadVersion(version int) bool;
 */
func isBadVersion(n int) bool {
	if n >= 4 {
		return true
	} else {
		return false
	}
}

/**
 * Forward declaration of isBadVersion API.
 * @param   version   your guess about first bad version
 * @return 	 	      true if current version is bad
 *			          false if current version is good
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

func main() {

	res := firstBadVersion(500)
	fmt.Println(res)
}
