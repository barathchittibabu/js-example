-- 1.this is diagram link
-- https://dbdiagram.io/d/622ae69e61d06e6eade27e54

Table branch_student{
  id int [pk] // auto-increment
  branch_id int 
  student_Id int
}

Table branch {
  id int [pk]
  name varchar
  }
  
Table student {
  id int [pk]
  name varchar 
}

Ref:branch_student.branch_id > branch.id
Ref:branch_student.student_Id > student.id
ref:"branch_student"."student_Id" < "branch_student"."id"