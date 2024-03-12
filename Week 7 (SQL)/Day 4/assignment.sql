-- Task 1:

create database breakdowncompany;
use breakdowncompany;

create table members
(
memberid varchar(10) primary key,
memberfirstname varchar(20) not null,
memberlastname varchar(20) not null,
memberlocation varchar(20)
);

create table vehicle
(
vehiclereg varchar(10) primary key not null,
vehiclemake varchar(10),
vehiclemodel varchar(10),
memberid varchar(10) 
);

create table engineer
(
engineerid int primary key,
engineerfname varchar(20) not null,
engineerlname varchar(20) not null
);

create table breakdown
(
breakdownid int primary key auto_increment,
vehiclereg varchar(10),
engineerid int,
breakdowndate date,
breakdowntime time,
breakdownlocation varchar(20)
);

alter table vehicle add foreign key(memberid) references members(memberid);
alter table breakdown add foreign key(vehiclereg) references vehicle(vehiclereg);
alter table breakdown add foreign key(engineerid) references engineer(engineerid);

-- Task 2:

insert into members (memberid,memberfirstname,memberlastname,memberlocation) values ('1','James','Manning','London'),('2',''),('2','Sofia','Garcia','Barcelona'),('3','Ethan','Kim','Seoul'),('4','Isabella','Rossi','Rome'),('5','Olivia','Smith','Sydney');

insert into vehicle (vehiclereg,vehiclemake,vehiclemodel,memberid) values ()

