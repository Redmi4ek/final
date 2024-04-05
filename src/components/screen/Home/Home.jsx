import React, { useState } from "react";
import TodoItem from "./item/TodoItem";
import CreateTodoField from "./create-todo-field/CreateTodoField";
import { Link } from 'react-router-dom';


// import axios from "axios"
// const baseUrl = "https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1 "

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

  // const [imageURL, setImageURL] = useState(""); // состояние для URL изображения

  // useEffect(() => {
  //     // Выполнение запроса к API для получения изображения
  //     axios.get("https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1")
  //         .then(response => {
  //             // Обновление состояния для URL изображения
  //             setImageURL(response.data[0].url);
  //         })
  //         .catch(error => {
  //             console.error("Error fetching image:", error);
  //         });
  // }, []);

    const [todos, setTodos] = useState(data) // наши состояния нельзя мутировать  

    const changeTodo = _id => {
        const copy = [...todos]
        const current = copy.find(t => t.id === _id) // туду по id которые мы дали 
        current.isCompleted = !current.isCompleted  // грубо переворачивает из тру в фолс
        setTodos(copy) // меняем значение  
    }
    const deleteTodo = _id => setTodos(prevTodos => prevTodos.filter(t => t.id !== _id));
 
    const editTodo = (_id, newText) => {
      setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === _id ? { ...todo, title: newText } : todo
      )
    );
    };


    

  return (
    <div className=' text-white w-4/5 mx-auto'>
      <h1 className='text-2xl font-bold text-center mb-4'>Todo</h1>
      <Link className='text-2xl font-bold text-center mb-4' to="/weather">Go to Weather</Link>
      {todos.map(todo => (
        <TodoItem key={todo.id} 
          todo={todo} 
          changeTodo={changeTodo}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
    ))}
      <CreateTodoField setTodos={setTodos} />
      {/* {imageURL && <img className='w-1/2 h-1/2' src={imageURL} alt="Random cat" />} */}
    </div>
  )
}

export default Home