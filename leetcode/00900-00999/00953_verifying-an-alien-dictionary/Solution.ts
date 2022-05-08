/**
 * ID:    00953
 * Title: Verifying an Alien Dictionary
 * Difficulty: Easy
 * Description: In an alien language, surprisingly, they also use English lowercase letters, but possibly in a different order. The order of the alphabet is some permutation of lowercase letters.
 *
 * Given a sequence of words written in the alien language, and the order of the alphabet, return true if and only if the given words are sorted lexicographically in this alien language.
 *
 * Example 1:
 *
 * Input: words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz" Output: true Explanation: As 'h' comes before 'l' in this language, then the sequence is sorted.
 *
 * Example 2:
 *
 * Input: words = ["word","world","row"], order = "worldabcefghijkmnpqstuvxyz" Output: false Explanation: As 'd' comes after 'l' in this language, then words[0] > words[1], hence the sequence is unsorted.
 *
 * Example 3:
 *
 * Input: words = ["apple","app"], order = "abcdefghijklmnopqrstuvwxyz" Output: false Explanation: The first three characters "app" match, and the second string is shorter (in size.) According to lexicographical rules "apple" > "app", because 'l' > '∅', where '∅' is defined as the blank character which is less than any other character (More info).
 *
 * Constraints:
 *
 * 1 <= words.length <= 100
 * 1 <= words[i].length <= 20
 * order.length == 26
 * All characters in words[i] and order are English lowercase letters.
 */
function isAlienSorted(words: string[], order: string): boolean {
  if (words.length < 2)
    return true
  else if (words.length === 2)
    return isAlienWordSorted(words[0], words[1], order)
  else {
    let half = Math.floor(words.length / 2)
    if (isAlienSorted(words.slice(0, half), order) &&
      isAlienSorted(words.slice(half), order) &&
      isAlienWordSorted(words[half - 1], words[half], order)) {
      return true
    }
    else
      return false
  }
};
function isAlienWordSorted(a: string, b: string, order: string): boolean {
  let minLength = a.length > b.length ? b.length : a.length
  for (let i = 0; i < minLength; i++) {
    if (order.indexOf(a[i]) !== order.indexOf(b[i]))
      return order.indexOf(a[i]) < order.indexOf(b[i])
  }
  return a.length <= b.length;
}

function test_00953() {
  // Input: words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
  // Output: true
  // Explanation: As 'h' comes before 'l' in this language, then the sequence is sorted.
  let words1 = ["hello", "leetcode"], order1 = "hlabcdefgijkmnopqrstuvwxyz"
  console.log(isAlienSorted(words1, order1));

  // Input: words = ["word","world","row"], order = "worldabcefghijkmnpqstuvxyz"
  // Output: false
  // Explanation: As 'd' comes after 'l' in this language, then words[0] > words[1], hence the sequence is unsorted.
  let words2 = ["word", "world", "row"], order2 = "worldabcefghijkmnpqstuvxyz"
  console.log(isAlienSorted(words2, order2));

  // Input: words = ["apple","app"], order = "abcdefghijklmnopqrstuvwxyz"
  // Output: false
  // Explanation: The first three characters "app" match, and the second string is shorter (in size.) According to lexicographical rules "apple" > "app", because 'l' > '∅', where '∅' is defined as the blank character which is less than any other character (More info).
  let words3 = ["apple", "app"], order3 = "abcdefghijklmnopqrstuvwxyz"
  console.log(isAlienSorted(words3, order3));

  let words4 = ["hello", "hello"], order4 = "abcdefghijklmnopqrstuvwxyz"
  console.log(isAlienSorted(words4, order4));
}
test_00953()

function splice_vs_slice() {
  // 1.The splice() method returns the removed item(s) in an array and slice() method returns the selected element(s) in an array, as a new array object.

  // 2.The splice() method changes the original array and slice() method doesn’t change the original array.

  // 3.The splice() method can take n number of arguments and slice() method takes 2 arguments.
  console.log("-------- splice -------- ");

  let arr = [1, 2, 3, 4, 5, 6, 7]
  console.log(arr.splice(2, 4));  // [3, 4, 5, 6]
  console.log(arr);               // [1, 2, 7]

  console.log("-------- slice -------- ");
  let arr1 = [1, 2, 3, 4, 5, 6, 7]
  console.log(arr1.slice(2, 4));      // [ 3, 4 ]
  console.log(arr1);                  // [1, 2, 3, 4, 5, 6, 7]


  let arr2 = [1, 2, 3, 4, 5, 6, 7]
  console.log(arr2.slice(0, 3));      // [ 1, 2, 3 ]
  console.log(arr2.slice(3));         // [ 4, 5, 6, 7 ]
  console.log(arr2);                  // [1, 2, 3, 4, 5, 6, 7]


  let arr3 = [1, 2, 3, 4, 5, 6, 7, 8]
  console.log(arr3.slice(0, 4));      // [ 1, 2, 3, 4 ]
  console.log(arr3.slice(4));         // [ 5, 6, 7, 8 ]
  console.log(arr3);                  // [1, 2, 3, 4, 5, 6, 7, 8]
}
// splice_vs_slice()

