/**
 * ID:    01854
 * Title: Maximum Population Year
 * Difficulty: Easy
 * Description: You are given a 2D integer array logs where each logs[i] = [birth i, death i ] indicates the birth and death years of the i th person.
 *
 * The population of some year x is the number of people alive during that year. The i th person is counted in year x 's population if x is in the inclusive range [birth i, death i - 1]. Note that the person is not counted in the year that they die.
 *
 * Return the earliest year with the maximum population.
 *
 * Example 1:
 *
 * Input: logs = [[1993,1999],[2000,2010]] Output: 1993 Explanation: The maximum population is 1, and 1993 is the earliest year with this population.
 *
 * Example 2:
 *
 * Input: logs = [[1950,1961],[1960,1971],[1970,1981]] Output: 1960 Explanation: The maximum population is 2, and it had happened in years 1960 and 1970. The earlier year between them is 1960.
 *
 * Constraints:
 *
 * 1 <= logs.length <= 100
 * 1950 <= birth i < death i <= 2050
 */
function maximumPopulation(logs: number[][]): number {
  let max = 0;
  let map = new Map<number, number>();
  for (let log of logs) {
    let birth = log[0];
    let death = log[1];
    for (let i = birth; i < death; i++) {
      if (map.has(i)) {
        map.set(i, map.get(i)! + 1);
      } else {
        map.set(i, 1);
      }
    }
    if (map.get(birth)! > max) {
      max = map.get(birth)!;
    }
  }

  return [...map.entries()].sort((a, b) => b[1] - a[1] === 0 ? a[0] - b[0] : b[1] - a[1])[0][0]
};

function test_01854() {
  let logs = [[1993, 1999], [2000, 2010]];
  console.log(maximumPopulation(logs));
  logs = [[1950, 1961], [1960, 1971], [1970, 1981]]
  console.log(maximumPopulation(logs));
  logs = [[2033, 2034], [2039, 2047], [1998, 2042], [2047, 2048], [2025, 2029], [2005, 2044], [1990, 1992], [1952, 1956], [1984, 2014]]
  console.log(maximumPopulation(logs)); // expect 2005
}

test_01854()
