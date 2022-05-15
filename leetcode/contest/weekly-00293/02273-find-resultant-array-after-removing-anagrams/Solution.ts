
function removeAnagrams(words: string[]): string[] {
  while (true) {
    let found = false
    for (let i = 1; i < words.length; i++) {
      if (canDelete(words[i - 1], words[i])) {
        words.splice(i, 1)
        found = true
      }
    }
    if (!found)
      break
  }

  return words
};

function canDelete(a: string, b: string): boolean {
  if (a.length !== b.length)
    return false
  let sortedA = Array.from(a).sort((one, two) => (one > two ? -1 : 1)).join('')
  let sortedB = Array.from(b).sort((one, two) => (one > two ? -1 : 1)).join('')
  return sortedA === sortedB
}

function testEqual() {
  let words = ["abba", "baba", "bbaa", "cd", "cd"]
  console.log(removeAnagrams(words));

  words = ["a", "b", "c", "d", "e"]
  console.log(removeAnagrams(words));

}

testEqual()
