let express = require('express');
let app = express();
let bodyParser = require('body-parser');

app.use(bodyParser.json());
app.get('/student',(req,res) => {
    var Input = {
    branchStudents: [
        { id: 1, branchId: 1, studentId: 1 },
        { id: 2, branchId: 2, studentId: 2 },
        { id: 3, branchId: 2, studentId: 1 },
        { id: 4, branchId: 1, studentId: 3 }
    ],
    branches: [
        { id: 1, name: "CSE" },
        { id: 2, name: "IT" }
    ],
    students: [
        { id: 1, name: "Jay" },
        { id: 2, name: "Sanjay" },
        { id: 3, name: "Rajesh" }
    ]
}

let branchStudentMap=[];
      Input.branchStudents.map((branchStudent)=>{
        let branch =Input.branches.find((branch)=> {return branchStudent.branchId==branch.id });
        let student =Input.students.find((student)=> {return student.id == branchStudent.studentId });
        branchStudentMap.push({
            id:branchStudent.id,
            branchId:branch.id,
            branchName:branch.name,
            studentId:student.id,
            studentName:student.name
        });
      });
          res.json(branchStudentMap);
});
app.listen(3000),()=>{
    console.log("3000 is running")
}