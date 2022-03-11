
import React, {useEffect, useState} from 'react'
import styles from './Student.module.css';

const Student = () => {
    const [editing, setEditing] = useState(false)
    
    const handleEditing = () => {
        this.setState({editing: true})
    }

    const handleUpdatedDone = (event) => {
        if(event.key === 'Enter'){
            this.setState({editing: false})
        }
    }
     
    const completedStyle = {
        fontStyle: "italic",
        color: "#595959",
        opacity: 0.4,
        textDecoration: "line-through",
    }
    
    
    //return UI
    return (
        <div>Student</div>
    )
}

export default Student

// class Student extends React.Component{
//     state={
//         editing: false,
//     }

//     //handling editing
//     handleEditing = () => {
//         this.setState({
//                 editing: true
//             }
//         )
//     }

//     //take away the student edit text input 
//     handleUpdatedDone = (event) => {
//         if(event.key === 'Enter'){
//             this.setState({editing: false})
//         }
//     }

//     //to be executed whenever a student is deleted
//     componentWillUnmount(){
//         console.log('cleaning up...')
//     }

//     render(){
//         //js object style
//         const graduatedStyle = {
//             fontStyle: "italic",
//             color: '#595959',
//             opacity: 0.4,
//             textDecoration: 'line-through'
//         }

//         //destructuring
//         const {matric, graduated, fullname} = this.props.student

//         //hide/display todo text/field
//         let viewMode = {}
//         let editMode = {}
//         if(this.state.editing){
//             viewMode.display = "none"
//         }else{
//             editMode.display = "none"
//         }

//         return ( 
//             <li className={styles.item}>
//                 <div onDoubleClick={this.handleEditing} style={viewMode}>
//                     <input 
//                         className={styles.checkbox}
//                         type='checkbox'
//                         checked={graduated}
//                         onChange={() => this.props.handleChangeProps(matric)}
//                     />
//                     <button 
//                         onClick = 
//                             {() => this.props.deleteStudentProps(matric)}
//                     >
//                         Delete Student
//                     </button>
//                     <span style={graduated ? graduatedStyle : null}>
//                         {fullname}
//                     </span>
//                 </div>
//                 <input 
//                     type="text" 
//                     className={styles.textInput} 
//                     style={editMode}
//                     value={fullname}
//                     onChange={
//                             e => {this.props.setUpdate(e.target.value, matric)}
//                         }
//                     onKeyDown={this.handleUpdatedDone}
//                     />
                
//             </li>
//         )
// }
// }

// export default Student




