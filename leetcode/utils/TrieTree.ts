class TrieNode {
  pass: number
  end: number
  next: Array<TrieNode>
  constructor() {
    this.pass = 0
    this.end = 0
    this.next = new Array(26)
  }
}
export class Trie {
  root: TrieNode
  constructor() {
    this.root = new TrieNode()
  }

  insert(word: string) {
    if (!word)
      return
    let chs = Array.from(word)
    let node = this.root
    node.pass++
    let index = 0
    for (let i = 0; i < chs.length; i++) {
      index = chs[i].charCodeAt(0) - 'a'.charCodeAt(0)
      if (!node.next[index]) {
        node.next[index] = new TrieNode()
      }
      node = node.next[index]
      node.pass++
    }
    node.end++
  }
}

function testTrie() {
  let trie: Trie = new Trie()
  trie.insert('abc')
  trie.insert('ab')
  trie.insert('abcd')
  console.log(trie);

}

testTrie()
