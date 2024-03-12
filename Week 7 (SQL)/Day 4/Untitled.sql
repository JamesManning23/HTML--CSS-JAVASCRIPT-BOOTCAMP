-- display data from table
select fname, lname, salary from employee;
select * from employee;
select * from employee where sex ='f';
select * from employee where salary > 30000 and sex = 'f';


select fname, lname, salary from employee where sex='m';
select * from employee where salary < 30000;
select * from employee where salary is null;


UPDATE employee
SET salary = salary * 1.1; -- Increase salary by 10%

select fname, lname, salary from employee;
-- limit used to show only a limited amount of data
-- offset is used to skip data in a table

-- sorting data in mysql
-- ascending a to z lowest to highest value
-- descending z to a highest to lowest value
-- in mysql by default the data is sorted based on the primary key column as ascending sort
-- order by command is used to sort data in mysql.

select * from employee order by fname asc;
select * from employee order by fname asc, lname asc;

SELECT * FROM employee ORDER BY salary desc LIMIT 1;
select * from employee where salary is not null order by salary asc limit 1;
SELECT * FROM employee ORDER BY salary desc LIMIT 5;
select * from employee where sex = 'f' order by salary desc limit 1;
select * from employee where sex = 'm' order by salary asc limit 1;


-- mysql alias
-- used to rename column or table in the result

select fname as 'First Name', lname as 'Last Name', salary from employee;

-- Aggreagte function
-- max(), min(), avg(), count(), sum()

-- What is the maximum salary you pay to your employees
SELECT MAX(Salary) AS 'Max Salary' FROM Employee;
-- How many employees are working in your company?
SELECT COUNT(*) AS 'No Of Emp' FROM Employee;
SELECT COUNT(Salary) AS 'No Of Emp' FROM Employee;
SELECT * FROM Employee;


select max(salary) as 'Maximum Salary', min(salary) as 'Minimum Salary' from employee;
select sum(salary), avg(salary) from employee where sex = 'f';




select * from employee;
SELECT * FROM employee ORDER BY salary desc;
select * from employee order by sex, fname asc;
select * from employee limit 2;
select fname, lname from employee;
select distinct address from employee;
select min(salary) from employee;
select sum(salary) from employee where sex='m';
select min(salary), max(salary) from employee;



-- like operator is a logical operator that tests whether a string contains a speicifed pattern or not
-- the percentage wildcard matches any string of 0 or more characters

-- syntax: select columnName from TableName where columnName LIKE pattern

-- like a% = finds any values that start with a
-- like %a = finds any values that end with a
-- like %a% = finds any values that have a in any position
-- like _a = finds any values that have a in the second character
-- like a_ = finds any values that starts with a and are at leat 2 characters in length
-- like a__ = finds any values that starts with a and are at leat 3 characters in length


select * from employee where fname like 'a%';
select * from employee where fname like '%n';

-- SELECT Employees Name who has 'me' in their name.
select * from employee where fname like '%me%';
-- Select employees who's first Name can be anything but should have 'oh' after firt character.
select * from employee where fname like '_oh%';
-- Display first Name of employee which has 'Rames' and the last character can be anything.
select * from employee where fname like '%rames%';
-- Select record of Employee who is born in 1965.
select * from employee where bdate like  '%1965%';
-- Display all employees who's first Name starts with A and ends with d.
select * from employee where fname like 'a%d';
-- Display all employees who's first Name start with J and does not ends with n.
select * from employee where fname like 'j%' and fname not like '%n';
-- display all employees who's first Name start with J and should be at least 4 characters.
select * from employee where fname like 'j%___';

-- concat()
-- this displays full name and salary of all employess;

select concat(fname,' ', lname) as 'Full Name' from employee;
select concat(fname,' ', lname) as 'Emplyee', concat('£',salary,' ','per year') as 'salary' from employee;


-- grouping data in mysql

-- group by, this will group data based on similar value
-- how many male and femlae employees are working in the comapany
select count(*) as 'Total No', sex from employee where sex is not null group by sex;


select salary, count(salary) as 'Number of Salaried Employees' from employee where salary is not null group by salary;

select min(salary) as 'Minimum Salary', max(salary) as 'Max Salary', sum(salary) as 'Sum of Salaries', sex from employee group by sex;

