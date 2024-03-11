import React from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'
import Header from './Header'
import axios from 'axios'
export default function TodoMain() {
  const[Input,setInput] = React.useState({
    'body': ''
  })
  
const[EditText,setEditText] = React.useState({
    'body': ''
  })
const[TodoItem,setTodoItem]=React.useState([])
const [isloading,setisLoading] = React.useState(true)


React.useEffect(()=>{
  fetchdata()
  console.log(TodoItem,'these are the todo Items from the fetch data')
},[])

const fetchdata = async () =>{
  try{
    const Response = await axios.get("http://127.0.0.1:8000/TodoAPP/todo/")
    setTodoItem(Response.data) 
    setisLoading(false)
  } catch(error){
  console.log(error)
  }
}

const postTodo = async ()=> {
{
  try{
     await axios.post("http://127.0.0.1:8000/TodoAPP/todo/",TodoItem)
     setTodoItem({'body': ''})
     fetchdata()
  }catch(error){
    console.log(error)
  }}
}

console.log(TodoItem,'these are todoitems')
const AddItems = (body)=>{ // the fetchData fnctn arleady populates the setTodo Array
setTodoItem(prev =>({
  ...prev,'body':body}))

}

const HandleDelete = async  (id) =>{
try{
await axios.delete(`http://127.0.0.1:8000/TodoAPP/todo/${id}`)
const newList =TodoItem.map(todo => todo.id !== id)
setTodoItem(newList)
}catch(error){
  console.log(error)
}
}

const HandleEdit =async (id,value) =>{
try{
const response = await axios.patch(`http://127.0.0.1:8000/TodoAPP/todo/${id}`,value)
const newTodos = TodoItem.map(todo => todo.id === id?response.data:todo)
setTodoItem(newTodos)
}catch(error){
  console.log(error)
}
}

const HandleClick = () =>{
  HandleEdit(EditText.id,EditText)
}


const HandleCheckBox = (id,value)=>{
HandleEdit(id,{
  'completed' : !value
})
}

  return (
    <div>
      <main>
      <Header/>
      <TodoForm 
      Input ={Input}
      setInput = {setInput}
      AddItems={AddItems}
      postTodo={postTodo}/>
      {TodoItem.map((todo)=> 
       <Todo {...todo}
       key = {todo.id}
       isloading={isloading}
       HandleCheckBox = {()=>HandleCheckBox(todo.id,todo.completed)}
       HandleDelete ={()=>HandleDelete(todo.id)}
       HandleEdit ={EditableItem => HandleClick(EditableItem,id)}
       />
      )}
     


      </main>
    </div>
  )
}
