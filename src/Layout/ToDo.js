import React from 'react';

export default function ToDo({ item, handleToggle }) {
    // Active button holding toggler, updates state in parent.
    const notDoneButton = (
    <button
        className="col-6 btn btn-info text-white"
        onClick={() => handleToggle(item)}
    >
        Mark as Done
    </button>
   );

   // Disabled button, no toggler, todo is marked as 'done'.
   const doneButton = (
    <button
        className="col-6 btn btn-secondary"
        disabled={true}
    >
        Done
    </button>
   )
    
    // Ternary the 'done' state of the todo and renders button accordingly.
    // Small --> Large screens, todo must take up 1/3 of available space
    // and wrap onto next row. Default state: 100% of width in single column.
    return (
        <div className="card px-4 py-2 my-3 shadow rounded flex-small-unit">
            <div className="card-body row justify-content-between align-text-middle">
                <p className="card-text dark-gray fw-bold mb-0 p-0 col-6">{item.text}</p>
                {item.done ? doneButton : notDoneButton }
            </div>
        </div>
    );
}