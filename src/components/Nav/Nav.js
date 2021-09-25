import React from 'react'
import { Link } from 'react-router-dom'
import "./Nav.css"

const Nav = () => {
    return (
        <nav className="nav"> 
            <Link to="/">User List</Link>
        </nav>
    )
}

export default Nav
