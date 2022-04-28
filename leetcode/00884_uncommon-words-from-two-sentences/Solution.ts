// A sentence is a string of single-space separated words where each word consists only of lowercase letters.

// A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.

// Given two sentences s1 and s2, return a list of all the uncommon words. You may return the answer in any order.

function uncommonFromSentences(s1: string, s2: string): string[] {
  let m1 = new Map()
  let m2 = new Map()
  s1.split(" ").forEach((v, i) => {
    if (m1.get(v) === undefined)
      m1.set(v, 1)
    else
      m1.set(v, m1.get(v) + 1)
  })
  s2.split(" ").forEach((v, i) => {
    if (m2.get(v) === undefined)
      m2.set(v, 1)
    else
      m2.set(v, m2.get(v) + 1)
  })

  // appear only once words
  let set1 = new Set<string>()
  let set2 = new Set<string>()
  m1.forEach((v, k) => {
    if (v === 1)
      set1.add(k)
  })
  m2.forEach((v, k) => {
    if (v === 1)
      set2.add(k)
  })
  return [...Array.from(set1).filter(v => m2.get(v) === undefined), ...Array.from(set2).filter(v => m1.get(v) === undefined)]
};

function test_00884() {
  // Input: s1 = "this apple is sweet", s2 = "this apple is sour"
  // Output: ["sweet","sour"]

  let s1 = "this apple is sweet", s2 = "this apple is sour"
  console.log(uncommonFromSentences(s1, s2));

  // Input: s1 = "apple apple", s2 = "banana"
  // Output: ["banana"]
  s1 = "apple apple", s2 = "banana"
  console.log(uncommonFromSentences(s1, s2));
}
test_00884()
