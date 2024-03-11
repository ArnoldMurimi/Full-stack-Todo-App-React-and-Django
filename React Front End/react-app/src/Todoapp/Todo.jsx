import React from 'react'

export default function Todo({isloading,created,id,body,completed,HandleDelete,HandleEdit,HandleCheckBox}) {
   const [Edit,setEdit] = React.useState(false)
   const [EditText,setEditText] = React.useState({ 'body': ''})
  

  
  
  const EditTaskInput = (e)=>{
    HandleEdit(e.target.value)
  }


  const startEditing = () =>{
    setEdit(true)
  }

  const HandleSubmit = (e) =>{
   e.preventDefault()
   setEdit(false)
  }
  
   return (
    <div className='TodoContainer'>
      <div> {isloading ? <div> isloading</div> :
      <div>
    <button onClick ={HandleCheckBox}>Checked</button>
    {!Edit && 
       <div>
        <span title = {id}>
        {body}{ new Date(created).toLocaleString()}  
        </span>
      </div>}
    { Edit && 
    <form onSubmit={HandleSubmit}>
      <input 
      onChange = {EditTaskInput}
      value ={EditText.body}
      />
    </form>}
    <button onClick = {startEditing}>Edit</button>
    <button onClick = {()=>HandleDelete}>Delete</button>

      </div>
      }</div>

    </div>
  )
}
