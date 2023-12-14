import React from "react";

const todos =[
{
    title: 'asadad',
    isCompleted: false
},
{
    title: 'asd',
    isCompleted: false
},
{
    title: 'aaaaaa',
    isCompleted: false
}
]

const Home = () => {
  return (
    <div className='bg-gray-900 h-screen text-white'>
      {todos.map(todo => (
        <div>{todo.title}</div>
       ))}
    </div>
  )
}

export default Home