// You are given an integer array score of size n, where score[i] is the score of the ith athlete in a competition. All the scores are guaranteed to be unique.

// The athletes are placed based on their scores, where the 1st place athlete has the highest score, the 2nd place athlete has the 2nd highest score, and so on. The placement of each athlete determines their rank:

// The 1st place athlete's rank is "Gold Medal".
// The 2nd place athlete's rank is "Silver Medal".
// The 3rd place athlete's rank is "Bronze Medal".
// For the 4th place to the nth place athlete, their rank is their placement number (i.e., the xth place athlete's rank is "x").
// Return an array answer of size n where answer[i] is the rank of the ith athlete.

function findRelativeRanks(score: number[]): string[] {

  let ranks: string[] = []
  for (let i = 0; i < score.length; i++) {
    let rank = 1
    for (let j = 0; j < score.length; j++) {
      if (score[i] < score[j]) {
        rank++
      }
    }
    if (rank === 1) {
      ranks.push("Gold Medal")
    } else if (rank === 2) {
      ranks.push("Silver Medal")
    } else if (rank === 3) {
      ranks.push("Bronze Medal")
    } else {
      ranks.push(String(rank))
    }
  }
  return ranks
};

function findRelativeRanks1(score: number[]): string[] {
  let ranks: string[] = new Array()
  let m = new Map()
  for (let i = 0; i < score.length; i++) {
    m.set(score[i], "")
  }
  let keys = Array.from(m.keys()).sort((a, b) => b - a);
  for (let i = 0; i < keys.length; i++) {
    if (i === 0) {
      m.set(keys[i], "Gold Medal")
    } else if (i === 1) {
      m.set(keys[i], "Silver Medal")
    } else if (i === 2) {
      m.set(keys[i], "Bronze Medal")
    } else {
      m.set(keys[i], String(i + 1))
    }
  }

  for (let i = 0; i < score.length; i++) {
    ranks.push(m.get(score[i]))
  }
  return ranks;
}

function test_00506() {
  // Input: score = [5,4,3,2,1]
  // Output: ["Gold Medal","Silver Medal","Bronze Medal","4","5"]
  // Explanation: The placements are [1st, 2nd, 3rd, 4th, 5th].
  let nums1 = [5, 4, 3, 2, 1]
  console.log(findRelativeRanks1(nums1));
  console.log(nums1);

  // Input: score = [10,3,8,9,4]
  // Output: ["Gold Medal","5","Bronze Medal","Silver Medal","4"]
  // Explanation: The placements are [1st, 5th, 3rd, 2nd, 4th].

  let nums2 = [10, 3, 8, 9, 4]
  console.log(findRelativeRanks1(nums2));
  console.log(nums2);
}
test_00506()
