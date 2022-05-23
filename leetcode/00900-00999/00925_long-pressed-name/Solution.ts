/**
 * ID:    00925
 * Title: Long Pressed Name
 * Difficulty: Easy
 * Description: Your friend is typing his name into a keyboard. Sometimes, when typing a character c, the key might get long pressed, and the character will be typed 1 or more times.
 *
 * You examine the typed characters of the keyboard. Return True if it is possible that it was your friends name, with some characters (possibly none) being long pressed.
 *
 * Example 1:
 *
 * Input: name = "alex", typed = "aaleex" Output: true Explanation: 'a' and 'e' in 'alex' were long pressed.
 *
 * Example 2:
 *
 * Input: name = "saeed", typed = "ssaaedd" Output: false Explanation: 'e' must have been pressed twice, but it was not in the typed output.
 *
 * Constraints:
 *
 * 1 <= name.length, typed.length <= 1000
 * name and typed consist of only lowercase English letters.
 */
function isLongPressedName(name: string, typed: string): boolean {
  let pre = name[0]
  let n = 0
  for (let i = 0; i < typed.length; i++) {
    if (name[n] === typed[i]) {
      pre = name[n]
      n++
    } else if (pre !== typed[i]) { // not long pressed
      return false
    }
  }
  if (n < name.length)
    return false
  return true
};

function test_00925() {
  let name = "alex", typed = "aaleex"
  console.log(isLongPressedName(name, typed));
  name = "saeed", typed = "ssaaedd"
  console.log(isLongPressedName(name, typed));
  name = "alex", typed = "ale"
  console.log(isLongPressedName(name, typed));
  name = "pyplrz", typed = "ppyypllr"
  console.log(isLongPressedName(name, typed));
}

test_00925()
