import React, { useState } from "react"

const InputStudent = props => {
  const [inputText, setInputText] = useState({
    fullname: "",
  })

  const onChange = e => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (inputText.fullname.trim()) {
      props.addStudentProps(inputText.fullname)
      setInputText({
        fullname: "",
      })
    } else {
      alert("Please write fullname")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        className="input-text"
        placeholder="Add todo..."
        value={inputText.fullname}
        name="fullname"
        onChange={onChange}
      />
      <button className="input-submit">Submit</button>
    </form>
  )
}

export default InputStudent