/**
 * ID:    01496
 * Title: Path Crossing
 * Difficulty: Easy
 * Description: Given a string path, where path[i] = 'N', 'S', 'E' or 'W', each representing moving one unit north, south, east, or west, respectively. You start at the origin (0, 0) on a 2D plane and walk on the path specified by path.
 *
 * Return true if the path crosses itself at any point, that is, if at any time you are on a location you have previously visited. Return false otherwise.
 *
 * Example 1:
 *
 * Input: path = "NES" Output: false Explanation: Notice that the path doesn't cross any point more than once.
 *
 * Example 2:
 *
 * Input: path = "NESWW" Output: true Explanation: Notice that the path visits the origin twice.
 *
 * Constraints:
 *
 * 1 <= path.length <= 10 4
 * path[i] is either 'N', 'S', 'E', or 'W'.
 */
function isPathCrossing(path: string): boolean {
  let res = false
  let s = new Set()
  let current = [0, 0]
  s.add(current.toString())
  Array.from(path).forEach((v, i) => {
    switch (v) {
      case 'N':
        current[1] += 1
        if (s.has(current.toString()))
          res = true
        break;
      case 'S':
        current[1] -= 1
        if (s.has(current.toString()))
          res = true
        break;
      case 'E':
        current[0] += 1
        if (s.has(current.toString()))
          res = true
        break;
      case 'W':
        current[0] -= 1
        if (s.has(current.toString()))
          res = true
        break;
    }
    s.add(current.toString())
  })

  return res
};

function test_01496() {

  //Use set to store array has the following problem:
  let s = new Set()
  let current = [0, 0]
  s.add(current)
  console.log(s.has([0, 0]));   // false, because Array is also an object.
  console.log(s.has(current));  // true, object reference is in the set

  // resolve:
  s.add(current.toString())
  console.log(s.has([0, 0].toString()));  // true

  let path = "NESWW"
  console.log(isPathCrossing(path));
  path = "NES"
  console.log(isPathCrossing(path));

  path = "NNSWWEWSSESSWENNW"
  console.log(isPathCrossing(path));
}

test_01496()
