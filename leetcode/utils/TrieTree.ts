class TrieNode {
  pass: number
  end: number
  children: Array<TrieNode>
  constructor() {
    this.pass = 0
    this.end = 0
    this.children = new Array(26)
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
      if (!node.children[index]) {
        node.children[index] = new TrieNode()
      }
      node = node.children[index]
      node.pass++
    }
    node.end++
  }
  isPrefix(prefix: string): boolean {
    return false
  }
  isSuffix(suffix: string): boolean {
    return false
  }
  print() {
    let node = this.root
    let queue = [node]
    let level = 0
    while (queue.length) {
      let size = queue.length
      for (let i = 0; i < size; i++) {
        let node = queue.shift()!

      }
      level++
      let tmp = ' '

      for (let i = 0; i < 26; i++) {
        if (node.children[i]) {
          console.log(tmp + String.fromCharCode(i + 'a'.charCodeAt(0)))
          queue.push(node.children[i])
          console.log("pass: ", node.pass, "end: ", node.end)
        }
      }
    }
  }
}

function testTrie() {
  let trie: Trie = new Trie()
  trie.insert('abc')
  trie.insert('ab')
  // trie.insert('abcd')
  // trie.insert('cdef')
  trie.print()
}

testTrie()
