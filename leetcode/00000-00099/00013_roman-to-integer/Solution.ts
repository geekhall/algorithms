/**
 * ID:    00013
 * Title: Roman to Integer
 * Difficulty: Easy
 * Description: Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
 *
 * Symbol Value I 1 V 5 X 10 L 50 C 100 D 500 M 1000
 *
 * For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.
 *
 * Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:
 *
 * I can be placed before V (5) and X (10) to make 4 and 9.
 * X can be placed before L (50) and C (100) to make 40 and 90.
 * C can be placed before D (500) and M (1000) to make 400 and 900.
 *
 * Given a roman numeral, convert it to an integer.
 *
 * Example 1:
 *
 * Input: s = "III" Output: 3 Explanation: III = 3.
 *
 * Example 2:
 *
 * Input: s = "LVIII" Output: 58 Explanation: L = 50, V= 5, III = 3.
 *
 * Example 3:
 *
 * Input: s = "MCMXCIV" Output: 1994 Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
 *
 * Constraints:
 *
 * 1 <= s.length <= 15
 * s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
 * It is guaranteed that s is a valid roman numeral in the range [1, 3999].
 */
// Roman numerals are represented by
// seven different symbols: I, V, X, L, C, D and M.

function romanToInt(s: string): number {
  let m = new Map()
  m.set('I', 1)
  m.set('V', 5)
  m.set('X', 10)
  m.set('L', 50)
  m.set('C', 100)
  m.set('D', 500)
  m.set('M', 1000)
  let n = s.length
  let res = 0
  if (n === 1)
    return m.get(s)

  for (let i = 1; i < n; i++) {
    let pre = m.get(s.charAt(i - 1))
    let cur = m.get(s.charAt(i))
    if ((pre === 1 && (cur === 5 || cur === 10)) ||
      (pre === 10 && (cur === 50 || cur === 100)) ||
      (pre === 100 && (cur === 500 || cur === 1000))
    ) {
      res -= pre
    } else {
      res += pre
    }
  }
  res += m.get(s.charAt(n - 1))
  return res
};

function test_00013() {
  console.log(romanToInt("V"));
  console.log(romanToInt("IV"));
  console.log(romanToInt("VI"));
  console.log(romanToInt("VIII"));
  console.log(romanToInt("DCCLXXVIII"));
  console.log(romanToInt("MMCM"));
}

test_00013()

