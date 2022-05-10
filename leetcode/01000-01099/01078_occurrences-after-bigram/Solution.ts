/**
 * ID:    01078
 * Title: Occurrences After Bigram
 * Difficulty: Easy
 * Description: Given two strings first and second, consider occurrences in some text of the form "first second third", where second comes immediately after first, and third comes immediately after second.
 *
 * Return an array of all the words third for each occurrence of"first second third".
 *
 * Example 1:
 *
 * Input: text = "alice is a good girl she is a good student", first = "a", second = "good" Output: ["girl","student"]
 *
 * Example 2:
 *
 * Input: text = "we will we will rock you", first = "we", second = "will" Output: ["we","rock"]
 *
 * Constraints:
 *
 * 1 <= text.length <= 1000
 * text consists of lowercase English letters and spaces.
 * All the words in text a separated by a single space.
 * 1 <= first.length, second.length <= 10
 * first and second consist of lowercase English letters.
 */
function findOcurrences(text: string, first: string, second: string): string[] {
  let res: string[] = new Array()
  let arr = text.split(' ')
  for (let i = 0; i < arr.length; i++) {
    if (i + 2 < arr.length && arr[i] === first && arr[i + 1] === second) {
      res.push(arr[i + 2])
    }
  }
  return res
};

function test_01078() {
  let text = "alice is a good girl she is a good student", first = "a", second = "good"
  console.log(findOcurrences(text, first, second));
  text = "we will we will rock you", first = "we", second = "will"
  console.log(findOcurrences(text, first, second));

}

test_01078()
