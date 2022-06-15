/**
 * ID:    00017
 * Title: Letter Combinations of a Phone Number
 * Difficulty: Medium
 * Description: Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.
 *
 * A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.
 *
 * Example 1:
 *
 * Input: digits = "23" Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
 *
 * Example 2:
 *
 * Input: digits = "" Output: []
 *
 * Example 3:
 *
 * Input: digits = "2" Output: ["a","b","c"]
 *
 * Constraints:
 *
 * 0 <= digits.length <= 4
 * digits[i] is a digit in the range ['2', '9'].
 */
/**
 *  i, j, k, cur, curMap, next:  0 0 0 [ '' ] abc [ 'a' ]
 *  i, j, k, cur, curMap, next:  0 1 0 [ '' ] abc [ 'a', 'b' ]
 *  i, j, k, cur, curMap, next:  0 2 0 [ '' ] abc [ 'a', 'b', 'c' ]
 *  i, j, k, cur, curMap, next:  1 0 0 [ 'a', 'b', 'c' ] def [ 'ad' ]
 *  i, j, k, cur, curMap, next:  1 0 1 [ 'a', 'b', 'c' ] def [ 'ad', 'bd' ]
 *  i, j, k, cur, curMap, next:  1 0 2 [ 'a', 'b', 'c' ] def [ 'ad', 'bd', 'cd' ]
 *  i, j, k, cur, curMap, next:  1 1 0 [ 'a', 'b', 'c' ] def [ 'ad', 'bd', 'cd', 'ae' ]
 *  i, j, k, cur, curMap, next:  1 1 1 [ 'a', 'b', 'c' ] def [ 'ad', 'bd', 'cd', 'ae', 'be' ]
 *  i, j, k, cur, curMap, next:  1 1 2 [ 'a', 'b', 'c' ] def [ 'ad', 'bd', 'cd', 'ae', 'be', 'ce' ]
 *  ...
 * @param digits
 * @returns
 */
function letterCombinations(digits: string): string[] {
  let res: string[] = []
  if (digits.length === 0) {
    return res
  }
  let map: string[] = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"]
  let cur: string[] = [""]
  for (let i = 0; i < digits.length; i++) {
    let curDigit = parseInt(digits[i])
    let curMap = map[curDigit]
    let next: string[] = []
    for (let j = 0; j < curMap.length; j++) {
      for (let k = 0; k < cur.length; k++) {
        next.push(cur[k] + curMap[j])
      }
    }
    cur = next
  }
  return cur
};

function test_00017() {
  let digits = "23"
  console.log(letterCombinations(digits));
  digits = "2"
  console.log(letterCombinations(digits));
  digits = ""
  console.log(letterCombinations(digits));
}

test_00017()
