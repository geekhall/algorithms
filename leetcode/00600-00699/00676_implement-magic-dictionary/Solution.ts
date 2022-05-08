/**
 * ID:    00676
 * Title: Implement Magic Dictionary
 * Difficulty: Medium
 * Description: Design a data structure that is initialized with a list of different words. Provided a string, you should determine if you can change exactly one character in this string to match any word in the data structure.
 *
 * Implement the MagicDictionary class:
 *
 * MagicDictionary() Initializes the object.
 * void buildDict(String[] dictionary) Sets the data structure with an array of distinct strings dictionary.
 * bool search(String searchWord) Returns true if you can change exactly one character in searchWord to match any string in the data structure, otherwise returns false.
 *
 * Example 1:
 *
 * Input ["MagicDictionary", "buildDict", "search", "search", "search", "search"]
 *       [[], [["hello", "leetcode"]], ["hello"], ["hhllo"], ["hell"], ["leetcoded"]]
 * Output [null, null, false, true, false, false] Explanation MagicDictionary magicDictionary = new MagicDictionary(); magicDictionary.buildDict(["hello", "leetcode"]); magicDictionary.search("hello"); // return False magicDictionary.search("hhllo"); // We can change the second 'h' to 'e' to match "hello" so we return True magicDictionary.search("hell"); // return False magicDictionary.search("leetcoded"); // return False
 *
 * Constraints:
 *
 * 1 <= dictionary.length <= 100
 * 1 <= dictionary[i].length <= 100
 * dictionary[i] consists of only lower-case English letters.
 * All the strings in dictionary are distinct.
 * 1 <= searchWord.length <= 100
 * searchWord consists of only lower-case English letters.
 * buildDict will be called only once before search.
 * At most 100 calls will be made to search.
 */
class MagicDictionary {
  dictionary: string[] | null = null
  constructor() {

  }

  buildDict(dictionary: string[]): void {
    this.dictionary = Array.from(dictionary)
  }

  search(searchWord: string): boolean {
    let n = searchWord.length
    for (let i = 0; i < this.dictionary!.length; i++) {
      if (this.dictionary![i].length === n) {
        let diffCnt = 0
        for (let j = 0; j < n; j++) {
          if (this.dictionary![i].charAt(j) !== searchWord.charAt(j)) {
            diffCnt++
          }
          if (diffCnt > 1)
            break
        }
        if (diffCnt === 1)
          return true
      }
    }
    return false
  }
}

/**
* Your MagicDictionary object will be instantiated and called as such:
* var obj = new MagicDictionary()
* obj.buildDict(dictionary)
* var param_2 = obj.search(searchWord)
*/

function test_00676() {
  let obj = new MagicDictionary()
  obj.buildDict(["hello", "leetcode"])
  // ["hello"], ["hhllo"], ["hell"], ["leetcoded"]
  console.log(obj.search("hello"));
  console.log(obj.search("hhllo"));
  console.log(obj.search("hell"));
  console.log(obj.search("leetcoded"));
}

test_00676()
