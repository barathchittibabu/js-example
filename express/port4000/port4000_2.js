function fun(value) {
    let Input = value;
    let branchStudentMap = [];
  
    Input.branchStudent.map((branchstudent)=>{ 
        const branch = Input.branch.find((branch) => {return branchstudent.branchId == branch.id}) 
        const student = Input.student.find((student)=> {return branchstudent.studentId == student.id})
        branchStudentMap.push({
            id: branchstudent.id,
            branchId: branchstudent.branchId,
            branchName: branch.name, 
            studentId: branchstudent.studentId, 
            studentName: student.name}); 
        })
  
     return res.status(200).json({ branchStudentMap: branchStudentMap })
  }
  module.exports=fun;