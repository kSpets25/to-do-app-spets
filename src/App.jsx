import { useState } from 'react'
import './App.css'


export default function App() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState("")

  function remove(todoText) {
    setTodos(todos.filter(todo => todo !== todoText));
     e.preventDefault()
  }
  
  function handleSubmit(e) {
    e.preventDefault()
    if (todos.includes(input)) return
    setTodos ([...todos, input]);
    setInput("")
    
    
  }

  return (
    <>
      <form onSubmit= {handleSubmit}>
        <label htmlFor="todo">Enter Todo: </label>
        <input Type="text" name="todo" id="todo" onChange = {e => setInput(e.target.value)} value={input} />
        <button Type="submit">Add</button>
      </form>
      <>
      <ul>
        {todos.map ((todo, i) => <li onClick= {() => remove (todo)} key={i}>{todo}</li>)}
      </ul>
      </>
    </>
  )
}
