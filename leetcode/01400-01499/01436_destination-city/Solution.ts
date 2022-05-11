/**
 * ID:    01436
 * Title: Destination City
 * Difficulty: Easy
 * Description: You are given the array paths, where paths[i] = [cityA i, cityB i ] means there exists a direct path going from cityA i to cityB i. Return the destination city, that is, the city without any path outgoing to another city.
 *
 * It is guaranteed that the graph of paths forms a line without any loop, therefore, there will be exactly one destination city.
 *
 * Example 1:
 *
 * Input: paths = [["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]] Output:"Sao Paulo" Explanation: Starting at "London" city you will reach "Sao Paulo" city which is the destination city. Your trip consist of: "London" -> "New York" -> "Lima" -> "Sao Paulo".
 *
 * Example 2:
 *
 * Input: paths = [["B","C"],["D","B"],["C","A"]] Output:"A" Explanation: All possible trips are: "D" -> "B" -> "C" -> "A". "B" -> "C" -> "A". "C" -> "A". "A". Clearly the destination city is "A".
 *
 * Example 3:
 *
 * Input: paths = [["A","Z"]] Output:"Z"
 *
 * Constraints:
 *
 * 1 <= paths.length <= 100
 * paths[i].length == 2
 * 1 <= cityA i.length, cityB i.length <= 10
 * cityA i!= cityB i
 * All strings consist of lowercase and uppercase English letters and the space character.
 */
function destCity(paths: string[][]): string {
  let res = ""
  let m: Map<string, number> = new Map()
  paths.forEach((v, i) => {
    if (m.get(v[0]) === undefined) {
      m.set(v[0], -1)
    } else if (m.get(v[0]) === 1) {
      m.delete(v[0])
    } else {
      m.set(v[0], m.get(v[0])! - 1)
    }
    if (m.get(v[1]) === undefined) {
      m.set(v[1], 1)
    } else if (m.get(v[1]) === -1) {
      m.delete(v[1])
    } else {
      m.set(v[1], m.get(v[1])! + 1)
    }
  })

  m.forEach((v, k) => {
    if (v === 1)
      res = k
  })
  return res
};

function test_01436() {
  let paths = [["London", "New York"], ["New York", "Lima"], ["Lima", "Sao Paulo"]]
  console.log(destCity(paths));
  paths = [["B", "C"], ["D", "B"], ["C", "A"]]
  console.log(destCity(paths));
  paths = [["A", "Z"]]
  console.log(destCity(paths));
}

test_01436()
