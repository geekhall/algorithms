/**
 * ID:    01185
 * Title: Day of the Week
 * Difficulty: Easy
 * Description: Given a date, return the corresponding day of the week for that date.
 *
 * The input is given as three integers representing the day, month and year respectively.
 *
 * Return the answer as one of the following values {"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"}.
 *
 * Example 1:
 *
 * Input: day = 31, month = 8, year = 2019 Output:"Saturday"
 *
 * Example 2:
 *
 * Input: day = 18, month = 7, year = 1999 Output:"Sunday"
 *
 * Example 3:
 *
 * Input: day = 15, month = 8, year = 1993 Output:"Sunday"
 *
 * Constraints:
 *
 * The given dates are valid dates between the years 1971 and 2100.
 */
function dayOfTheWeek1(day: number, month: number, year: number): string {
  let d = new Date(year, month - 1, day)
  return d.toLocaleString('en-US', { weekday: 'long' })
};

function dayOfTheWeek(day: number, month: number, year: number): string {
  const isLeap = (year: number) => {
    return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0
  }
  const weeks = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const days = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334]

  let total = 4// 1970-12-31
  for (let i = 1971; i < year; i++) {
    if (isLeap(i)) {
      total += 366
    } else {
      total += 365
    }
  }
  if (isLeap(year) && month > 2) {
    total += 1
  }
  total += days[month - 1] + day
  return weeks[total % 7]
}

function test_01185() {
  let day = 31, month = 8, year = 2019
  console.log(dayOfTheWeek(day, month, year));
  day = 18, month = 7, year = 1999
  console.log(dayOfTheWeek(day, month, year));
  day = 31, month = 12, year = 1970
  console.log(dayOfTheWeek(day, month, year));
  day = 21, month = 12, year = 1980 // expect Sunday
  console.log(dayOfTheWeek(day, month, year));

}

test_01185()
