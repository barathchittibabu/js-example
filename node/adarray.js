var input = { 
    branchStudent: [ 
        { id: 1, branchId: 1, studentId: 1 }, 
        { id: 2, branchId: 2, studentId: 2 }, 
        { id: 3, branchId: 2, studentId: 1 }, 
        { id: 4, branchId: 1, studentId: 3 } 
    ], 
    branch: [ 
        { id: 1, name: "CSE" }, 
        { id: 2, name: "IT" }
    ], 
    student: [ 
        { id: 1, name: "Jay" }, 
        { id: 2, name: "Sanjay" },
        { id: 3, name: "Rajesh" }
    ]
} 
let a = []; 
input.branchStudent.map((branchstudent)=>{ 
var branch = input.branch.find((branch) => {return branchstudent.branchId == branch.id}) 
var student = input.student.find((student)=> {return branchstudent.studentId == student.id})
a.push({  id: branchstudent.id, branchId: branchstudent.branchId, branchName: branch.name, studentId: branchstudent.studentId, studentName: student.name}); 
})

console.log(a)