/**
 * ID:    00402
 * Title: Remove K Digits
 * Difficulty: Medium
 * Description: Given string num representing a non-negative integer num, and an integer k, return the smallest possible integer after removing k digits from num.
 *
 * Example 1:
 *
 * Input: num = "1432219", k = 3 Output:"1219" Explanation: Remove the three digits 4, 3, and 2 to form the new number 1219 which is the smallest.
 *
 * Example 2:
 *
 * Input: num = "10200", k = 1 Output:"200" Explanation: Remove the leading 1 and the number is 200. Note that the output must not contain leading zeroes.
 *
 * Example 3:
 *
 * Input: num = "10", k = 2 Output:"0" Explanation: Remove all the digits from the number and it is left with nothing which is 0.
 *
 * Constraints:
 *
 * 1 <= k <= num.length <= 10 5
 * num consists of only digits.
 * num does not have any leading zeros except for the zero itself.
 */
function removeKdigits(num: string, k: number): string {
  if (k === num.length)
    return '0'

  let stack = new Array()
  for (let i = 0; i < num.length; i++) {
    while (stack.length > 0 && k > 0 && num[i] < stack[stack.length - 1]) {
      stack.pop()
      k--
    }
    stack.push(num[i])
  }
  // in case k is still bigger than 0
  // e.g. num=23456 and k = 2
  // every number is bigger than prior digit,
  // k will equal to 2 when the first loop end.
  while (k > 0) {
    stack.pop()
    k--
  }
  // remove the leading '0' from stack
  while (stack[0] === '0' && stack.length > 1) {
    stack.shift()
  }

  return stack.join('')
};

function test_00402() {
  let num = "2436159", k = 3
  console.log(removeKdigits(num, k));
  num = "8436159", k = 3
  console.log(removeKdigits(num, k));
  num = "10200", k = 1
  console.log(removeKdigits(num, k));
  num = "10", k = 1
  console.log(removeKdigits(num, k));
  num = "100", k = 1
  console.log(removeKdigits(num, k));
}

test_00402()
