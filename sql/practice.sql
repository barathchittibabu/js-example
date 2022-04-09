
--1.select
SELECT * FROM Customers; --print the total table 

--2.select distinic --
SELECT DISTINCT Country FROM Customers; --proint different types of value
SELECT COUNT(DISTINCT Country) FROM Customers; --print the different country count value

--3.where 
SELECT * FROM Customers
WHERE Country='Mexico';--print the all mexico values

--4............And............
SELECT * FROM Customers
WHERE Country='Germany' AND City='Berlin';--print when the two condition are tru then print the rows of values


--5............or..............
SELECT * FROM Customers
WHERE Country='Germany' or City='Berlin'; --any one values are true then print the row of values

--6..........not............
SELECT * FROM Customers
WHERE not Country='Germany' --print the not matched values

--7-- and --- or ----
SELECT * FROM Customers
WHERE Country='Germany' AND (City='Berlin' OR City='München');

--8-- and     not---
SELECT * FROM Customers
WHERE NOT Country='Germany' AND NOT Country='USA';

--9.......asc...orders------
SELECT * FROM Customers
ORDER BY Country asc;

--10---...dec....rder...
select * from Customers
order by country desc;

--11----asc and desc order--------
SELECT * FROM Customers
ORDER BY Country ASC, CustomerName DESC;

--12-----null-------
SELECT CustomerName, ContactName, Address
FROM Customers
WHERE Address IS NULL;--...---when the values are true then print the value

--13-----not--null----
SELECT CustomerName, ContactName, Address
FROM Customers
WHERE Address IS NOT NULL;--...---when te values are true then the values are print


--14--....update---...
UPDATE Customers
SET ContactName = 'Alfred Schmidt', City= 'Frankfurt'
WHERE CustomerID = 1;---the values are print te condition check place value 

--15.....--delete--
DELETE FROM Customers 
WHERE CustomerName='Alfreds Futterkiste';
--OR---
DELETE FROM table_name;--THIS QUERY DELETE THE TABLE

--16------select top---....
SELECT TOP 3 * FROM Customers;--Print the table first three value
--or--
SELECT * FROM Customers
FETCH FIRST 3 ROWS ONLY;

--17-------min value-----
SELECT MIN(column_name)
FROM table_name
WHERE condition;
--string value---
SELECT MIN(ProductName) AS LargestPrice
FROM Products; 

--18--------max value----
SELECT MAX(column_name)
FROM table_name
WHERE condition;
--string value--
SELECT MAX(ProductName) AS LargestPrice
FROM Products; 

----count---
select count(ProductId'...column value')
from Products---   <--table name


--Avershe---
select avg(Price)
from Products--print  the average value


--......sum--
select sum(Quantity)
from Product----     


---.....Like-----------
select * from Customers
where CustomerName LIKE 'a%';----this query search and print the start letter of 'a'.
where CustomerName Like '%a';----this query search and print the end of value 'a'.
where customerName Like '%a%';---this query search the value in any position;
where CustomerName Like '_a%';---search the  value in second position
where CustomerName Like 'a__%';--STRAT'S WITH 'a' or at least 3 character in length
where customerName Like 'a%o';---start's with 'a' and ending with 'o'
where CustomerName NOT Like 'a%';----does not start's with "a"


-------Wildcards----
%	Represents zero or more characters              	            bl% finds bl, black, blue, and blob
_	Represents a single character                                	h_t finds hot, hat, and hit
[]	Represents any single character within the brackets         	h[oa]t finds hot and hat, but not hit
^	Represents any character not in the brackets	                h[^oa]t finds hit, but not hot and hat
-	Represents any single character within the specified range   	c[a-b]t finds cat and cbt
#	Represents any single numeric character	                        2#5 finds 205, 215, 225, 235, 245, 255, 265, 275, 285, and 295


--............IN.......---------------
SELECT * FROM Customers
WHERE Country IN ('Germany', 'France', 'UK');-----CHECK THE VALUES ARE IN THE TABLE then print the value....


-----------not in ----------
SELECT * FROM Customers
WHERE Country NOT IN ('Germany', 'France', 'UK');-----print the remaining value in the table ..........


----------betweeen------------
select * from month
where date_ between #07/01/1996# AND #07/31/1996#;


---------Aliases------------
SELECT CustomerID AS ID, CustomerName AS Customer---asign the aliases name for find the different
FROM Customers;


----------concadinate and aliases name----------
SELECT CustomerName, Address + ', ' + PostalCode + ' ' + City + ', ' + Country AS Address
FROM Customers;


-------------having.....................
SELECT COUNT(CustomerID), Country
FROM Customers
GROUP BY Country
HAVING COUNT(CustomerID) > 5;


--desc--order in having ---
SELECT COUNT(CustomerID), Country
FROM Customers
GROUP BY Country
HAVING COUNT(CustomerID) > 5
ORDER BY COUNT(CustomerID) DESC;


-----------using join in having---------------
SELECT Employees.LastName, COUNT(Orders.OrderID) AS NumberOfOrders
FROM (Orders
INNER JOIN Employees ON Orders.EmployeeID = Employees.EmployeeID)
GROUP BY LastName
HAVING COUNT(Orders.OrderID) > 10;



-------------EXISTS----------------
SELECT SupplierName
FROM Suppliers
WHERE EXISTS (SELECT ProductName FROM Products WHERE Products.SupplierID = Suppliers.supplierID AND Price < 20);




