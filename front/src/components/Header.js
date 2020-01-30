// Librairies
import React from 'react'
import { Link } from 'react-router-dom'
// Styles
import './Header.css'

const Header = () => {
    return (
        <div className="Header">
            <Link className="Header-Link">Home</Link>
            <Link className="Header-Link">Show list</Link>
            <Link className="Header-Link">Contact</Link>
        </div>
    )
}

export default Header