import React, {useState} from 'react'
import Check from './Check'
import { BsTrash, BsPencil} from 'react-icons/bs'

const TodoItem = ({ todo , changeTodo, deleteTodo, editTodo  }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.title);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditedText(todo.title); // Вернем исходный текст при отмене редактирования
  };

  const handleSaveEdit = () => {
    if (editedText.trim() !== "") { // Проверка на пустую строку
      editTodo(todo.id, editedText.trim());
      setIsEditing(false);
    }
  };
  
  return (
    <div className='mb-2'>
    {!isEditing ? (
      <div className={`flex items-center justify-between bg-gray-800 px-4 py-2 rounded-md ${todo.isCompleted ? 'line-through' : ''}`}>
        <div onClick={() => changeTodo(todo.id)} className='cursor-pointer'>
          <Check isCompleted={todo.isCompleted} />
          <span className={`${todo.isCompleted ? 'line-through' : ''}`}>{todo.title}</span>
        </div>
        <div>
          <button onClick={handleEdit} className='text-blue-500 mr-2'>
            <BsPencil />
          </button>
          <button onClick={() => deleteTodo(todo.id)} className='text-red-500'>
            <BsTrash />
          </button>
        </div>
      </div>
    ) : (
      <div className='flex items-center justify-between bg-gray-800 px-4 py-2 rounded-md'>
        <input
          type='text'
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
          onBlur={handleSaveEdit}
          className='bg-transparent w-full border-none outline-none text-white'
        />
        <div>
          <button onClick={handleSaveEdit} className='text-green-500 mr-2'>
            <BsPencil />
          </button>
          <button onClick={handleCancelEdit} className='text-red-500'>
            <BsTrash />
          </button>
        </div>
      </div>
    )}
  </div>
);

};

export default TodoItem