import React from 'react'

export default function TodoForm({postTodo,Input,setInput}) {

const  HandleChange = (e) =>{
  setInput(prev => ({
    ...prev,'body':e.target.value
  }))
}
console.log(Input,'this is the input in the form')
const HandleSubmit  = (e) =>{
e.preventDefault()
postTodo()
setInput({'body': ''})
}

  return (
    <div>
      <form onSubmit={HandleSubmit}>
        <button>Add Task</button>
        <input
        placeholder='Enter Your Tasks here.....'
        type='text'
        onChange={HandleChange}
        value={Input.body}
        />
      </form>
    </div>
  )
}
