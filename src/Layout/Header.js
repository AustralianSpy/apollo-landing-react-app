import React from 'react';
import Navbar from './Navbar';

export default function Header() {
    return (
        <header>
            <Navbar />
            <section
                className="background-image mt-0 d-flex flex-column justify-content-center"
            >
                <div className="d-flex flex-column mx-auto w-75 align-items-center align-items-sm-start">
                    <h1>Shoot for the Moon</h1>
                    <button className="text-white btn btn-info">Learn More</button>
                </div>
            </section>
        </header>
    )
}