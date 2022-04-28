/**
 * Set a - Set b
 * @param full
 * @param part
 * @returns
 */
function diffSet(a: Set<number>, b: Set<number>): Set<number> {
  return new Set([...a].filter(x => !b.has(x)))
}

/**
 * Set a union Set b
 * @param a
 * @param b
 * @returns
 */
function unionSet(a: Set<number>, b: Set<number>): Set<number> {
  return new Set([...a, ...b])
}

/**
 * Set a intersection Set b
 * @param a
 * @param b
 * @returns
 */
function intersection(a: Set<number>, b: Set<number>): Set<number> {
  return new Set([...a].filter(x => b.has(x)))
}

function setTest() {
  let a = new Set(Array.from({ length: 5 }, (_, k) => k + 1))
  let b = new Set([3, 4, 5, 6, 7])

  console.log(diffSet(a, b));   // Set(2) { 1, 2 }
  console.log(diffSet(b, a));   // Set(2) { 6, 7 }
  console.log(unionSet(a, b));    // Set(7) { 1, 2, 3, 4, 5, 6, 7 }
  console.log(intersection(a, b));  // Set(3) { 3, 4, 5 }
}
