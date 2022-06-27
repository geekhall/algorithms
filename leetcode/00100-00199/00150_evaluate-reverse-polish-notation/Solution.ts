/**
 * ID:    00150
 * Title: Evaluate Reverse Polish Notation
 * Difficulty: Medium
 * Description: Evaluate the value of an arithmetic expression in Reverse Polish Notation.
 *
 * Valid operators are +, -, *, and /. Each operand may be an integer or another expression.
 *
 * Note that division between two integers should truncate toward zero.
 *
 * It is guaranteed that the given RPN expression is always valid. That means the expression would always evaluate to a result, and there will not be any division by zero operation.
 *
 * Example 1:
 *
 * Input: tokens = ["2","1","+","3","*"] Output: 9 Explanation: ((2 + 1) * 3) = 9
 *
 * Example 2:
 *
 * Input: tokens = ["4","13","5","/","+"] Output: 6 Explanation: (4 + (13 / 5)) = 6
 *
 * Example 3:
 *
 * Input: tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"] Output: 22 Explanation: ((10 * (6 / ((9 + 3) * -11))) + 17) + 5 = ((10 * (6 / (12 * -11))) + 17) + 5 = ((10 * (6 / -132)) + 17) + 5 = ((10 * 0) + 17) + 5 = (0 + 17) + 5 = 17 + 5 = 22
 *
 * Constraints:
 *
 * 1 <= tokens.length <= 10 4
 * tokens[i] is either an operator: "+", "-", "*", or "/", or an integer in the range [-200, 200].
 */
function evalRPN(tokens: string[]): number {
  const stack: number[] = [];
  for (let token of tokens) {
    if (token === '+') {
      stack.push(stack.pop()! + stack.pop()!);
    } else if (token === '-') {
      stack.push(-stack.pop()! + stack.pop()!);
    } else if (token === '*') {
      stack.push(stack.pop()! * stack.pop()!);
    } else if (token === '/') {
      let divisor = stack.pop()!;
      let dividend = stack.pop()!;
      if (divisor === 0) {
        stack.push(0);
      }
      let quotient = dividend / divisor;
      if (quotient < 0) {
        stack.push(Math.ceil(quotient));
      } else {
        stack.push(Math.floor(quotient));
      }
    } else {
      stack.push(parseInt(token));
    }
    console.log(stack)
  }
  return stack[0];
};

function test_00150() {
  let tokens = ["2", "1", "+", "3", "*"]
  console.log(evalRPN(tokens))
  tokens = ["4", "13", "5", "/", "+"]
  console.log(evalRPN(tokens))
  tokens = ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]
  console.log(evalRPN(tokens))

}

test_00150()
