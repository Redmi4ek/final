import React from 'react'
import Check from './Check'
import { BsTrash } from 'react-icons/bs'

const TodoItem = ({ todo , changeTodo, deleteTodo }) => {
  return (
    <div 
      className=' flex items-center justify-between mb-4 
      rounded-2xl bg-gray-800 p-5 w-full'>
        <button className=' flex items-center ' 
          onClick={() => changeTodo(todo.id)}>       
        <Check isCompleted={todo.isCompleted}/>
        <span className={`${todo.isCompleted ? 'line-through' : ''}`}>{todo.title}</span>
      </button>
      <button onClick={() => deleteTodo(todo.id)}>
        <BsTrash size={22} className=' text-gray-900  
                                hover:text-red-700'/>
      </button>
    </div>
  )
}

export default TodoItem