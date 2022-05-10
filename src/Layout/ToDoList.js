import React, { useEffect, useState } from 'react';
import ToDo from './ToDo';

export default function ToDoList() {
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

    // Map of child components to render.
    const todosList = todos.map((todo) => <ToDo key={todo.id} item={todo} handleToggle={handleToggle} />);
    
    return (
        <section>{todosList}</section>
    )
}