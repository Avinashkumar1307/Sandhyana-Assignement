import React, { useState } from 'react';

function DashBoard() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim() !== '') {
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((todo, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className='w-full h-screen bg-gradient-to-r from-[#97b9f0] via-[#6e98db] to-[#8298ba]'>
    <div className="max-w-md mx-auto pt-8 ">
      <h1 className="text-3xl font-bold text-center mb-4">Todo App</h1>
      <form onSubmit={handleSubmit} className="flex items-center mb-4">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter a todo"
          className="w-full px-4 py-2 mr-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
        />
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Add&nbsp;Todo</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} className="flex items-center justify-between border-b border-gray-300 py-2">
            <span>{todo}</span>
            <button onClick={() => handleDeleteTodo(index)} className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:bg-red-600">Delete</button>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
}


export default DashBoard
