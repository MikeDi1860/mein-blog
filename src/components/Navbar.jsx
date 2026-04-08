import React from 'react'
import { NavLink, Link } from "react-router-dom"

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                {/* Dein Logo wie im Original */}
                <Link className="navbar-brand" to="/">
                    U X B
                </Link>

                {/* Der Hamburger-Button (wird nur auf dem Handy sichtbar) */}
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNav" 
                    aria-controls="navbarNav" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Das einklappbare Menü */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    {/* ms-auto schiebt die Links nach rechts, damit sie nicht am Logo kleben */}
                    <div className="navbar-nav ms-auto">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                "nav-link text-white " + (isActive ? "fw-bold" : "")
                            }
                            end
                        >
                            Home
                        </NavLink>

                        <NavLink
                            to="/blog"
                            className={({ isActive }) =>
                                "nav-link text-white " + (isActive ? "fw-bold" : "")
                            }
                        >
                            Blog
                        </NavLink>

                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                "nav-link text-white " + (isActive ? "fw-bold" : "")
                            }
                        >
                            Über mich
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}