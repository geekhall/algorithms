/**
 * ID:    01455
 * Title: Check If a Word Occurs As a Prefix of Any Word in a Sentence
 * Difficulty: Easy
 * Description: Given a sentence that consists of some words separated by a single space, and a searchWord, check if searchWord is a prefix of any word in sentence.
 *
 * Return the index of the word in sentence (1-indexed) where searchWord is a prefix of this word. If searchWord is a prefix of more than one word, return the index of the first word (minimum index). If there is no such word return -1.
 *
 * A prefix of a string s is any leading contiguous substring of s.
 *
 * Example 1:
 *
 * Input: sentence = "i love eating burger", searchWord = "burg" Output: 4 Explanation:"burg" is prefix of "burger" which is the 4th word in the sentence.
 *
 * Example 2:
 *
 * Input: sentence = "this problem is an easy problem", searchWord = "pro" Output: 2 Explanation:"pro" is prefix of "problem" which is the 2nd and the 6th word in the sentence, but we return 2 as it's the minimal index.
 *
 * Example 3:
 *
 * Input: sentence = "i am tired", searchWord = "you" Output: -1 Explanation:"you" is not a prefix of any word in the sentence.
 *
 * Constraints:
 *
 * 1 <= sentence.length <= 100
 * 1 <= searchWord.length <= 10
 * sentence consists of lowercase English letters and spaces.
 * searchWord consists of lowercase English letters.
 */
function isPrefixOfWord1(sentence: string, searchWord: string): number {
  let s = sentence.split(' ')
  for (let i = 0; i < s.length; i++) {
    if (s[i].startsWith(searchWord)) {
      return i + 1
    }
  }
  return -1
};

function isPrefixOfWord(sentence: string, searchWord: string): number {
  let pos = 0
  let pre = 0
  for (let i = 0; i < sentence.length; i++) {
    if (sentence.charAt(i) === ' ') {
      pos++
      if (sentence.substring(pre, i).startsWith(searchWord)) {
        return pos
      }
      pre = i + 1
    }
  }
  // last word
  if (sentence.substring(pre).startsWith(searchWord))
    return ++pos
  return -1
};

function test_01455() {
  let sentence = "this problem is an easy problem", searchWord = "pro"
  console.log(isPrefixOfWord(sentence, searchWord));
  sentence = "i love eating burger", searchWord = "burg"
  console.log(isPrefixOfWord(sentence, searchWord));
}

test_01455()
