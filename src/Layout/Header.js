import React from 'react';
import Navbar from './Navbar';

export default function Header() {
    return (
        <header>
            <Navbar />
            <section>
                { /* Add background image. */ }
                <h1>Shoot for the Moon</h1>
                <button>Learn More</button>
            </section>
        </header>
    )
}