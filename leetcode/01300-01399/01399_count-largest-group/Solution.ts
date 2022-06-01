/**
 * ID:    01399
 * Title: Count Largest Group
 * Difficulty: Easy
 * Description: You are given an integer n.
 *
 * Each number from 1 to n is grouped according to the sum of its digits.
 *
 * Return the number of groups that have the largest size.
 *
 * Example 1:
 *
 * Input: n = 13 Output: 4 Explanation: There are 9 groups in total, they are grouped according sum of its digits of numbers from 1 to 13: [1,10], [2,11], [3,12], [4,13], [5], [6], [7], [8], [9]. There are 4 groups with largest size.
 *
 * Example 2:
 *
 * Input: n = 2 Output: 2 Explanation: There are 2 groups [1], [2] of size 1.
 *
 * Constraints:
 *
 * 1 <= n <= 10 4
 */
function countLargestGroup(n: number): number {
  let m = new Map()
  let max = 0;
  for (let i = 1; i <= n; i++) {
    let sum = 0;
    let num = i;
    while (num > 0) {
      sum += num % 10;
      num = Math.trunc(num / 10);
    }
    if (m.has(sum)) {
      m.set(sum, m.get(sum) + 1);
    } else {
      m.set(sum, 1);
    }
    if (m.get(sum) > max) {
      max = m.get(sum);
    }
  }
  let newMap = new Map([...m.entries()].sort((a, b) => b[1] - a[1]))
  let count = 0;
  for (let [key, value] of newMap) {
    if (value === max) {
      count++;
    } else {
      break;
    }
  }

  return count;
};

function test_01399() {
  console.log(countLargestGroup(13));
  console.log(countLargestGroup(2));

}

test_01399()
