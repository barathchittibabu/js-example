-- Create
CREATE Table person(
  id int NOT NULL,
  name varchar NOT NULL,
  PRIMARY KEY(id)
)

CREATE Table todo(    
  id int NOT NULL,
  person_id int NOT NULL,
  priority_id int NOT NULL,
  category_id int NOT NULL,
  status_id int NOT NULL,
  description varchar ,
  due_date date NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (person_id) REFERENCES person(id),
  FOREIGN KEY (priority_id) REFERENCES priority(id),
  FOREIGN KEY (category_id) REFERENCES category(id),
  FOREIGN KEY (status_id) REFERENCES status(id)
)

CREATE Table category(
  id int NOT NULL,
  name varchar NOT NULL,

  PRIMARY KEY(id)
)
 
CREATE Table priority(
  id int NOT NULL,
  level varchar NOT NULL,

  PRIMARY KEY(id)
)

CREATE Table status(
  id int NOT NULL,
  name varchar NOT NULL,
  
  PRIMARY KEY(id)
)

--Insert
INSERT INTO person(id,name) 
VALUES
(1,'VASANTH')
(2,'JAY') 
(3,'SATISH') 

INSERT INTO category(id,name) 
VALUES
(1,'Operations')
(2,'IT')


INSERT INTO priority(id,level) 
VALUES
(1,'High')
(2,'Medium')
(3,'Low')

INSERT INTO status(id,name) 
VALUES
(1,'Completed')
(2,'In-progress')
(3,'Not-Completed')

INSERT INTO todo(id,person_id,priority_id,category_id,status_id,description,due_date)
VALUES
(1,1,1,1,1,' Need to achieve 800 orders','2021-09-30')
(2,2,2,2,2,'Train 5 interns','2021-09-30')
(3,3,3,2,3,'Get trained in devops','2021-09-30')

 
 
 INSERT INTO todo(id,person_id,priority_id,category_id,status_id,description,due_date)
VALUES
(4,1,null,null,1,' Need to achieve all targets','2021-09-30')


--Select 
SELECT person.id,person.name AS person_name,todo.description,category.id AS category_id,category.name AS 
category_name,priority.level,status.name AS status_name,due_date
FROM todo
FULL OUTER JOIN person ON person.id = todo.person_id
INNER JOIN category ON category.id = todo.category_id
INNER JOIN priority ON priority.id = todo.priority_id
INNER JOIN status ON status.id = todo.status_id

  