-- nested queries
-- display all employees who recieve highest salary


select * from employee where salary = (select max(salary) from employee);
-- display all enployees working in the research dept
SELECT * FROM Employee WHERE DNO=(SELECT Dnumber FROM Department WHERE DNAME='Research');
-- display any employee whose  is jennifer
select snn from employee where fname = 'jennifer';
select * from employee where superssn = (select snn from employee where fname = 'jennifer');


use employee;

-- select all information from the employee table and sort them by thier firstName? 
select * from employee order by fname asc;
-- select all employees who's name start with A and ends with a? 
select * from employee where fname like 'a%a';
-- select all employees who's name contain oh? 
select * from employee where fname like '%oh%';
-- select all maximum, minimum, and average salary for all female and male employees seperately? 
select min(salary),max(salary),avg(salary),sex from employee where sex = 'm' or sex='f' group by sex;
-- select all different salaries?
select distinct salary from employee;
-- select female employee who is receiving highest salary?
select * from employee where salary;
-- display full name and salary of all employees and sort them by thier first and then last name from A to Z? 

-- display all employees who's first Name start with J and should be at least 5 characters in lenght? 


-- 26/2/24 Selecting Data From Multiple Tables

-- Union -- Join 

-- the union operator is used the result of multiple select queries
-- use union to combine the data of multiple tables as one single table

-- union  will not replicate duplicate data, the new table column names will be from the first sekect query table.
-- union all will replicate duplicate data.

-- union will be used if you have a store report for each month in a separated table
 

USE Colleges;
CREATE TABLE MathStudents
	(
		stdName VARCHAR(10),
        stdAge INT
    );
insert into MathStudents (stdName, stdAge) values 
		('Saxon', 20),
		('Georgi', 30),
		('Tracey', 25),
		('Ahmad', 23),
		('Hina', 35),
		('Dorothee', 22);
CREATE TABLE EnglishStudents
	(
		stdName VARCHAR(10),
        stdAge INT
    );
insert into EnglishStudents (stdName, stdAge) values 
		('Saxon', 20),
		('Georgi', 30),
		('Carlie', 25),
		('Helene', 23),
		('Hina', 35),
		('Antoni', 22);
SELECT * FROM MathStudents;
SELECT * FROM EnglishStudents;

select stdname, stdage from englishstudents
union
select stdname, stdage from mathstudents;

select stdname, stdage from englishstudents
union all
select stdname, stdage from mathstudents;

-- a join caluse is used to combine rows from two or more tablesm, based on a related column


CREATE TABLE instructor
	(
		instructorid int primary key,
        instructorname varchar(20)
    );

CREATE TABLE trainer
	(
		trainerid int primary key,
        trainername varchar(20),
        trainerage int
	
    );

insert into instructor (instructorid, instructorname) values
(2, 'Mark'),
(1, 'Abdul'),
(3, 'Matt'),
(4, 'Sandra');

insert into trainer (trainerid, trainername, trainerage) values
(1, 'Abdul', 32),
(2, 'Zak', 26),
(3, 'Waqas', 36);

describe instructor;

-- inner join only commmon data from both tablels
select * from instructor inner join trainer on trainername=instructorname;

-- left join: returns all records from the left table and only the matched records from the right table.
select * from instructor left join trainer on trainername=instructorname;
-- right join: returns all records from the right table and only the matched records from the left table.
select * from instructor right join trainer on trainername=instructorname;

use company;

-- Display all departments name and their manager name
select dname, concat(fname, ' ', lname) from employee left join department on mgrssn=ssn;
-- Display all departments name and projects in each department
-- display all employees full name and their dependent name
select concat(fname,' ', lname) as 'Employee' from employee
union 
select dependent_name from dependent;




-- 27/2/24
-- What is difference between Join and Union?
-- union combines data from 2 select qeueries whereas join 2 or more tables based on a common property
-- What is Inner Join
-- inner join only returns common data from both tables
-- What is Left Join?
-- returns all records from the left table and only the matched records from the right table
-- What is Right Join
-- returns all records from the right table and only the matched records from the left table
-- What is Cross Join
-- cross join returns all records from both tables
-- What is Selft join
-- joins a table back to itself.
-- What is difference between Union and Union All?
-- union will not display replicated data whereas union all will display replicated data


use company;
select * from employee;

