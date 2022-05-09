import React from 'react';
import Navbar from './Navbar';

export default function Header() {
    return (
        <header>
            <Navbar />
            <section
                className="bg-image"
                style={{
                    backgroundImage: 'ur(../../public/imgs/astronaut.png)'
                }}
            >
                { /* Add background image. */ }
                <h1>Shoot for the Moon</h1>
                <button>Learn More</button>
            </section>
        </header>
    )
}