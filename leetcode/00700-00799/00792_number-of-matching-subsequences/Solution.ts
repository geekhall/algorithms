/**
 * ID:    00792
 * Title: Number of Matching Subsequences
 * Difficulty: Medium
 * Description: Given a string s and an array of strings words, return the number of words[i] that is a subsequence of s.
 *
 * A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.
 *
 * For example, "ace" is a subsequence of "abcde".
 *
 * Example 1:
 *
 * Input: s = "abcde", words = ["a","bb","acd","ace"] Output: 3 Explanation: There are three strings in words that are a subsequence of s: "a", "acd", "ace".
 *
 * Example 2:
 *
 * Input: s = "dsahjpjauf", words = ["ahjpjau","ja","ahbwzgqnuk","tnmlanowax"] Output: 2
 *
 * Constraints:
 *
 * 1 <= s.length <= 5 * 10 4
 * 1 <= words.length <= 5000
 * 1 <= words[i].length <= 50
 * s and words[i] consist of only lowercase English letters.
 */
// time limit exceed.
function numMatchingSubseq1(s: string, words: string[]): number {
  let res = 0;
  const isSubsequence = (word: string, str: string): boolean => {
    let i = 0;
    for (let j = 0; j < word.length; j++) {
      if (str[i] === word[j]) {
        i++;
      }
    }
    return i === str.length;
  }
  for (let i = 0; i < words.length; i++) {
    if (isSubsequence(s, words[i])) {
      res++;
    }
  }
  return res;
};
function numMatchingSubseq(s: string, words: string[]): number {
  const isSubsequence = (s: string, word: string) => {
    if (s.length < word.length) return false;
    if (s.length === word.length) return s === word;

    for (const char of word) {
      const idx = s.indexOf(char);
      if (idx === -1) return false;

      s = s.substring(idx + 1);
    }
    return true;
  };
  return words.filter((word) => isSubsequence(s, word)).length;
}

function test_00792() {
  console.log(numMatchingSubseq("abcde", ["a", "bb", "acd", "ace"]));
  console.log(numMatchingSubseq("dsahjpjauf", ["ahjpjau", "ja", "ahbwzgqnuk", "tnmlanowax"]));
}

test_00792()
