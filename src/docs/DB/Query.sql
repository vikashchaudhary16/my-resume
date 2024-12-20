select top 10 * from Employee order by Salary desc

select e.DepartmentID,d.Name,COUNT(e.DepartmentID) from Employee e
inner join Department d on e.DepartmentID=d.DepartmentID
group by e.DepartmentID,d.Name

select * from Employee where Name like 'A%' and Salary > 96000