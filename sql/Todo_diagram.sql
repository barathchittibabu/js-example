1.this is diagram link
-- https://dbdiagram.io/d/622ae69e61d06e6eade27e54


table todo{
  id int[pk]
  name_id int 
  task varchar
  category_id int
  status_id int
  due_date date
}

Table name{
  id int[pk]
  name varchar
}

Table category{
  id int[pk]
  category varchar
}

Table status{
  id int[pk]
  status varchar
}


ref:todo.name_id > name.id
ref:todo.category_id > category.id
ref:todo.status_id > status.id

Ref: "name"."name" < "name"."id"
