/**
 * ID:    01704
 * Title: Determine if String Halves Are Alike
 * Difficulty: Easy
 * Description: You are given a string s of even length. Split this string into two halves of equal lengths, and let a be the first half and b be the second half.
 *
 * Two strings are alike if they have the same number of vowels ('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'). Notice that s contains uppercase and lowercase letters.
 *
 * Return true if a and b are alike. Otherwise, return false.
 *
 * Example 1:
 *
 * Input: s = "book" Output: true Explanation: a = "b o" and b = " o k". a has 1 vowel and b has 1 vowel. Therefore, they are alike.
 *
 * Example 2:
 *
 * Input: s = "textbook" Output: false Explanation: a = "t e xt" and b = "b oo k". a has 1 vowel whereas b has 2. Therefore, they are not alike. Notice that the vowel o is counted twice.
 *
 * Constraints:
 *
 * 2 <= s.length <= 1000
 * s.length is even.
 * s consists of uppercase and lowercase letters.
 */
function halvesAreAlike(s: string): boolean {
  let half = s.length / 2
  let front = 0
  let back = 0
  for (let i = 0; i < half; i++) {
    if (s[i] === 'a' || s[i] === 'e' || s[i] === 'i' || s[i] === 'o' || s[i] === 'u' ||
      s[i] === 'A' || s[i] === 'E' || s[i] === 'I' || s[i] === 'O' || s[i] === 'U') {
      front++
    }
  }
  for (let i = half; i < s.length; i++) {
    if (s[i] === 'a' || s[i] === 'e' || s[i] === 'i' || s[i] === 'o' || s[i] === 'u' ||
      s[i] === 'A' || s[i] === 'E' || s[i] === 'I' || s[i] === 'O' || s[i] === 'U') {
      back++
    }
  }
  return front === back
};

function test_01704() {
  let s = "book"
  console.log(halvesAreAlike(s));
  s = "textbook"
  console.log(halvesAreAlike(s));

}

test_01704()
