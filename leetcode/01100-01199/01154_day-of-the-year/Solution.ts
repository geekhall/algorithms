/**
 * ID:    01154
 * Title: Day of the Year
 * Difficulty: Easy
 * Description: Given a string date representing a Gregorian calendar date formatted as YYYY-MM-DD, return the day number of the year.
 *
 * Example 1:
 *
 * Input: date = "2019-01-09" Output: 9 Explanation: Given date is the 9th day of the year in 2019.
 *
 * Example 2:
 *
 * Input: date = "2019-02-10" Output: 41
 *
 * Constraints:
 *
 * date.length == 10
 * date[4] == date[7] == '-', and all other date[i] 's are digits
 * date represents a calendar date between Jan 1 st, 1900 and Dec 31 th, 2019.
 */
function dayOfYear(date: string): number {
  let res = 0
  let year = parseInt(date.substr(0, 4))
  let month = parseInt(date.substr(5, 2))
  let day = parseInt(date.substr(8, 2))
  let daysOfMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
    daysOfMonth[1] = 29
  }
  for (let i = 0; i < month - 1; i++) {
    res += daysOfMonth[i]
  }
  res += day
  return res
};

function test_01154() {

}

test_01154()
