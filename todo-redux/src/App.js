// src/App.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo } from './reduxexample/action';
import "./App.css"

function App() {
    const [todoinput, settodoInput] = useState('');
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    const handleAddTodo = () => {
        if (todoinput) {
            dispatch(addTodo(todoinput));
            settodoInput('');
        }
    };

    return (
        <div className="a">         
            <h1>Todo List</h1>
            <input
                type="text"
                value={todoinput}
                onChange={(e) => settodoInput(e.target.value)}
                placeholder="ADD TODO"
            />
            <button onClick={handleAddTodo}>Add</button>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        {todo.text}
                        
                        <button onClick={() => dispatch(deleteTodo(index))}>Delete</button>
                    </li>
                ))}
            </ul>
           
        </div>
    );
}


export default App;
