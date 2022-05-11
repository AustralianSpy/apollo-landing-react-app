import React, { useState } from 'react';

export default function Navbar() {
    const [open, setOpen] = useState(false);

    // Sets state which decides which button to render for the navbar menu.
    // If offcanvas is open, show hamburger, otherwise show x.
    const handleMenu = () => {
        setOpen(!open);
    }
    
    // Hamburger list icon.
    const openMenu = (
        <button
            className="navbar-toggler navbar-toggler-icon custom-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offCanvasMenu"
            aria-controls="offCanvasMenu"
            aria-expanded="false" aria-label="toggle navigation"
            onClick={handleMenu}
        >
        </button>
    );
    
    // X Close icon.
    const closeMenu = (
        <button
            type="button"
            className="btn-close text-reset custom-close"
            data-bs-dismiss="offcanvas"
            data-bs-toggle="offcanvas"
            data-bs-target="#offCanvasMenu"
            aria-controls="offCanvasMenu"
            aria-label="Close"
            onClick={handleMenu}
        >
        </button>
    );
    
    /*
        OFFCANVAS STRUCTURE...
            Schedule       >
            ———————
            About Us       >
            ———————
            Contact        >
            ———————
    */

    return (
        <nav className="navbar p-2 dark-purple text-white navbar-dark navbar-expand-sm">
            <div className="container-fluid">
                <a href="/" className="navbar-brand d-flex flex-row align-content-center justify-content-between justify-content-sm-start">
                    <img src={`${process.env.PUBLIC_URL}/imgs/rocket-icon.svg`} alt="rocket logo" className="me-3" />
                    <p className="me-3 mt-1 fs-1 fw-bold mb-0">Apollo</p>
                </a>
                    { open ? closeMenu : openMenu }
                <div className="offcanvas offcanvas-start offcanvas-body" data-bs-backdrop="false" tabindex="-1" id="offCanvasMenu">
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