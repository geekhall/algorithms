/**
 * ID:    01805
 * Title: Number of Different Integers in a String
 * Difficulty: Easy
 * Description: You are given a string word that consists of digits and lowercase English letters.
 *
 * You will replace every non-digit character with a space. For example, "a123bc34d8ef34" will become " 123 34 8 34". Notice that you are left with some integers that are separated by at least one space: "123", "34", "8", and "34".
 *
 * Return the number of different integers after performing the replacement operations on word.
 *
 * Two integers are considered different if their decimal representations without any leading zeros are different.
 *
 * Example 1:
 *
 * Input: word = "a 123 bc 34 d 8 ef 34" Output: 3 Explanation: The three different integers are "123", "34", and "8". Notice that "34" is only counted once.
 *
 * Example 2:
 *
 * Input: word = "leet 1234 code 234" Output: 2
 *
 * Example 3:
 *
 * Input: word = "a 1 b 01 c 001" Output: 1 Explanation: The three integers "1", "01", and "001" all represent the same integer because the leading zeros are ignored when comparing their decimal values.
 *
 * Constraints:
 *
 * 1 <= word.length <= 1000
 * word consists of digits and lowercase English letters.
 */
function numDifferentIntegers(word: string): number {
  let temp = word.replace(/[a-z]/g, ' ')
  let arr = temp.split(' ').filter(v => v !== "")
  let s = new Set()
  arr.forEach((v, i) => {
    s.add(v.replace(/\b(0+)/gi, ''))
  })
  return s.size
};

function test_01805() {
  // let word = "a 123 bc 34 d 8 ef 34"
  // console.log(numDifferentIntegers(word));
  // word = "leet 1234 code 234"
  // console.log(numDifferentIntegers(word));
  let word = "a1b01c001"
  console.log(numDifferentIntegers(word));
}

test_01805()
