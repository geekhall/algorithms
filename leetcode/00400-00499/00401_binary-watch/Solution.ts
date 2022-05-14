/**
 * ID:    00401
 * Title: Binary Watch
 * Difficulty: Easy
 * Description: A binary watch has 4 LEDs on the top which represent the hours (0-11), and the 6 LEDs on the bottom represent the minutes (0-59). Each LED represents a zero or one, with the least significant bit on the right.
 *
 * For example, the below binary watch reads "4:51".
 *
 * Given an integer turnedOn which represents the number of LEDs that are currently on, return all possible times the watch could represent. You may return the answer in any order.
 *
 * The hour must not contain a leading zero.
 *
 * For example, "01:00" is not valid. It should be "1:00".
 *
 * The minute must be consist of two digits and may contain a leading zero.
 *
 * For example, "10:2" is not valid. It should be "10:02".
 *
 * Example 1:
 *
 * Input: turnedOn = 1 Output: ["0:01","0:02","0:04","0:08","0:16","0:32","1:00","2:00","4:00","8:00"]
 *
 * Example 2:
 *
 * Input: turnedOn = 9 Output: []
 *
 * Constraints:
 *
 * 0 <= turnedOn <= 10
 */
function readBinaryWatch(turnedOn: number): string[] {
  let res: string[] = new Array()
  let hour = new Map<number, Array<string>>()
  let minute = new Map()
  hour.set(0, ['0:'])
  hour.set(1, ['1:', '2:', '4:', '8:'])
  hour.set(2, ['3:', '5:', '9:', '6:', '10:'])
  hour.set(3, ['7:', '11:'])
  minute.set(0, ['00'])
  minute.set(1, ['01', '02', '04', '08', '16', '32'])
  minute.set(2, ['03', '05', '09', '17', '33', '06', '10', '18', '34', '12', '20', '36', '24', '40', '48'])
  minute.set(3, ['07', '11', '19', '35', '13', '21', '37', '25', '41', '49', '14', '22', '38', '26', '42', '50', '28', '44', '52', '56'])
  minute.set(4, ['58', '54', '46', '30', '57', '53', '45', '29', '51', '43', '27', '39', '23', '15'])
  minute.set(5, ['31', '47', '55', '59'])
  for (let i = 0; i < 4; i++) {
    let hours = hour.get(i)
    let minutes = minute.get(turnedOn - i)
    if (minutes === undefined)
      continue
    for (let j = 0; j < hours!.length; j++) {
      for (let k = 0; k < minutes.length; k++) {
        res.push(hours![j] + minutes[k])
      }
    }
  }
  return res
};

function test_00401() {
  let turnedOn = 2
  console.log(readBinaryWatch(turnedOn));
  turnedOn = 9
  console.log(readBinaryWatch(turnedOn)); // expect []
  turnedOn = 4
  console.log(readBinaryWatch(turnedOn));
}

test_00401()
