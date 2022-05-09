import React, { useState, useEFfect } from 'react';

import Progress from './Progress';
import ToDoList from './ToDoList';

const progress = null;
/*
    TODO: Hold state of completed Todo items here so that it
    can be passed down to the sibling progress bar.
*/

export default function Main() {
    return (
        <main>
            <Progress percent={progress} />
            <ToDoList progress={progress} />
        </main>
    )
}