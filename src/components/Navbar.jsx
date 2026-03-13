import React from 'react'
import { NavLink, Link } from "react-router-dom"

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">

                <Link className="navbar-brand" to="/">
                    Mein Blog
                </Link>

                <div className="navbar-nav flex-row">
                  <NavLink
                      to="/"
                      className={({ isActive }) =>
                        "nav-link text-white " + (isActive ? "fw-bold" : "")
                      }
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
        </nav>
    )
}