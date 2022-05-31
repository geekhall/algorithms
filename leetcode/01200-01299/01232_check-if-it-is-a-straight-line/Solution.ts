/**
 * ID:    01232
 * Title: Check If It Is a Straight Line
 * Difficulty: Easy
 * Description: You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. Check if these points make a straight line in the XY plane.
 *
 * Example 1:
 *
 * Input: coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]] Output: true
 *
 * Example 2:
 *
 * Input: coordinates = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]] Output: false
 *
 * Constraints:
 *
 * 2 <= coordinates.length <= 1000
 * coordinates[i].length == 2
 * -10^4 <= coordinates[i][0], coordinates[i][1] <= 10^4
 * coordinates contains no duplicate point.
 */
// too slow
function checkStraightLine1(coordinates: number[][]): boolean {

  for (let i = 0; i < coordinates.length; i++) {
    for (let j = i + 1; j < coordinates.length; j++) {
      if (coordinates[i][0] !== coordinates[j][0]) {
        const slope = (coordinates[i][1] - coordinates[j][1]) / (coordinates[i][0] - coordinates[j][0])
        for (let k = j + 1; k < coordinates.length; k++) {
          if (coordinates[k][0] !== coordinates[j][0]) {
            if (slope !== (coordinates[k][1] - coordinates[j][1]) / (coordinates[k][0] - coordinates[j][0])) {
              return false
            }
          } else {
            return false
          }
        }
      } else {
        for (let k = j + 1; k < coordinates.length; k++) {
          if (coordinates[i][0] !== coordinates[k][0]) {
            return false
          }
        }
      }
    }
  }
  return true
};

function checkStraightLine(coordinates: number[][]): boolean {
  if (coordinates[1][0] === coordinates[0][0]) { // horizon
    for (let i = 2; i < coordinates.length; i++) {
      if (coordinates[i][0] !== coordinates[0][0]) {
        return false
      }
    }
  } else if (coordinates[1][1] === coordinates[0][1]) { // vertical
    for (let i = 2; i < coordinates.length; i++) {
      if (coordinates[i][1] !== coordinates[0][1]) {
        return false
      }
    }
  } else {  // slope
    let slope = (coordinates[1][1] - coordinates[0][1]) / (coordinates[1][0] - coordinates[0][0])
    for (let i = 2; i < coordinates.length; i++) {
      if (coordinates[i][0] !== coordinates[1][0]) {
        if (slope * (coordinates[i][0] - coordinates[1][0]) !== (coordinates[i][1] - coordinates[1][1])) {
          return false
        }
      } else {
        return false
      }
    }
  }
  return true
}

function test_01232() {
  let coordinates = [[1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7]]
  console.log(checkStraightLine(coordinates));
  coordinates = [[1, 1], [2, 2], [3, 4], [4, 5], [5, 6], [7, 7]]
  console.log(checkStraightLine(coordinates));
  coordinates = [[1, 1], [2, 2], [2, 0]]  // expect false
  console.log(checkStraightLine(coordinates));
  coordinates = [[0, 0], [0, 1], [0, -1]]  // expect true
  console.log(checkStraightLine(coordinates));

}

test_01232()
