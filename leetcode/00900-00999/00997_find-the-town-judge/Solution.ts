/**
 * ID:    00997
 * Title: Find the Town Judge
 * Difficulty: Easy
 * Description: In a town, there are n people labeled from 1 to n. There is a rumor that one of these people is secretly the town judge.
 *
 * If the town judge exists, then:
 *
 * The town judge trusts nobody.
 * Everybody (except for the town judge) trusts the town judge.
 * There is exactly one person that satisfies properties 1 and 2.
 *
 * You are given an array trust where trust[i] = [a i, b i ] representing that the person labeled a i trusts the person labeled b i.
 *
 * Return the label of the town judge if the town judge exists and can be identified, or return -1 otherwise.
 *
 * Example 1:
 *
 * Input: n = 2, trust = [[1,2]] Output: 2
 *
 * Example 2:
 *
 * Input: n = 3, trust = [[1,3],[2,3]] Output: 3
 *
 * Example 3:
 *
 * Input: n = 3, trust = [[1,3],[2,3],[3,1]] Output: -1
 *
 * Constraints:
 *
 * 1 <= n <= 1000
 * 0 <= trust.length <= 10 4
 * trust[i].length == 2
 * All the pairs of trust are unique.
 * a i!= b i
 * 1 <= a i, b i <= n
 */
function findJudge(n: number, trust: number[][]): number {
  if (n === 1 && trust.length === 0) {
    return n
  }
  let s = new Set()
  let m: Map<number, number> = new Map()
  for (let i = 0; i < trust.length; i++) {
    if (!s.has(trust[i][0])) {
      s.add(trust[i][0])
    }
    if (m.get(trust[i][1]) === undefined) {
      m.set(trust[i][1], 1)
    } else {
      m.set(trust[i][1], m.get(trust[i][1])! + 1)
    }
  }
  let res = -1

  m.forEach((v, k) => {
    if (v === n - 1 && !s.has(k)) {
      res = k
    }
  })

  return res
};

function test_00997() {
  let n = 2, trust = [[1, 2]]
  console.log(findJudge(n, trust));
  n = 3, trust = [[1, 3], [2, 3]]
  console.log(findJudge(n, trust));
  n = 3, trust = [[1, 3], [2, 3], [3, 1]]
  console.log(findJudge(n, trust));
  n = 3, trust = [[1, 2], [2, 3]]
  console.log(findJudge(n, trust)); // expect -1
}

test_00997()
