/**
 * ID:    00739
 * Title: Daily Temperatures
 * Difficulty: Medium
 * Description: Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the i th day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.
 *
 * Example 1:
 *
 * Input: temperatures = [73,74,75,71,69,72,76,73] Output: [1,1,4,2,1,1,0,0]
 *
 * Example 2:
 *
 * Input: temperatures = [30,40,50,60] Output: [1,1,1,0]
 *
 * Example 3:
 *
 * Input: temperatures = [30,60,90] Output: [1,1,0]
 *
 * Constraints:
 *
 * 1 <= temperatures.length <= 10 5
 * 30 <= temperatures[i] <= 100
 */
function dailyTemperatures(temperatures: number[]): number[] {
  let res: number[] = new Array(temperatures.length).fill(0)
  let stack: number[] = []
  for (let i = 0; i < temperatures.length; i++) {
    while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
      let cur = stack.pop()!
      res[cur] = i - cur
    }
    stack.push(i)
  }
  return res
};

function test_00739() {
  let temperatures = [73, 74, 75, 71, 69, 72, 76, 73]
  console.log(dailyTemperatures(temperatures));
  temperatures = [30, 40, 50, 60]
  console.log(dailyTemperatures(temperatures));
  temperatures = [30, 60, 90]
  console.log(dailyTemperatures(temperatures));
}

test_00739()
