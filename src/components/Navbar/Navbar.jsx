import React from 'react'
import "./navbar.css"

const Navbar = () => {
  return (
    <div className='nav nav_container'>
        <div className='nav_logo'>
            ACADEMICAS
        </div>
        <div className='nav_li'>
            <a href='#'>Features</a>
            <a href='#'>Fixtures</a>
            <a href='#'>About</a>
            <a href='#'>Contact Us</a>
        </div>
    </div>
  )
}

export default Navbar