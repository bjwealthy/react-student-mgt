import React, {Component} from 'react'
class InputStudent extends Component{
    state = {
        fullname: ''
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        if(this.state.fullname.trim()){
            this.props.addStudentProps(this.state.fullname)
            this.setState({
                fullname: "",
            })
        }else{
           alert("please write student's full name")
        }
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit} className='form-container'>
                <input 
                    className='input-text'
                    type='text' 
                    placeholder='Add a student' 
                    value={this.state.fullname}
                    name= "fullname"
                    onChange = {this.onChange}
                />
                <button className='input-submit'>Submit</button>
            </form>
        )
    }
}
export default InputStudent