import React, { useState, useEffect } from 'react';

import Navbar from './Navbar';
import Header from './Header';
import Progress from './Progress';
import ToDoList from './ToDoList';

/*
    TODO: Hold state of completed Todo items here so that it
    can be passed down to the sibling progress bar.
*/

export default function Layout() {
    return (
        <>
            <header>
                <Navbar />
                <Header />
            </header>
            <main>
                <Progress />
                <ToDoList />
            </main>
            <footer>
                { /* Empty, used for design purposes. */ }
            </footer>
        </>
    );
}