/**
 * ID:    00752
 * Title: Open the Lock
 * Difficulty: Medium
 * Description: You have a lock in front of you with 4 circular wheels. Each wheel has 10 slots: '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'. The wheels can rotate freely and wrap around: for example we can turn '9' to be '0', or '0' to be '9'. Each move consists of turning one wheel one slot.
 *
 * The lock initially starts at '0000', a string representing the state of the 4 wheels.
 *
 * You are given a list of deadends dead ends, meaning if the lock displays any of these codes, the wheels of the lock will stop turning and you will be unable to open it.
 *
 * Given a target representing the value of the wheels that will unlock the lock, return the minimum total number of turns required to open the lock, or -1 if it is impossible.
 *
 * Example 1:
 *
 * Input: deadends = ["0201","0101","0102","1212","2002"], target = "0202" Output: 6 Explanation: A sequence of valid moves would be "0000" -> "1000" -> "1100" -> "1200" -> "1201" -> "1202" -> "0202". Note that a sequence like "0000" -> "0001" -> "0002" -> "0102" -> "0202" would be invalid, because the wheels of the lock become stuck after the display becomes the dead end "0102".
 *
 * Example 2:
 *
 * Input: deadends = ["8888"], target = "0009" Output: 1 Explanation: We can turn the last wheel in reverse to move from "0000" -> "0009".
 *
 * Example 3:
 *
 * Input: deadends = ["8887","8889","8878","8898","8788","8988","7888","9888"], target = "8888" Output: -1 Explanation: We cannot reach the target without getting stuck.
 *
 * Constraints:
 *
 * 1 <= deadends.length <= 500
 * deadends[i].length == 4
 * target.length == 4
 * target will not be in the list deadends.
 * target and deadends[i] consist of digits only.
 */
function openLock(deadends: string[], target: string): number {
  if (deadends.includes("0000")) return -1
  let dead = new Set<string>(deadends)
  if (dead.has(target)) return -1
  let q = new Array<string>()
  q.push("0000")
  let visited = new Set<string>()
  visited.add("0000")
  let res = 0
  while (q.length) {
    let size = q.length
    for (let i = 0; i < size; ++i) {
      let cur = q.shift()!
      if (cur === target) return res
      for (let i = 0; i < 4; ++i) {
        let cur_num = parseInt(cur.substring(i, i + 1))
        let next_up = cur.substring(0, i) + ((cur_num + 1) % 10) + cur.substring(i + 1)
        let next_down = cur.substring(0, i) + ((cur_num === 0 ? 9 : cur_num - 1) % 10) + cur.substring(i + 1)
        if (!visited.has(next_up) && !dead.has(next_up)) {
          visited.add(next_up)
          q.push(next_up)
        }
        if (!visited.has(next_down) && !dead.has(next_down)) {
          visited.add(next_down)
          q.push(next_down)
        }
      }
    }
    ++res
  }
  return -1
};

function test_00752() {
  let deadends = ["0201", "0101", "0102", "1212", "2002"], target = "0202"
  console.log(openLock(deadends, target))
  deadends = ["8888"], target = "0009"
  console.log(openLock(deadends, target))
  deadends = ["8887", "8889", "8878", "8898", "8788", "8988", "7888", "9888"], target = "8888"
  console.log(openLock(deadends, target))
  deadends = ["0000"], target = "8888"
  console.log(openLock(deadends, target))
}

test_00752()
