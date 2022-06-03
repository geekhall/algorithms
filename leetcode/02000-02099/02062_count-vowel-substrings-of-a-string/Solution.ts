/**
 * ID:    02062
 * Title: Count Vowel Substrings of a String
 * Difficulty: Easy
 * Description: A substring is a contiguous (non-empty) sequence of characters within a string.
 *
 * A vowel substring is a substring that only consists of vowels ('a', 'e', 'i', 'o', and 'u') and has all five vowels present in it.
 *
 * Given a string word, return the number of vowel substrings in word.
 *
 * Example 1:
 *
 * Input: word = "aeiouu" Output: 2 Explanation: The vowel substrings of word are as follows (underlined): - " aeiou u" - " aeiouu"
 *
 * Example 2:
 *
 * Input: word = "unicornarihan" Output: 0 Explanation: Not all 5 vowels are present, so there are no vowel substrings.
 *
 * Example 3:
 *
 * Input: word = "cuaieuouac" Output: 7 Explanation: The vowel substrings of word are as follows (underlined): - "c uaieuo uac" - "c uaieuou ac" - "c uaieuoua c" - "cu aieuo uac" - "cu aieuou ac" - "cu aieuoua c" - "cua ieuoua c"
 *
 * Constraints:
 *
 * 1 <= word.length <= 100
 * word consists of lowercase English letters only.
 */
// bf
function countVowelSubstrings(word: string): number {
  const isVowel = (c: string): boolean => ['a', 'e', 'i', 'o', 'u'].includes(c)
  let vowelMap = new Map();
  let total = 0;
  for (let i = 0; i < word.length; i++) {
    vowelMap.clear();
    for (let j = i; j < word.length && isVowel(word[j]); j++) {
      vowelMap.set(word[j], (vowelMap.get(word[j]) ?? 0) + 1);
      if (vowelMap.size == 5)
        total++;
    }
  }
  return total;
};
// slide window (to be add)

function test_02062() {
  let word = "aeiouu"
  console.log(countVowelSubstrings(word))
  word = "unicornarihan"
  console.log(countVowelSubstrings(word))
  word = "cuaieuouac"
  console.log(countVowelSubstrings(word))
}

test_02062()
