select DepartmentID,AVG(Salary) from Employee group by DepartmentID

select * from Employee

select EmployeeID,	Name,	bonus,	[1],[2] from Employee
pivot
(
	sum(salary) for DepartmentID in ([1],[2])
) as data

select * from
(select EmployeeID,	Name,Salary,bonus,	DepartmentID from Employee) tabledata
pivot
(
	sum(salary) for DepartmentID in ([1],[2])
) as data

create Table ProductType
(
	ProductTypeID bigint primary key Identity(1,1),
	Name nvarchar(256),
	Description nvarchar(max),
)

create Table Product
(
	ProductID bigint primary key Identity(1,1),
	Name nvarchar(256),
	Description nvarchar(max),
	ProductType bigint foreign key references ProductType(ProductTypeID),
	PurchasePrice float,
	SalePrice float,
	AvailableQuantity int,
	Discount float,
	ManufacturedOn datetime
)

create Table Sale
(
	SaleID bigint primary key Identity(1,1),
	ProductID bigint foreign key references Product(ProductID),
	Quantity int,
	SoledOn datetime
)