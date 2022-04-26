// A phrase is a palindrome if,
// after converting all uppercase letters into lowercase letters
// and removing all non-alphanumeric characters,
// it reads the same forward and backward.
// Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.


function isPalindrome(s: string): boolean {
  let str = s.toLowerCase()
  let arr = []
  for (let i = 0; i < str.length; i++) {
    let c = str.charAt(i)
    if (c >= 'a' && c <= 'z' || c >= '0' && c <= '9') {
      arr.push(c)
    }
  }
  let n = arr.length
  let half = Math.floor(n / 2)
  for (let i = 0; i < half; i++) {
    if (arr[i] !== arr[n - i - 1])
      return false
  }
  return true
};

function test_00125() {
  // Input: s = "A man, a plan, a canal: Panama"
  // Output: true
  // Explanation: "amanaplanacanalpanama" is a palindrome.
  let str = "A man, a plan, a canal: Panama"
  console.log(isPalindrome(str));

  // Input: s = "race a car"
  // Output: false
  // Explanation: "raceacar" is not a palindrome.
  let str1 = "race a car"
  console.log(isPalindrome(str1));

  // Input: s = " "
  // Output: true
  // Explanation: s is an empty string "" after removing non-alphanumeric characters.
  // Since an empty string reads the same forward and backward, it is a palindrome.
  console.log(isPalindrome(" "));

}

test_00125()

// let str = "A man, a plan, a canal: Panama"
// console.log(str);
// str = str.toLowerCase()
// console.log(str);
// console.log(str.charAt(0));
// console.log(str.charAt(1));
// console.log(str.charAt(2));
// console.log(str.charAt(2) < 'a');
// console.log(str.charAt(2) > 'z');


