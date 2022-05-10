import React from 'react';
import ToDo from './ToDo';

export default function ToDoList({ todos, handleToggle }) {
    // Map of child components to render.
    const todosList = todos.map((todo) => <ToDo key={todo.id} item={todo} handleToggle={handleToggle} />);
    
    return (
        <section className="mb-4">{todosList}</section>
    )
}