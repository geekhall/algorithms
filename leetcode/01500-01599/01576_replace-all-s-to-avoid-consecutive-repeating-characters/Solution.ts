/**
 * ID:    01576
 * Title: Replace All ?'s to Avoid Consecutive Repeating Characters
 * Difficulty: Easy
 * Description: Given a string s containing only lowercase English letters and the '?' character, convert all the '?' characters into lowercase letters such that the final string does not contain any consecutive repeating characters. You cannot modify the non '?' characters.
 *
 * It is guaranteed that there are no consecutive repeating characters in the given string except for '?'.
 *
 * Return the final string after all the conversions (possibly zero) have been made. If there is more than one solution, return any of them. It can be shown that an answer is always possible with the given constraints.
 *
 * Example 1:
 *
 * Input: s = "?zs" Output:"azs" Explanation: There are 25 solutions for this problem. From "azs" to "yzs", all are valid. Only "z" is an invalid modification as the string will consist of consecutive repeating characters in "zzs".
 *
 * Example 2:
 *
 * Input: s = "ubv?w" Output:"ubvaw" Explanation: There are 24 solutions for this problem. Only "v" and "w" are invalid modifications as the strings will consist of consecutive repeating characters in "ubvvw" and "ubvww".
 *
 * Constraints:
 *
 * 1 <= s.length <= 100
 * s consist of lowercase English letters and '?'.
 */
function modifyString(s: string): string {
  if (s.length === 1) {
    if (s === '?') {
      return 'a'
    } else {
      return s
    }
  }
  let res = ''
  let pre = ''
  if (s[0] === '?') {
    if (s[1] === '?') {
      pre = 'a'
    } else {
      if (s[1] === 'z') {
        pre = 'a'
      } else {
        pre = String.fromCharCode(s[1].charCodeAt(0) + 1)
      }
    }
  } else {
    pre = s[0]
  }
  res += pre
  for (let i = 1; i < s.length - 1; i++) {
    if (s[i] === '?') {
      if (pre === 'z') {
        pre = 'a'
      } else {
        pre = String.fromCharCode(pre.charCodeAt(0) + 1)
      }
      // check if pre is duplicated with the next char
      if (pre === s[i + 1]) {
        if (pre === 'z') {
          pre = 'a'
        } else {
          pre = String.fromCharCode(pre.charCodeAt(0) + 1)
        }
      }
    } else {
      pre = s[i]
    }
    res += pre
  }
  // process last char
  if (s[s.length - 1] === '?') {
    if (pre === 'z') {
      pre = 'a'
    } else {
      pre = String.fromCharCode(pre.charCodeAt(0) + 1)
    }
    res += pre
  } else {
    res += s[s.length - 1]
  }
  return res
}
function test_01576() {
  let s = "?zs"
  console.log(modifyString(s));
  s = "ubv?w"
  console.log(modifyString(s));
  s = "y?z"
  console.log(modifyString(s));
  s = "?a?ub???w?b"
  console.log(modifyString(s));

}

test_01576()
