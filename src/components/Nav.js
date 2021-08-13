import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {
    return (
        <div>
            <NavLink to='/About'> About</NavLink>
            <NavLink to='/Contact'> Contact</NavLink>
            <NavLink to='/'>Portfolio</NavLink>
            <NavLink to='/Resume'> Resume</NavLink>
        </div>
    )
}

export default Nav