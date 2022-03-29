
create table name(
  id int not null,
  name varchar not null

  PRIMARY KEY (id)
);

create table category(
  id int not null,
  category varchar not null

  PRIMARY KEY (id)
);

create table status(
  id int not null,
  status varchar not null

  PRIMARY KEY (id)
);

INSERT INTO name(id,name) VALUES(1,"vasanth");
INSERT into name(id,name) VALUES(2,"jay");
insert into name(id,name) VALUES(3,"sathish");

insert into category(id,category) VALUES(1,"operation");
insert into category(id,category) VALUES(2,"IT");

INSERT INTO status(id,status) VALUES(1,"in-progress");

create table todo(
  id int not null,
  task varchar not null,
  category_id int not null,
  status_id int not null,
  due_date date not null

  PRIMARY KEY (id)

  FOREIGN key (name_id) REFERENCES name(id),
  FOREIGN key (category_id) REFERENCES category(id),
  FOREIGN KEY (status_id) REFERENCES status(id)

)

insert into todo(id,name_id,task,category_id,status_id,due_date)
VALUES(1,1,"Need to achieve 800 task",1,1,2022-03-29);

insert into todo(id,name_id,task,category_id,status_id,due_date)
VALUES(2,2,"train 5 interns",2,1,2022-03-29);

insert into todo(id,name_id,task,category_id,status_id,due_date)
VALUES(3,3,"Get trained devOps",2,1,2022-03-29);

insert into todo(id,name_id,task,category_id,status_id,due_date)
VALUES(4,3,"Get trained hasura",2,1,2022-03-29);

insert into todo(id,name_id,task,category_id,status_id,due_date)
VALUES(5,3,"Get trained hardware",2,1,2022-03-29);

select todo.id, name.name, todo.task, category.category, status.status, todo.due_date
from todo
left join name on todo.name_id = name.id
left join category on todo.category_id = category.id
left join status on todo.status_id = status.id;

SELECT name.name,COUNT(todo.name_id)as
user_task_count
from name,todo
where todo.name_id=name.id
group by name.name
order by user_task_count ASC