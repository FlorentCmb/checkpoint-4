// Librairies
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'
// Styles
import './Header.css'

const Header = () => {

    const [shows, setShows] = useState()

    // Call the backend
    useEffect(() => {
        Axios.get('http://localhost:5005/shows')
            .then(res => {
                console.log(res.data)
                setShows(res.data)
            })
    }, [])

    // Sticky header
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.Header')
        const topLimit = header.offsetTop
        if (window.pageYOffset > topLimit) {
            header.classList.add('Sticky')
        }
        if (window.pageYOffset <= 320) {
            header.classList.remove('Sticky')
        }
    })

    return (
        <div className="Header">
            <Link className="Header-Link">Home</Link>
            <Link className="Header-Link">Show list</Link>
            <Link className="Header-Link">Contact</Link>
        </div>
    )
}

export default Header