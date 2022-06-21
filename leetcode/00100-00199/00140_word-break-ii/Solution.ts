/**
 * ID:    00140
 * Title: Word Break II
 * Difficulty: Hard
 * Description: Given a string s and a dictionary of strings wordDict, add spaces in s to construct a sentence where each word is a valid dictionary word. Return all such possible sentences in any order.
 *
 * Note that the same word in the dictionary may be reused multiple times in the segmentation.
 *
 * Example 1:
 *
 * Input: s = "catsanddog", wordDict = ["cat","cats","and","sand","dog"] Output: ["cats and dog","cat sand dog"]
 *
 * Example 2:
 *
 * Input: s = "pineapplepenapple", wordDict = ["apple","pen","applepen","pine","pineapple"] Output: ["pine apple pen apple","pineapple pen apple","pine applepen apple"] Explanation: Note that you are allowed to reuse a dictionary word.
 *
 * Example 3:
 *
 * Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"] Output: []
 *
 * Constraints:
 *
 * 1 <= s.length <= 20
 * 1 <= wordDict.length <= 1000
 * 1 <= wordDict[i].length <= 10
 * s and wordDict[i] consist of only lowercase English letters.
 * All the strings of wordDict are unique.
 */
function wordBreak(s: string, wordDict: string[]): string[] {
  // DFS function returns an array including all substrings derived from s.
  const dfs = (s: string, map: Map<string, Array<string>>) => {
    if (map.has(s))
      return map.get(s);

    let res = new Array<string>()
    if (s.length === 0) {
      res.push("")
      return res;
    }
    for (let word of wordDict) {
      if (s.indexOf(word) !== -1) {
        let sublist = dfs(s.substring(word.length), map)!
        for (let sub of sublist)
          res.push(word + (sub.length === 0 ? "" : " ") + sub);
      }
    }
    map.set(s, res);
    return res;
  }
  return dfs(s, new Map())!
};

function test_00140() {
  let s = "catsanddog", wordDict = ["cat", "cats", "and", "sand", "dog"]
  console.log(wordBreak(s, wordDict));
  s = "pineapplepenapple", wordDict = ["apple", "pen", "applepen", "pine", "pineapple"]
  console.log(wordBreak(s, wordDict));
  s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
  console.log(wordBreak(s, wordDict));
}

test_00140()
