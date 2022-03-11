import React, {useState, useEffect} from 'react'
import StudentList from './StudentList'
import Header from './Header'
import InputStudent from './InputStudent';
import { v4 as uuidv4 } from "uuid";

const StudentsContainer = () => {
     // const [students, setStudents] = useState([])
     const [students, setStudents] = useState(getInitialStudents())
     
     const handleChange = matric => {
          setStudents(prevState => 
               prevState.map(student => {
                    if(student.matric === matric){
                         return{
                              ...student,
                              graduated: !student.graduated,
                         }
                    }
                    return student
               })
          )
     }

     const delStudent = (matric) => {
          setStudents([
               ...students.filter(student => {
                    return student.matric !== matric
               }), 
          ])
     }

     const addStudent = fullname => {
          const newStudent = {
               matric: uuidv4(),
               fullname: fullname,
               graduated: false
          }
          setStudents([...students, newStudent])
     }

     const setUpdate = (updatedFullname, matric) => {
          setStudents(
               students.map(student => {
                    if(student.matric === matric){
                         student.fullname = updatedFullname
                    }
                    return student
               })
          )
     }

     
// //to fetch json data when component mounts
     // componentDidMount(){
     //      fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
     //           .then(response => response.json())
     //           .then(data => this.setState({students: data}))
     // }


//to update the local storage whenever a student is added
     // componentDidUpdate(prevProps ,prevState){
     //      if(prevState.students !== this.state.students){
     //           const temp = JSON.stringify(this.state.students)
     //           localStorage.setItem('students', temp)
     //      }
     // }

//uodate the view(frontend) with the state of the local storage
     // componentDidMount(){
     //      const temp = localStorage.getItem('students')
     //      const loadedStudents = JSON.parse(temp)
     //      if(loadedStudents){
     //           this.setState({students: loadedStudents})
     //      }
     // }

     //to get an initial state
     // useEffect(() => {
     //      console.log('side Effect happening')
     //      const temp = localStorage.getItem('students')
     //      const loadedStudents = JSON.parse(temp)

     //      if(loadedStudents){
     //           setStudents(loadedStudents)
     //      }
     // }, [])

     //getting stored students
     function getInitialStudents(){
          const temp = localStorage.getItem('students')
          const savedStudents = JSON.parse(temp)
          return savedStudents || []
     }

     //persistence
     useEffect(() => {
          const temp = JSON.stringify(students)
          localStorage.setItem('students', temp)
     }, [students])

     //return a UI
     return (
          <div className='container'>
               <div className='inner'>
                    <Header />
                         <InputStudent addStudentProps = {addStudent}/>
                         <StudentList
                              students={students} 
                              handleChangeProps={handleChange}
                              deleteStudentProps = {delStudent}
                              setUpdate={setUpdate}
                         />
               </div>
          </div>
     )
}
export default StudentsContainer
