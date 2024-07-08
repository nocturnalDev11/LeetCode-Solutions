### Intuition
The problem is to find the top three highest salaries in each department. This involves ranking the employees within each department by their salary and then filtering out only the top three ranks. By using SQL window functions, we can achieve this efficiently.

### Approach
1. **Use a Subquery with Window Function:**
   - Use `DENSE_RANK()` to assign ranks to employees within each department based on their salaries.
   - The `PARTITION BY` clause ensures that the ranking restarts for each department.
   - The `ORDER BY` clause sorts the salaries in descending order, so the highest salaries get the lowest rank numbers (starting from 1).

2. **Filter Top Ranks:**
   - Filter the results of the subquery to include only rows where the rank is 3 or lower (`rn <= 3`).

3. **Join with Department Table:**
   - Join the filtered employee data with the `Department` table to get the department names.

4. **Select and Order:**
   - Select the department name, employee name, and salary.
   - Order the final result by department name and salary in descending order for better readability.

### Complexity
- **Time Complexity:** The time complexity depends on the number of employees (`n`). Ranking within partitions and sorting has a complexity of \(O(n \log n)\) due to the sorting step.
- **Space Complexity:** The space complexity is \(O(n)\) as we are storing intermediate results for all employees.

### Code
```sql
# Write your MySQL query statement below
SELECT d.name AS Department, e.name AS Employee, e.salary AS Salary
FROM (
    SELECT 
        e.*,
        DENSE_RANK() OVER (PARTITION BY e.departmentId ORDER BY e.salary DESC) AS rn
    FROM Employee e
) e
JOIN Department d ON e.departmentId = d.id
WHERE e.rn <= 3
ORDER BY d.name, e.salary DESC;
```

### Explanation
- **Subquery:**
  - `DENSE_RANK() OVER (PARTITION BY e.departmentId ORDER BY e.salary DESC) AS rn`: This ranks employees within each department by salary in descending order.
  - The result includes all columns from the `Employee` table along with the computed rank (`rn`).

- **Main Query:**
  - `JOIN Department d ON e.departmentId = d.id`: This joins the filtered employee data with the `Department` table to include the department names.
  - `WHERE e.rn <= 3`: Filters the rows to keep only the top three salaries within each department.
  - `ORDER BY d.name, e.salary DESC`: Orders the final result by department name and salary in descending order for better readability.

This approach efficiently finds the top three earners in each department and presents the results in a clear and ordered format.
