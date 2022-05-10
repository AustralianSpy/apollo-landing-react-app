import React, { useState, useEffect } from 'react';

import Progress from './Progress';
import ToDoList from './ToDoList';

/*
    TODO: Hold state of completed Todo items here so that it
    can be passed down to the sibling progress bar.
*/

export default function Main() {
    const [todos, setTodos] = useState([]);
    const [progress, setProgress] = useState(0);
    
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

    // Keeps track of how many todos are complete, passed along as props to progress bar.
    useEffect(() => {
        let i = 0;

        // For each todo, check truthy value of 'done', add to counter if done.
        todos.forEach((todo) => {
            if (todo.done) i++;
        });
        // Calculate percent based on number of todos and counter.
        const percent = Math.round( (i / todos.length) * 100 );
        setProgress(percent);
    }, [todos]);

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
        <main>
            <Progress progress={progress} />
            <ToDoList todos={todos} handleToggle={handleToggle} />
        </main>
    )
}