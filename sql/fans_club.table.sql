--id  name     member       status      month
--------------------------------------------------
--1   jay      member       active      lastmonth
--2   barath   tvi          active      lastmonth
--3   jeevan   ajith        deactive    3month
--4   ajith    thalapathy   active      3yrs


create table member_ship
(
id int not null,
member varchar(30)
primary key(id)
)

insert into member_ship(id,member) VALUES(1,'Off Member');
insert into member_ship(id,member) VALUES(1,'Off Member');
insert into member_ship(id,member) VALUES(1,'Off Member');

create table currunt_status
(
id int not null,
status varchar(30),
primary key(id)
)

INSERT INTO currunt_status(id,status) VALUES(1,'active from date');
INSERT INTO currunt_status(id,status) VALUES(2,'releaving date');

create table duration
(
id int not null,
month date,
primary key(id)
)


INSERT INTO duration(id,month)VALUES (1,'2022-02-01');
INSERT INTO duration(id,month)VALUES (2,'2022-01-01');
INSERT INTO duration(id,month)VALUES (3,'2019-03-31');

create table fans_club
(
id int not null,
name varchar(30) not null,
member_id int not null,
status_id int not null,
month_id int not null,

primary key(id),

foreign key(member_id) references member_ship(id),
foreign key(status_id) references currunt_status(id),
foreign key(month_id) references duration(id)
)

INSERT INTO fans_club(id,name,member_id,status_id,month_id)VALUES (1,'jay',1,1,1);
INSERT INTO fans_club(id,name,member_id,status_id,month_id)VALUES (2,'barath',2,1,1);
INSERT INTO fans_club(id,name,member_id,status_id,month_id)VALUES (3,'jeevan',3,2,2);
INSERT INTO fans_club(id,name,member_id,status_id,month_id)VALUES (4,'ajith',2,1,3);


select todo.id, name.name, todo.task, category.category, status.status, todo.due_date
from todo
left join name on todo.name_id = name.id
left join category on todo.category_id = category.id
left join status on todo.status_id = status.id;


select fans_club.id, fans_club.name, member_ship.member, currunt_status.status, duration.month
from fans_club
left join member_ship on fans_club.member_id = member_ship.id
left join currunt_status on fans_club.status_id = currunt_status.id
left join duration on fans_club.month_id = duration.id


          -- count the active status--
select currunt_status.status,count(fans_club.status_id)as
active_result
from currunt_status,fans_club
where fans_club.status_id=currunt_status.id
group by currunt_status.status

