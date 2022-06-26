/**
 * ID:    00049
 * Title: Group Anagrams
 * Difficulty: Medium
 * Description: Given an array of strings strs, group the anagrams together. You can return the answer in any order.
 *
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
 *
 * Example 1:
 *
 * Input: strs = ["eat","tea","tan","ate","nat","bat"] Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
 *
 * Example 2:
 *
 * Input: strs = [""] Output: [[""]]
 *
 * Example 3:
 *
 * Input: strs = ["a"] Output: [["a"]]
 *
 * Constraints:
 *
 * 1 <= strs.length <= 10 4
 * 0 <= strs[i].length <= 100
 * strs[i] consists of lowercase English letters.
 */
function groupAnagrams(strs: string[]): string[][] {
  let map = new Map<string, string[]>();
  for (let str of strs) {
    let key = str.split('').sort().join('');
    if (map.has(key)) {
      map.get(key)!.push(str);
    } else {
      map.set(key, [str]);
    }
  }
  let result: string[][] = [];
  for (let [key, value] of map) {
    result.push(value);
  }
  return result;
};

function test_00049() {
  let strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
  console.log(groupAnagrams(strs))

}

test_00049()
