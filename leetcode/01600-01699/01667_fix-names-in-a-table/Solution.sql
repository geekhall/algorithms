/**
 * ID:    01667
 * Title: Fix Names in a Table
 * Difficulty: Easy
 * Description: Table: Users
 *
 * +----------------+---------+ | Column Name | Type | +----------------+---------+ | user_id | int | | name | varchar | +----------------+---------+ user_id is the primary key for this table. This table contains the ID and the name of the user. The name consists of only lowercase and uppercase characters.
 *
 * Write an SQL query to fix the names so that only the first character is uppercase and the rest are lowercase.
 *
 * Return the result table ordered by user_id.
 *
 * The query result format is in the following example.
 *
 * Example 1:
 *
 * Input: Users table: +---------+-------+ | user_id | name | +---------+-------+ | 1 | aLice | | 2 | bOB | +---------+-------+ Output: +---------+-------+ | user_id | name | +---------+-------+ | 1 | Alice | | 2 | Bob | +---------+-------+
 */
SELECT user_id, concat(upper(substring(name,1,1)),lower(substring(name,2,length(name)-1))) as name
FROM Users
order by user_id

