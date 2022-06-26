/**
 * ID:    00957
 * Title: Prison Cells After N Days
 * Difficulty: Medium
 * Description: There are 8 prison cells in a row and each cell is either occupied or vacant.
 *
 * Each day, whether the cell is occupied or vacant changes according to the following rules:
 *
 * If a cell has two adjacent neighbors that are both occupied or both vacant, then the cell becomes occupied.
 * Otherwise, it becomes vacant.
 *
 * Note that because the prison is a row, the first and the last cells in the row can't have two adjacent neighbors.
 *
 * You are given an integer array cells where cells[i] == 1 if the i th cell is occupied and cells[i] == 0 if the i th cell is vacant, and you are given an integer n.
 *
 * Return the state of the prison after n days (i.e., n such changes described above).
 *
 * Example 1:
 *
 * Input: cells = [0,1,0,1,1,0,0,1], n = 7 Output: [0,0,1,1,0,0,0,0] Explanation: The following table summarizes the state of the prison on each day: Day 0: [0, 1, 0, 1, 1, 0, 0, 1] Day 1: [0, 1, 1, 0, 0, 0, 0, 0] Day 2: [0, 0, 0, 0, 1, 1, 1, 0] Day 3: [0, 1, 1, 0, 0, 1, 0, 0] Day 4: [0, 0, 0, 0, 0, 1, 0, 0] Day 5: [0, 1, 1, 1, 0, 1, 0, 0] Day 6: [0, 0, 1, 0, 1, 1, 0, 0] Day 7: [0, 0, 1, 1, 0, 0, 0, 0]
 *
 * Example 2:
 *
 * Input: cells = [1,0,0,1,0,0,1,0], n = 1000000000 Output: [0,0,1,1,1,1,1,0]
 *
 * Constraints:
 *
 * cells.length == 8
 * cells[i] is either 0 or 1.
 * 1 <= n <= 10 9
 */
function prisonAfterNDays(cells: number[], n: number): number[] {
  let m = new Map()
  let idx = 0
  const getNextDay = (cells: number[]): number[] => {
    let cells2 = Array.from({ length: 8 }, () => 0)
    for (let i = 1; i < 7; ++i)
      cells2[i] = cells[i - 1] == cells[i + 1] ? 1 : 0;
    return cells2
  }
  while (idx < n) {
    idx++;
    cells = getNextDay(cells);
    let key = cells.join('')
    if (m.has(key)) {
      let cycle = idx - m.get(key)
      n = n % cycle
      if (n == 0)
        n = cycle
      for (let i = 1; i < n; ++i) {
        cells = getNextDay(cells)
        // console.log("idx:", idx, "cycle:", cycle, "n:", n, m.get(key), key, "cells:", cells)
      }
      break
    } else {
      m.set(cells.join(''), idx)
    }
  }
  // console.log(m)
  return cells
};

function test_00957() {
  let cells = [0, 1, 0, 1, 1, 0, 0, 1], n = 7
  console.log(prisonAfterNDays(cells, n))
  cells = [1, 0, 0, 1, 0, 0, 1, 0], n = 1000000000
  console.log(prisonAfterNDays(cells, n)) // expect [0,0,1,1,1,1,1,0]
  cells = [1, 1, 0, 1, 1, 0, 0, 1], n = 300663720
  console.log(prisonAfterNDays(cells, n)) // expect [0,0,1,0,0,1,1,0]
}

test_00957()
