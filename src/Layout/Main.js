import React, { useState, useEffect } from 'react';

import Progress from './Progress';
import ToDoList from './ToDoList';

/*
    TODO: Hold state of completed Todo items here so that it
    can be passed down to the sibling progress bar.
*/

export default function Main() {
    const [todos, setTodos] = useState([]);
    
    // Create hard-coded array of 12 todo objects, to pass onto
    // individual child components. List holds state of all todos.
    useEffect(() => {
        const testData = [];
        for (let i = 0; i < 12; i++) {
            const todo = {
                id: i,
                text: `Todo Task ${i+1}`,
                done: false,
            };
            testData.push(todo);
        }
        setTodos([...testData]);
    }, []);

    // Handles whether or not a todo is complete or not and updates it in state.
    // Handler passed onto child components for onClick function.
    const handleToggle = (todo) => {
        const tempList = [...todos];
        const todoChange = {
            ...todos[todo.id],
            done: !todo.done,
        };
        tempList[todo.id] = todoChange;
        setTodos([...tempList]);
    };
    
    return (
        <main className="px-4 px-sm-5">
            <Progress todos={todos} />
            <ToDoList todos={todos} handleToggle={handleToggle} />
        </main>
    )
}