# Approach
1. **Identify Second Highest Salary:**
   - Use `MAX()` to find the highest salary in the table.
   - Then, use `MAX()` again with a `WHERE` clause to find the maximum salary that is less than the highest salary (this gives us the second highest salary).

2. **Handle Edge Cases:**
   - If there is only one distinct salary (`COUNT(DISTINCT salary) = 1`), then there is no second highest salary, and we should return `NULL`.

3. **Query Implementation:**
   - Construct a query that performs the above steps and returns the second highest salary or `NULL` if it doesn't exist.

# SQL Query
```sql
SELECT 
    (
        SELECT DISTINCT salary
        FROM Employee
        ORDER BY salary DESC
        LIMIT 1 OFFSET 1
    ) AS SecondHighestSalary;
```

# Explanation
- **Subquery:**
  - `SELECT DISTINCT salary FROM Employee ORDER BY salary DESC LIMIT 1 OFFSET 1`: This subquery retrieves the salary that ranks second when ordered in descending order (`ORDER BY salary DESC`).
  - `LIMIT 1 OFFSET 1` ensures we get the second row when ordered by salary, effectively giving us the second highest salary.

- **Outer Query:**
  - Wraps the subquery and selects the result as `SecondHighestSalary`.
  - If there is no second highest salary (e.g., when there is only one distinct salary), the query will return `NULL`.

# Example
For the provided examples:
- Example 1:
  ```
  +----+--------+
  | id | salary |
  +----+--------+
  | 1  | 100    |
  | 2  | 200    |
  | 3  | 300    |
  +----+--------+
  ```
  The second highest salary is `200`.

- Example 2:
  ```
  +----+--------+
  | id | salary |
  +----+--------+
  | 1  | 100    |
  +----+--------+
  ```
  There is only one distinct salary, so the result is `NULL`.

This SQL query efficiently finds the second highest salary from the `Employee` table or returns `NULL` if there isn't one, meeting the problem's requirements.