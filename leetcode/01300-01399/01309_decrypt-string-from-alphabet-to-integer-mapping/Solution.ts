/**
 * ID:    01309
 * Title: Decrypt String from Alphabet to Integer Mapping
 * Difficulty: Easy
 * Description: You are given a string s formed by digits and '#'. We want to map s to English lowercase characters as follows:
 *
 * Characters ('a' to 'i') are represented by ('1' to '9') respectively.
 * Characters ('j' to 'z') are represented by ('10#' to '26#') respectively.
 *
 * Return the string formed after mapping.
 *
 * The test cases are generated so that a unique mapping will always exist.
 *
 * Example 1:
 *
 * Input: s = "10#11#12" Output:"jkab" Explanation:"j" -> "10#" , "k" -> "11#" , "a" -> "1" , "b" -> "2".
 *
 * Example 2:
 *
 * Input: s = "1326#" Output:"acz"
 *
 * Constraints:
 *
 * 1 <= s.length <= 1000
 * s consists of digits and the '#' letter.
 * s will be a valid string such that mapping is always possible.
 */
function freqAlphabets(s: string): string {
  let res = ""
  for (let i = 0; i < s.length - 2;) {
    if (s[i + 2] === '#') {
      res += String.fromCharCode(parseInt(s.slice(i, i + 2)) + 96)
      i += 3
    } else {
      res += String.fromCharCode(parseInt(s.slice(i, i + 1)) + 96)
      i++
    }
  }
  if (s[s.length - 2] !== '#' && s[s.length - 1] !== '#') {
    res += String.fromCharCode(parseInt(s.slice(s.length - 2, s.length - 1)) + 96)
    res += String.fromCharCode(parseInt(s.slice(s.length - 1)) + 96)
  }
  if (s[s.length - 2] === '#' && s[s.length - 1] !== '#') {
    res += String.fromCharCode(parseInt(s.slice(s.length - 1)) + 96)
  };
  return res
}
function test_01309() {
  let s = "10#11#12"
  console.log(freqAlphabets(s));
  s = "1326#"
  console.log(freqAlphabets(s));
  s = "1326#4"
  console.log(freqAlphabets(s));

}

test_01309()
