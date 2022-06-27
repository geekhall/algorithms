/**
 * ID:    02116
 * Title: Check if a Parentheses String Can Be Valid
 * Difficulty: Medium
 * Description: A parentheses string is a non-empty string consisting only of '(' and ')'. It is valid if any of the following conditions is true:
 *
 * It is ().
 * It can be written as AB (A concatenated with B), where A and B are valid parentheses strings.
 * It can be written as (A), where A is a valid parentheses string.
 *
 * You are given a parentheses string s and a string locked, both of length n. locked is a binary string consisting only of '0' s and '1' s. For each index i of locked,
 *
 * If locked[i] is '1', you cannot change s[i].
 * But if locked[i] is '0', you can change s[i] to either '(' or ')'.
 *
 * Return true if you can make s a valid parentheses string. Otherwise, return false.
 *
 * Example 1:
 *
 * Input: s = "))()))", locked = "010100" Output: true Explanation: locked[1] == '1' and locked[3] == '1', so we cannot change s[1] or s[3]. We change s[0] and s[4] to '(' while leaving s[2] and s[5] unchanged to make s valid.
 *
 * Example 2:
 *
 * Input: s = "()()", locked = "0000" Output: true Explanation: We do not need to make any changes because s is already valid.
 *
 * Example 3:
 *
 * Input: s = ")", locked = "0" Output: false Explanation: locked permits us to change s[0]. Changing s[0] to either '(' or ')' will not make s valid.
 *
 * Constraints:
 *
 * n == s.length == locked.length
 * 1 <= n <= 10 5
 * s[i] is either '(' or ')'.
 * locked[i] is either '0' or '1'.
 */
// 100% 100%
function canBeValid(s: string, locked: string): boolean {
  // 从左向右逐个检查锁死的'('是否合法，从右向左逐个检查锁死的')'是否合法
  const validate = (op: string): boolean => {
    let bal = 0;  // 缺失的括号的数量
    let wild = 0; // 可随意支配的括号的数量
    let size = s.length;
    let start = (op === '(') ? 0 : size - 1
    let dir = (op === '(') ? 1 : -1
    // wild + bal >=0 保证了开头锁死的')'或者末尾锁死的'('的情况，返回失败
    for (let i = start; i >= 0 && i < size && wild + bal >= 0; i += dir) {
      if (locked.charAt(i) === '1') {
        bal += s.charAt(i) === op ? 1 : -1
      } else {
        ++wild;
      }
    }
    console.log("# ", bal, wild);
    return Math.abs(bal) <= wild;
  }
  return s.length % 2 === 0 && validate('(') && validate(')');
};

function test_02116() {
  let s = "()())(", locked = "000001"
  console.log(canBeValid(s, locked));
  s = "()()", locked = "0000"
  console.log(canBeValid(s, locked));
  s = ")", locked = "0"
  console.log(canBeValid(s, locked));
  s = "())(()(()(())()())(())((())(()())((())))))(((((((())(()))))(", locked = "100011110110011011010111100111011101111110000101001101001111"
  console.log(canBeValid(s, locked));

}

test_02116()
