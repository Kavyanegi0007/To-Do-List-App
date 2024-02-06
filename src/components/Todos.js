import React, { useState } from 'react';
import "./Todos.css";
/* import Tasks from './Tasks'; */

export default function Todos(props) {

   const [todos, setTodos ] = useState([ ]);
   const [count, setCount] = useState(1);

   const deleteTodo = (snoToDelete) => {
    // Use setTodos to update state by filtering out the todo with snoToDelete
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.sno !== snoToDelete));
  };

   
   const handleClick = ()=>{
    
    const todoInput = document.getElementById("todo");
    const descInput = document.getElementById("desc");
    
    setCount((prevCount) => prevCount + 1); // Use the functional form

    
    if (todoInput && descInput) {
      setTodos((prevTodos) => [
        ...prevTodos,
        {
          sno: count, // Use the updated value of count
          title: todoInput.value,
          desc: descInput.value,
        },
      ]);
    }}
   return (
    <>

    <div className="container my-3 ${darkMode ? 'bg-black text-white' : 'bg-light'}" >

      
      <div className="mb-3 ">
      <label for="exampleFormControlInput1" className="form-label">Todo</label>
      <input type="email" className="form-control" id="todo"/>
      <div className="mb-3 my-2">
      <label className="form-label">Description</label>
      <textarea className="form-control" id="desc" rows="3"/>
      <button className="btn btn-sm btn-primary my-3" onClick={handleClick} id='btn'>Add</button>
     </div>

      </div>

     </div>


      <div className="container">
        <h3 className='text-center my-2'>To-Do List</h3>
        {todos.length === 0 ? <h6 >No remaining tasks!</h6> : 
        
        (  todos.map((todo) => (
          <div className="container my-5" key={todo.sno}>
            <h5>{todo.sno}. <i>title:</i> {todo.title}</h5>
            <p><i>desc: </i>{todo.desc}</p>
            {/* Step 3: Use the deleteTodo function */}
            <button
              className="btn btn-sm btn-success"
              onClick={() => deleteTodo(todo.sno)}
            >
              Delete
            </button>
          </div>
        )))} 

      </div>
    </>
  );
}
