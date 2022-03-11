import React from 'react'
import { render } from 'react-dom'
import StudentList from './StudentList'
import Header from './Header'
import InputStudent from './InputStudent';
import { v4 as uuidv4 } from "uuid";



class StudentsContainer extends React.Component{
    state={
       students: [], 
    }

    setUpdate = (updatedFullname, matric) => {
          this.setState({
               students: this.state.students.map(student => {
                    if(student.matric === matric){
                         student.fullname = updatedFullname
                    }
                    return student
               })
          })
    }

     handleChange = (matric) => {
               this.setState(prevState => ({
                    students: prevState.students.map(student => {
                         if(student.matric === matric){
                              return {
                                   ...student,
                                   graduated: !student.graduated,
                              }
                         }
                         return student
                    })
               }))
     }

     delStudent = (matric) => {
          this.setState({
               students: [
                  ...this.state.students.filter(student => {
                       return student.matric !== matric
                  })  
               ]
          })
     }

     addStudent = fullname => {
          const newStudent = {
               matric: uuidv4(),
               fullname: fullname,
               graduated: false
          }
          this.setState({
               students: [...this.state.students, newStudent]
          })
     }
     // //to fetch json data when component mounts
     // componentDidMount(){
     //      fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
     //           .then(response => response.json())
     //           .then(data => this.setState({students: data}))
     // }


     //to update the local storage whenever a student is added
     componentDidUpdate(prevProps ,prevState){
          if(prevState.students !== this.state.students){
               const temp = JSON.stringify(this.state.students)
               localStorage.setItem('students', temp)
          }
     }

     //uodate the view(frontend) with the state of the local storage
     componentDidMount(){
          const temp = localStorage.getItem('students')
          const loadedStudents = JSON.parse(temp)
          if(loadedStudents){
               this.setState({students: loadedStudents})
          }
     }


    render(){
        return (
             <div className='container'>
                    <div className='inner'>
                         <Header />
                         <InputStudent addStudentProps = {this.addStudent}/>
                    
                         <StudentList 
                              students={this.state.students} 
                              handleChangeProps={this.handleChange}
                              deleteStudentProps = {this.delStudent}
                              setUpdate={this.setUpdate}
                         />
                    </div>
               </div>
            
        )
}
}

export default StudentsContainer
