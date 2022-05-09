import React, { useState, useEffect } from 'react';

import Navbar from './Navbar';
import Header from './Header';
import Progress from './Progress';
import ToDoList from './ToDoList';

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