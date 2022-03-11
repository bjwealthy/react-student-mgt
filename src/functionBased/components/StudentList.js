import React from 'react'
import Student from './Student'

class StudentList extends React.Component{
    
    render(){
        return (
            <ul>
                {this.props.students.map(student => 
                    <li> 
                            <Student 
                                key={student.matric} 
                                student={student} 
                                handleGradProps={this.props.handleGradProps}
                                deleteStudentProps = {this.props.deleteStudentProps}
                                setUpdate={this.props.setUpdate}    
                            />   
                    </li>
                )}
            </ul>
        )
    }
}

export default StudentList
