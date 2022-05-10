import React from 'react';
import Navbar from './Navbar';

export default function Header() {
    return (
        <header>
            <Navbar />
            <section
                className="background-image mt-0 d-flex flex-column align-items-center justify-content-center"
            >
                { /* Add background image. */ }
                <h1>Shoot for the Moon</h1>
                <button className="text-white btn btn-info">Learn More</button>
            </section>
        </header>
    )
}