/**
 * ID:    00824
 * Title: Goat Latin
 * Difficulty: Easy
 * Description: You are given a string sentence that consist of words separated by spaces. Each word consists of lowercase and uppercase letters only.
 *
 * We would like to convert the sentence to "Goat Latin" (a made-up language similar to Pig Latin.) The rules of Goat Latin are as follows:
 *
 * If a word begins with a vowel ('a', 'e', 'i', 'o', or 'u'), append "ma" to the end of the word.
 *
 * For example, the word "apple" becomes "applema".
 *
 * If a word begins with a consonant (i.e., not a vowel), remove the first letter and append it to the end, then add "ma".
 *
 * For example, the word "goat" becomes "oatgma".
 *
 * Add one letter 'a' to the end of each word per its word index in the sentence, starting with 1.
 *
 * For example, the first word gets "a" added to the end, the second word gets "aa" added to the end, and so on.
 *
 * Return the final sentence representing the conversion from sentence to Goat Latin.
 *
 * Example 1:
 *
 * Input: sentence = "I speak Goat Latin" Output:"Imaa peaksmaaa oatGmaaaa atinLmaaaaa"
 *
 * Example 2:
 *
 * Input: sentence = "The quick brown fox jumped over the lazy dog" Output:"heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa"
 *
 * Constraints:
 *
 * 1 <= sentence.length <= 150
 * sentence consists of English letters and spaces.
 * sentence has no leading or trailing spaces.
 * All the words in sentence are separated by a single space.
 */
function toGoatLatin(sentence: string): string {
  let res = ""
  let arr = sentence.split(" ")
  let vowel = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'])
  let ma = 'ma'
  for (let i = 0; i < arr.length; i++) {
    ma += 'a'
    if (!vowel.has(arr[i].charAt(0))) {
      res += (arr[i] + arr[i][0]).slice(1) + ma
    } else {
      res += arr[i] + ma
    }
    if (i !== arr.length - 1) {
      res += " "
    }
  }

  return res
}

function test_00824() {
  let sentence = "I speak Goat Latin"
  console.log(toGoatLatin(sentence));
  // Imaa peaksmaa a oatGmaa a a atinLmaa a a a
  // Imaa peaksmaaa oatGmaaaa atinLmaaaaa
  // Imaa peaksmaaa oatGmaaaa atinLmaaaaa
}

test_00824()
