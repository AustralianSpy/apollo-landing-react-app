import React from 'react';

export default function Navbar() {
    return (
        <nav className="navbar p-2 dark-purple text-white navbar-dark navbar-expand-sm">
            <div className="container-fluid">
                <a href="/" className="navbar-brand d-flex flex-row align-content-center justify-content-between justify-content-sm-start">
                    <img src={`${process.env.PUBLIC_URL}/imgs/rocket-icon.svg`} alt="rocket logo" className="me-3" />
                    <p className="me-3 mt-1 fs-1 fw-bold mb-0">Apollo</p>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarOptions" aria-controls="navbarOptions" aria-expanded="false" aria-label="toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarOptions">
                    <ul className="navbar-nav ms-auto mb-2 align-self-sm-end">
                        <li className="nav-item">
                            <a href="/" className="link fw-bold d-flex flex-row justify-content-between">
                                Schedule
                                <img src={`${process.env.PUBLIC_URL}/imgs/vector-carrot.svg`} alt="arrow" />
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/" className="link fw-bold d-flex flex-row justify-content-between">
                                About Us
                                <img src={`${process.env.PUBLIC_URL}/imgs/vector-carrot.svg`} alt="arrow" />
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/" className="link fw-bold d-flex flex-row justify-content-between">
                                Contact
                                <img src={`${process.env.PUBLIC_URL}/imgs/vector-carrot.svg`} alt="arrow" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}