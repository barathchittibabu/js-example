const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.get('/hello',(req,res)=>{
    res.send('hello :'+req.query.name);
});


app.post('/hello',(req,res)=>{
    res.json({
        name : 'hello '+req.body.name
    });
});


app.post('/hello1',(req,res)=>{
    console.log('hello ');
});

app.post("/student", (req, res) => {

    let student_list = req.body;
    let branchStudentMap = [];
  
    student_list.branchStudent.map((branchstudent)=>{ 
        const branch = student_list.branch.find((branch) => {return branchstudent.branchId == branch.id}) 
        const student = student_list.student.find((student)=>
         {return branchstudent.studentId == student.id})
        branchStudentMap.push({
            id: branchstudent.id,
            branchId: branchstudent.branchId,
            branchName: branch.name, 
            studentId: branchstudent.studentId, 
            studentName: student.name}); 
        })
  
     return res.status(200).json({ branchStudentMap: branchStudentMap })
  
  })


app.listen(3000,() => {
    console.log('srever started on 3000');
})
