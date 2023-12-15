import React, { useState } from "react";
import TodoItem from "./item/TodoItem";
import CreateTodoField from "./create-todo-field/CreateTodoField";
const data =[
{
    id: 'wewew',
    title: 'asadad',
    isCompleted: false
},
{
    id: 'wew',
    title: 'asd',
    isCompleted: false
},
{
    id: 'wewe',
    title: 'aaaaaa',
    isCompleted: false
}
]

const Home = () => {
    const [todos, setTodos] = useState(data) // наши состояния нельзя мутировать  

    const changeTodo = _id => {
        const copy = [...todos]
        const current = copy.find(t => t.id === _id) // туду по id которые мы дали 
        current.isCompleted = !current.isCompleted  // грубо переворачивает из тру в фолс
        setTodos(copy) // меняем значение  
    }
    const deleteTodo = _id => setTodos(prevTodos => prevTodos.filter(t => t.id !== _id));
 
    


    

  return (
    <div className=' text-white w-4/5 mx-auto'>
      <h1 className='text-2xl font-bold text-center mb-4'>Todo</h1>  
      {todos.map(todo => (
        <TodoItem key={todo.id} 
          todo={todo} 
          changeTodo={changeTodo}
          deleteTodo={deleteTodo}
        />
    ))}
      <CreateTodoField setTodos={setTodos} />
    </div>
  )
}

export default Home