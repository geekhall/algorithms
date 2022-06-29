/**
 * ID:    00406
 * Title: Queue Reconstruction by Height
 * Difficulty: Medium
 * Description: You are given an array of people, people, which are the attributes of some people in a queue (not necessarily in order). Each people[i] = [h i, k i ] represents the i th person of height h i with exactly k i other people in front who have a height greater than or equal to h i.
 *
 * Reconstruct and return the queue that is represented by the input array people. The returned queue should be formatted as an array queue, where queue[j] = [h j, k j ] is the attributes of the j th person in the queue (queue[0] is the person at the front of the queue).
 *
 * Example 1:
 *
 * Input: people = [[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]] Output: [[5,0],[7,0],[5,2],[6,1],[4,4],[7,1]] Explanation: Person 0 has height 5 with no other people taller or the same height in front. Person 1 has height 7 with no other people taller or the same height in front. Person 2 has height 5 with two persons taller or the same height in front, which is person 0 and 1. Person 3 has height 6 with one person taller or the same height in front, which is person 1. Person 4 has height 4 with four people taller or the same height in front, which are people 0, 1, 2, and 3. Person 5 has height 7 with one person taller or the same height in front, which is person 1. Hence [[5,0],[7,0],[5,2],[6,1],[4,4],[7,1]] is the reconstructed queue.
 *
 * Example 2:
 *
 * Input: people = [[6,0],[5,0],[4,0],[3,2],[2,2],[1,4]] Output: [[4,0],[5,0],[2,2],[3,2],[1,4],[6,0]]
 *
 * Constraints:
 *
 * 1 <= people.length <= 2000
 * 0 <= h i <= 10 6
 * 0 <= k i < people.length
 * It is guaranteed that the queue can be reconstructed.
 */
function reconstructQueue(people: number[][]): number[][] {
  people.sort((a, b) => {
    if (a[0] !== b[0]) {
      return b[0] - a[0] // sort by height descending when height is not the same
    } else {
      return a[1] - b[1] // sort by k ascending when height is the same
    }
  })
  console.log("people: ", people);
  let res: number[][] = []
  for (let i = 0; i < people.length; i++) {
    res.splice(people[i][1], 0, people[i]) // insert at index people[i][1]
    console.log("i:", i, "res: ", res);
  }
  return res
};

function test_00406() {
  let people = [[7, 0], [4, 4], [7, 1], [5, 0], [6, 1], [5, 2]]
  console.log(reconstructQueue(people));
  people = [[6, 0], [5, 0], [4, 0], [3, 2], [2, 2], [1, 4]]
  console.log(reconstructQueue(people));
}

test_00406()