-- display all employee name and the manaegr name

select concat(emp.fname,' ',emp.lname) as 'Employee Name', concat(mgr.fname,' ',mgr.lname) as 'manager' from employee as emp left join employee as mgr on emp.superssn=mgr.ssn;

-- Deleting Data in MySql:

-- on delete cascade delete the rows from the child table automatically 
-- on update cascade updates the rows from the child automatically.
-- on delete set null
-- These MUST be set to the FOREIGN KEY


create database deleteDB;
USE deletedb;

create table country
(
id int primary key,
name varchar(20)
);

insert into country values (1,'uk'),(2,'usa'),(3,'germany');

create table city
(
cityid int primary key auto_increment,
cityname varchar(20) not null,
countryid int,
foreign key(countryid) references country(id) on delete cascade on update cascade
);

insert into city (cityname,countryid) values ('london',1),('leeds',1),('new york',2),('berlin',3);



update country set id=50 where name='usa';

select now();
select curdate();
select current_time();

select monthname('1969-03-29');
select monthname(curdate());
select day(curdate());


select dayname(curdate());


-- Tuesday, 27 February 2024
select dayname(curdate()), day(curdate()), monthname(curdate()), year(curdate());
-- Display any gender and number of employees for any gender which you have more than 3 employee

-- display the department name in which more than 3 employees are working



-- 28/2/24

-- Which join is used to select all data from left table and
-- left join
-- Write a query which select all employees and thier department name if any?
select * from employee left join department on dno=dnumber;
-- Which join is used to select all data from right table 
-- right join
-- Write a query which select the current month name?
select monthname(curdate());
-- write a query which display the first name of all employees in upper case?
select upper(fname) from employee;
-- write a query which display current day name?
select dayname(curdate());

-- -- Dispaly all employees fo research department
SELECT * FROM Employee WHERE DNO=department Number of Research;
SELECT Dnumber FROM department WHERE Dname='Research';

-- case expression (conditionals)

-- give bonus to employees based on their salary;

select fname, lname, salary,
case 
when salary=25000 then salary+55000
else null
end 'New Salary'
from employee;


--  Write a query which will give bonus to employees as below
	-- 10000 - 19000 - 1000
    -- 20000 - 29000 - 2000
    -- 30000 - 39000 - 3000
    -- 40000 - 49000 - 4000
    -- 50000 - 59000 - 5000
-- otherwise do not give bonus to the employee


SELECT 
    fname, 
    lname,
    salary,
    CASE
        WHEN salary >= 10000 or salary <= 19000 THEN salary + 1000
        WHEN salary >= 20000 or salary <= 29000 THEN salary + 2000
        WHEN salary >= 30000 or salary <= 39000 THEN salary + 3000
        WHEN salary >= 40000 or salary <= 49000 THEN salary + 4000
        WHEN salary >= 50000 or salary <= 59000 THEN salary + 5000
        ELSE salary
    END AS 'salary bonus'
FROM 
    employee;

select * from department;
select 
fname,
lname,
salary,
case
when dname = 'headquarters' then salary + 100000
when dname = 'administration' then salary + 100000
when dname = 'research' then salary + 100000
else salary
end as 'department bonus'
from employee
inner join department on dno=dnumber;



-- store procedure

-- a pre compiled statement stored into the database similar like tables stored in the database
-- a stored is a precompipled and stored database object that consists of one or more sql statments
-- stored procedutes can be called and exected from the application code like a function in javascript.


-- when creating a stored procedure we need to change the delimeter from ; to ...

/*
create procedure procedurename(parameter if any)
begin
statement- to be executed when procedure is called.
end new delimeter


*/


delimiter $$$
create procedure allemployee()
begin
select fname, lname, salary, address from employee;
end$$$

call allemployee();

-- parameter
-- IN . we pass values to the procedure
-- OUT procedure pass value to the user
-- INOUT doing the job of both in and out

delimeter $$
create procedure employeedata(in firstname varchar(30))
begin 
select * from employee where fname=firstname;
end $$
call employeedata('ryan');


-- Create a stored procedure which will display employees of any department which you are passing as argument.
delimeter %%%
create procedure 


-- display all employees namd and their manager name for any manger whose name you are passing as argument to the stored procedure
-- display total amount of salary for any gender that you are passing it as argument


