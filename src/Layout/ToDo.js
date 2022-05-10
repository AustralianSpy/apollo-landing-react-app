import React from 'react';

export default function ToDo({ item, handleToggle }) {
    // Active button holding toggler, updates state in parent.
    const notDoneButton = (
    <button
        className="col-6 btn btn-primary"
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
    
    // Checks the 'done' state of the todo and renders button accordingly.
    return (
        <div className="card">
            <div className="card-body row justify-content-between">
                <p className="card-text col-6">{item.text}</p>
                {item.done ? doneButton : notDoneButton }
            </div>
        </div>
    );
}