/**
 * ID:    00345
 * Title: Reverse Vowels of a String
 * Difficulty: Easy
 * Description: Given a string s, reverse only all the vowels in the string and return it.
 *
 * The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both cases.
 *
 * Example 1:
 *
 * Input: s = "hello" Output:"holle"
 *
 * Example 2:
 *
 * Input: s = "leetcode" Output:"leotcede"
 *
 * Constraints:
 *
 * 1 <= s.length <= 3 * 10 5
 * s consist of printable ASCII characters.
 */
function reverseVowels(s: string): string {
  let arr = Array.from(s)
  let left = 0
  let right = s.length - 1
  const isVowel = (i: number): boolean => {
    return s.charAt(i) === 'a' || s.charAt(i) === 'e' || s.charAt(i) === 'i' || s.charAt(i) === 'o' || s.charAt(i) === 'u'
      || s.charAt(i) === 'A' || s.charAt(i) === 'E' || s.charAt(i) === 'I' || s.charAt(i) === 'O' || s.charAt(i) === 'U'
  }
  const swap = (a: number, b: number) => {
    let temp = arr[a]
    arr[a] = arr[b]
    arr[b] = temp
  }
  while (left < right) {
    if (!isVowel(left)) {
      left++
    }
    if (!isVowel(right)) {
      right--
    }
    if (isVowel(left) && isVowel(right)) {
      swap(left, right)
      left++
      right--
    }

  }
  return arr.join('')
}


function test_00345() {
  let s = "leetcode"
  console.log(reverseVowels(s));

}

test_00345()
