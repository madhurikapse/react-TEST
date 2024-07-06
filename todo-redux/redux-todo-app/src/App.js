// src/App.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo} from './component/action';
import "./App.css"

function App() {
    const [todoinput, settodoInput] = useState('');
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    const handlebutton= () => {
        if (todoinput) {
            dispatch(addTodo(todoinput)); }
    };

    return (
        <div className="a">         
            <h1>Todo List</h1>
            <input
                type="text"
                value={todoinput}
                   placeholder="add todo here"
                onChange={(e) => settodoInput(e.target.value)}
             
            />
            <button onClick={handlebutton}>Add</button>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        {todo.text}
                    </li>
                ))}
            </ul>
           
        </div>
    );
}


export default App;
