/**
 * ID:    01736
 * Title: Latest Time by Replacing Hidden Digits
 * Difficulty: Easy
 * Description: You are given a string time in the form of hh:mm, where some of the digits in the string are hidden (represented by ?).
 *
 * The valid times are those inclusively between 00:00 and 23:59.
 *
 * Return the latest valid time you can get from time by replacing the hidden digits.
 *
 * Example 1:
 *
 * Input: time = "2?:?0" Output:"23:50" Explanation: The latest hour beginning with the digit '2' is 23 and the latest minute ending with the digit '0' is 50.
 *
 * Example 2:
 *
 * Input: time = "0?:3?" Output:"09:39"
 *
 * Example 3:
 *
 * Input: time = "1?:22" Output:"19:22"
 *
 * Constraints:
 *
 * time is in the format hh:mm.
 * It is guaranteed that you can produce a valid time from the given string.
 */
function maximumTime(time: string): string {
  let timeArr = time.split(':')
  let hour = timeArr[0]
  let minute = timeArr[1]
  let hourArr = hour.split('')
  let minuteArr = minute.split('')
  let maxMinuteArr = ['5', '9']

  for (let i = 0; i < hourArr.length; i++) {
    if (hourArr[0] === '?' && hourArr[1] === '?') {
      hourArr[0] = '2'
      hourArr[1] = '3'
    } else if (hourArr[0] === '?') {
      if (hourArr[1] === '0' || hourArr[1] === '1' || hourArr[1] === '2' || hourArr[1] === '3') {
        hourArr[0] = '2'
      } else {
        hourArr[0] = '1'
      }
    } else if (hourArr[1] === '?') {
      if (hourArr[0] === '2') {
        hourArr[1] = '3'
      } else {
        hourArr[1] = '9'
      }
    }
  }

  for (let i = 0; i < minuteArr.length; i++) {
    if (minuteArr[i] === '?') {
      minuteArr[i] = maxMinuteArr[i]
    }
  }
  hour = hourArr.join('')
  minute = minuteArr.join('')
  return hour + ':' + minute
};

function test_01736() {
  console.log(maximumTime("2?:?0"));
  console.log(maximumTime("0?:3?"));
  console.log(maximumTime("1?:22"));
}

test_01736()
