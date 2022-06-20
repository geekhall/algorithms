/**
 * ID:    00126
 * Title: Word Ladder II
 * Difficulty: Hard
 * Description: A transformation sequence from word beginWord to word endWord using a dictionary wordList is a sequence of words beginWord -> s 1 -> s 2 -> ... -> s k such that:
 *
 * Every adjacent pair of words differs by a single letter.
 * Every s i for 1 <= i <= k is in wordList. Note that beginWord does not need to be in wordList.
 * s k == endWord
 *
 * Given two words, beginWord and endWord, and a dictionary wordList, return all the shortest transformation sequences from beginWord to endWord, or an empty list if no such sequence exists. Each sequence should be returned as a list of the words [beginWord, s 1, s 2, ..., s k ].
 *
 * Example 1:
 *
 * Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"] Output: [["hit","hot","dot","dog","cog"],["hit","hot","lot","log","cog"]] Explanation: There are 2 shortest transformation sequences: "hit" -> "hot" -> "dot" -> "dog" -> "cog" "hit" -> "hot" -> "lot" -> "log" -> "cog"
 *
 * Example 2:
 *
 * Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"] Output: [] Explanation: The endWord "cog" is not in wordList, therefore there is no valid transformation sequence.
 *
 * Constraints:
 *
 * 1 <= beginWord.length <= 5
 * endWord.length == beginWord.length
 * 1 <= wordList.length <= 1000
 * wordList[i].length == beginWord.length
 * beginWord, endWord, and wordList[i] consist of lowercase English letters.
 * beginWord != endWord
 * All the words in wordList are unique.
 */
function findLadders(beginWord: string, endWord: string, wordList: string[]): string[][] {
  const isValid = (a: string, b: string): boolean => {
    let diff = 0
    if (a.length !== b.length) {
      return false
    }
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        diff++
        if (diff > 1) {
          return false
        }
      }
    }
    return diff === 1
  }
  if (!wordList.includes(endWord)) {
    return []
  }
  let queue = [beginWord]
  let visited = new Set()
  let count = 0
  let paths = [beginWord]
  let res = []
  while (queue.length) {
    let size = queue.length
    let removeSet = new Set()
    for (let i = 0; i < size; i++) {
      let cur = queue.shift()!
      paths.push(cur)
      if (cur === endWord) {
        res.push(paths)
      }
      if (visited.has(cur)) {
        continue
      }
      visited.add(cur)
      for (let i = 0; i < wordList.length; i++) {
        if (isValid(cur, wordList[i]) && !visited.has(wordList[i])) {
          queue.push(wordList[i])
          removeSet.add(wordList[i])
        }
      }
    }
    paths.filter((v, i) => !removeSet.has(v))
    count++
  }

  return res
};

function test_00126() {
  let beginWord = "hit", endWord = "cog", wordList = ["hot", "dot", "dog", "lot", "log", "cog"]
  console.log(findLadders(beginWord, endWord, wordList))
}

test_00126()
