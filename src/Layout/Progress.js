import React, { useState, useEffect } from 'react';

export default function Progress({ todos }) {
    const [progress, setProgress] = useState(0);

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
    
    // Ternary check for width/progress prevents NaN error during state race conditions.
    return (
        <div className="container-fluid d-flex flex-column flex-sm-row flex-w mb-0 justify-content-end">
            <p className="progress-text fw-bolder dark-gray my-2">{`${progress}`}% Done</p>
            <div className="progress flex-bar rounded-pill">
                <div className="progress-bar dark-purple" role="progressbar" style={{ width: `${(isNaN(progress) ? 0 : progress)}%`}} aria-valuenow={Number(progress)} aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </div>
    );
}