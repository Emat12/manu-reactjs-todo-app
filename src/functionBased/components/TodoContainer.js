import React, { useState,useEffect } from "react"
import Header from "./Header"
import InputTodo from "./InputTodo"
import TodosList from "./TodosList"
import { v4 as uuidv4 } from "uuid"

//Navigation 
import Navbar from "./Navbar"

//React Router components
import {Route,Routes} from "react-router-dom" 

//Pages 
import About from "../pages/About"
import NoMatch from "../pages/NoMatch"


const TodoContainer = () => {
  const [todos, setTodos] = useState(getInitialTodos())

  const handleChange = id => {
    setTodos(prevState =>
      prevState.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          }
        }
        return todo
      })
    )
  }

  const delTodo = id => {
    setTodos([
      ...todos.filter(todo => {
        return todo.id !== id
      }),
    ])
  }

  const addTodoItem = title => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false,
    }
    setTodos([...todos, newTodo])
  }

  const setUpdate = (updatedTitle, id) => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.title = updatedTitle
        }
        return todo
      })
    )
  }
    //global function 
    function getInitialTodos(){
      //console.log("test run")
      //getting stored items
      const temp=localStorage.getItem("todos")
      const savedTodos=JSON.parse(temp)
      return savedTodos || []
    }

  /** OR 
   * useEffect(()=>{
   console.log("test run")
   //getting the stored items 
   const temp=localStorage.getItem("todos")
   const loadedTodos=JSON.parse(temp)
    if(loadedTodos){
      setTodos(loadedTodos)
    }
  },[])
   */

 useEffect(()=>{ 
  //storing todos items
  const temp=JSON.stringify(todos)
  localStorage.setItem("todos",temp)},[todos])
 

  return (
    <div className="container">
      <div className="inner">
      <Navbar />
        <Header />
        <InputTodo addTodoProps={addTodoItem} />
        <TodosList
          todos={todos}
          handleChangeProps={handleChange}
          deleteTodoProps={delTodo}
          setUpdate={setUpdate}
        />
      </div>  
    </div>
  );
  
}

export default TodoContainer