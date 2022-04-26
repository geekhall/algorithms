// Given an array of strings words, return the first palindromic string in the array. If there is no such string, return an empty string "".
// A string is palindromic if it reads the same forward and backward.

function isPalindrome(s: string): boolean {
  let n = s.length
  let half = Math.floor(n / 2)
  for (let i = 0; i < half; i++) {
    if (s.charAt(i) !== s.charAt(n - i - 1))
      return false
  }
  return true
}

function firstPalindrome(words: string[]): string {
  for (let i = 0; i < words.length; i++) {
    if (isPalindrome(words[i]))
      return words[i]
  }
  return ""
};

function test_02108() {
  // Input: words = ["abc","car","ada","racecar","cool"]
  // Output: "ada"
  // Explanation: The first string that is palindromic is "ada".
  // Note that "racecar" is also palindromic, but it is not the first.
  console.log(firstPalindrome(["abc", "car", "ada", "racecar", "cool"]));  // "ada"

  // Input: words = ["notapalindrome","racecar"]
  // Output: "racecar"
  // Explanation: The first and only string that is palindromic is "racecar".
  console.log(firstPalindrome(["notapalindrome", "racecar"]));

  // Input: words = ["def","ghi"]
  // Output: ""
  // Explanation: There are no palindromic strings, so the empty string is returned.
  console.log(firstPalindrome(["def", "ghi"]));

}
test_02108()


