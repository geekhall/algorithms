/**
 * ID:    00433
 * Title: Minimum Genetic Mutation
 * Difficulty: Medium
 * Description: A gene string can be represented by an 8-character long string, with choices from 'A', 'C', 'G', and 'T'.
 *
 * Suppose we need to investigate a mutation from a gene string start to a gene string end where one mutation is defined as one single character changed in the gene string.
 *
 * For example, "AACCGGTT" --> "AACCGGTA" is one mutation.
 *
 * There is also a gene bank bank that records all the valid gene mutations. A gene must be in bank to make it a valid gene string.
 *
 * Given the two gene strings start and end and the gene bank bank, return the minimum number of mutations needed to mutate from start to end. If there is no such a mutation, return -1.
 *
 * Note that the starting point is assumed to be valid, so it might not be included in the bank.
 *
 * Example 1:
 *
 * Input: start = "AACCGGTT", end = "AACCGGTA", bank = ["AACCGGTA"] Output: 1
 *
 * Example 2:
 *
 * Input: start = "AACCGGTT", end = "AAACGGTA", bank = ["AACCGGTA","AACCGCTA","AAACGGTA"] Output: 2
 *
 * Example 3:
 *
 * Input: start = "AAAAACCC", end = "AACCCCCC", bank = ["AAAACCCC","AAACCCCC","AACCCCCC"] Output: 3
 *
 * Constraints:
 *
 * start.length == 8
 * end.length == 8
 * 0 <= bank.length <= 10
 * bank[i].length == 8
 * start, end, and bank[i] consist of only the characters ['A', 'C', 'G', 'T'].
 */
// Similar with 00127_word-ladder
function minMutation(start: string, end: string, bank: string[]): number {
  const isMutation = (a: string, b: string): boolean => {
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
  let queue = [start]
  let visited = new Set()
  let count = 0
  while (queue.length) {
    let size = queue.length
    for (let i = 0; i < size; i++) {
      let cur = queue.shift()!
      if (cur === end) {
        return count
      }
      if (visited.has(cur)) {
        continue
      }
      visited.add(cur)
      for (let i = 0; i < bank.length; i++) {
        if (isMutation(cur, bank[i]) && !visited.has(bank[i])) {
          queue.push(bank[i])
        }
      }
    }
    count++
  }

  return -1
};

function test_00433() {
  let start = "AACCGGTT", end = "AACCGGTA", bank = ["AACCGGTA"]
  console.log(minMutation(start, end, bank))
  start = "AACCGGTT", end = "AAACGGTA", bank = ["AACCGGTA", "AACCGCTA", "AAACGGTA"]
  console.log(minMutation(start, end, bank))
  start = "AAAAACCC", end = "AACCCCCC", bank = ["AAAACCCC", "AAACCCCC", "AACCCCCC"]
  console.log(minMutation(start, end, bank))

}

test_00433()
