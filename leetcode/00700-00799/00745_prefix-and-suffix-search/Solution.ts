/**
 * ID:    00745
 * Title: Prefix and Suffix Search
 * Difficulty: Hard
 * Description: Design a special dictionary with some words that searchs the words in it by a prefix and a suffix.
 *
 * Implement the WordFilter class:
 *
 * WordFilter(string[] words) Initializes the object with the words in the dictionary.
 * f(string prefix, string suffix) Returns the index of the word in the dictionary, which has the prefix prefix and the suffix suffix. If there is more than one valid index, return the largest of them. If there is no such word in the dictionary, return -1.
 *
 * Example 1:
 *
 * Input ["WordFilter", "f"] [[["apple"]], ["a", "e"]] Output [null, 0] Explanation WordFilter wordFilter = new WordFilter(["apple"]); wordFilter.f("a", "e"); // return 0, because the word at index 0 has prefix = "a" and suffix = 'e".
 *
 * Constraints:
 *
 * 1 <= words.length <= 15000
 * 1 <= words[i].length <= 10
 * 1 <= prefix.length, suffix.length <= 10
 * words[i], prefix and suffix consist of lower-case English letters only.
 * At most 15000 calls will be made to the function f.
 */
class TrieNode {
  index: number
  children: Array<TrieNode>
  constructor() {
    this.index = 0
    this.children = new Array(27)
  }
}
class WordFilter {
  m: Map<string, number>
  constructor(words: string[]) {
    this.m = new Map()
    for (let i = 0; i < words.length; i++) {
      this.insert(words[i], i)
    }
  }
  insert(word: string, index: number) {
    for (let i = 0; i <= word.length; i++) {
      for (let j = 0; j <= word.length; j++) {
        let prefix = word.substring(0, i)
        let suffix = word.substring(j)
        let key = prefix + '#' + suffix
        if (!this.m.has(key)) {
          this.m.set(key, index)
        } else {
          this.m.set(key, Math.max(index, this.m.get(key)!))
        }
      }
    }
  }

  f(prefix: string, suffix: string): number {
    let key = prefix + '#' + suffix
    if (!this.m.has(key)) {
      return -1
    }
    return this.m.get(key)!
  }
}

function test_00745() {
  let wf = new WordFilter(["apple"])
  console.log(wf.f("a", "e"))
  wf = new WordFilter([
    "cabaabaaaa",
    "ccbcababac",
    "bacaabccba",
    "bcbbcbacaa",
    "abcaccbcaa",
    "accabaccaa",
    "cabcbbbcca",
    "ababccabcb",
    "caccbbcbab",
    "bccbacbcba"]
  )
  // [null,9,4,5,0,8,1,2,5,3,1]
  console.log(wf.f("bccbacbcba", "a"))  // return 9
  console.log(wf.f("ab", "abcaccbcaa")) // return 4
  console.log(wf.f("a", "aa"))          // return 5
  console.log(wf.f("cabaaba", "abaaaa"))
  console.log(wf.f("cacc", "accbbcbab"))
  console.log(wf.f("ccbcab", "bac"))
  console.log(wf.f("bac", "cba"))
  console.log(wf.f("ac", "accabaccaa"))
  console.log(wf.f("bcbb", "aa"))
  console.log(wf.f("ccbca", "cbcababac"))

}

test_00745()
