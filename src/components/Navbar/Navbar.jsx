import React from 'react'
import "./navbar.css"

const Navbar = () => {
  return (
    <div className='nav nav_container'>
        <div className='nav_logo'>
            ACADEMICAS
        </div>
        <div className='nav_li'>
            <a href='#'>features</a>
            <a href='#'>matches</a>
            <a href='#'>about</a>
            <a href='#'>contact us</a>
        </div>
    </div>
  )
}

export default Navbar