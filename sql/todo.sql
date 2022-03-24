
                     
select todo.id, todo.name, todo.task, category.category, status.status, todo.due_date
from todo
left join category on todo.category_id = category.id
left join status on todo.status_id = status.id;

select name ,count (*) as occurance from todo
group by name