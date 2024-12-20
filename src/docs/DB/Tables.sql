use SampleDB
go

create table Department
(
	DepartmentID	bigint Primary Key Identity(1,1),
	Name			varchar(100)
)

create table Employee
(
	EmployeeID		bigint Primary Key Identity(1,1),
	Name			varchar(100),
	Salary			Decimal(13, 2),
	bonus			DOUBLE PRECISION,
	DepartmentID	bigint Foreign key references Department(DepartmentID)
)

