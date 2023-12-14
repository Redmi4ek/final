import React from "react";
import TodoItem from "./item/TodoItem";

const todos =[
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
  return (
    <div className=' text-white w-4/5 mx-auto'>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
    ))}
    </div>
  )
}

export default Home