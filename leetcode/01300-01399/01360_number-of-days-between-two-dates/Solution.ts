/**
 * ID:    01360
 * Title: Number of Days Between Two Dates
 * Difficulty: Easy
 * Description: Write a program to count the number of days between two dates.
 *
 * The two dates are given as strings, their format is YYYY-MM-DD as shown in the examples.
 *
 * Example 1:
 *
 * Input: date1 = "2019-06-29", date2 = "2019-06-30" Output: 1
 *
 * Example 2:
 *
 * Input: date1 = "2020-01-15", date2 = "2019-12-31" Output: 15
 *
 * Constraints:
 *
 * The given dates are valid dates between the years 1971 and 2100.
 */
function daysBetweenDates(date1: string, date2: string): number {
  let d1 = new Date(date1)
  let d2 = new Date(date2)
  return Math.abs(Math.floor((d2.getTime() - d1.getTime()) / (24 * 60 * 60 * 1000)))
};
function test_01360() {
  let date1 = "2019-06-29", date2 = "2019-06-30"
  console.log(daysBetweenDates(date1, date2));
  date1 = "2020-01-15", date2 = "2019-12-31"
  console.log(daysBetweenDates(date1, date2));

}

test_01360()
