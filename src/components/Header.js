import React from 'react'
import Nav from './Nav'
import './Header.css'

function Header() {
    return (
        <div style={{ 
            backgroundImage: `url("/img/banner.png")`, height: 58, marginBottom: '-21px'
          }}>
            <div className='headline '><h1 className='headerName'>Cody Vue</h1></div> <Nav/>
        </div>
    )
}

export default Header