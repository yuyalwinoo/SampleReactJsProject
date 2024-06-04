import React, { useState } from 'react'
import Student from './Student';
import AddStudent from './AddStudent';

const Two = () => {
    const [students,setStudents] = useState([]);
    const addNewStudent = (data) =>{
        setStudents([...students,data]);
    }
  return (
    <div>
        {
            students.length > 0 ? (
                students.map(student =>(
                    <Student name={student.name} live = {student.live} key={student.name}/>
                ))
            ) : (<p>
                Data Not found!
            </p>)
        }
        <AddStudent addNewStudent = {addNewStudent}/>
    </div>
  )
}

export default Two