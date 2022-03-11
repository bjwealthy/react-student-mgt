import React from 'react'
import Student from './Student'

class StudentList extends React.Component{
    render(){
        return (
            <ul>
                {this.props.students.map(student => 
                    (
                        <Student 
                            key={student.matric} 
                            student={student} 
                            handleChangeProps={this.props.handleChangeProps}
                            deleteStudentProps = {this.props.deleteStudentProps}
                            setUpdate={this.props.setUpdate}
                            
                        />
                    )
                )}
            </ul>
        )
    }
}

export default StudentList
