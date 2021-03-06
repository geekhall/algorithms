/**
 * ID:    01678
 * Title: Goal Parser Interpretation
 * Difficulty: Easy
 * Description: You own a Goal Parser that can interpret a string command. The command consists of an alphabet of "G", "()" and/or "(al)" in some order. The Goal Parser will interpret "G" as the string "G", "()" as the string "o", and "(al)" as the string "al". The interpreted strings are then concatenated in the original order.
 *
 * Given the string command, return the Goal Parser 's interpretation of command.
 *
 * Example 1:
 *
 * Input: command = "G()(al)" Output:"Goal" Explanation: The Goal Parser interprets the command as follows: G -> G () -> o (al) -> al The final concatenated result is "Goal".
 *
 * Example 2:
 *
 * Input: command = "G()()()()(al)" Output:"Gooooal"
 *
 * Example 3:
 *
 * Input: command = "(al)G(al)()()G" Output:"alGalooG"
 *
 * Constraints:
 *
 * 1 <= command.length <= 100
 * command consists of "G", "()", and/or "(al)" in some order.
 */
function interpret(command: string): string {
  let res: string[] = []
  for (let i = 0; i < command.length; i++) {
    if (command[i] === 'G') {
      res.push('G')
    } else { // case '()'
      if (i + 1 < command.length && command[i + 1] == ')') {
        res.push('o')
        i++
      } else { // case '(al)'
        res.push('al')
        i += 3
      }
    }
  }
  return res.join('')
};

function test_01678() {
  let command = "G()(al)"
  console.log(interpret(command));
  command = "G()()()()(al)"
  console.log(interpret(command));
  command = "(al)G(al)()()G"
  console.log(interpret(command));
}

test_01678()
