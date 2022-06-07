import React from 'react'
import academicals from "../../assests/academicals.png"
import "./header.css"

const Header = () => {
  return (
     <section id='header'>
      <div className='container header'>
       <div className='header-left'>
         <h1>
           <span>WELCOME TO ACADEMICAS</span>
           <span>SPORTING CLUB</span>
           <span>MOTTO: Os ESTUDANTE</span>
         </h1>
         <div className='header-cta'>
           <button className='btn header-btn'>Know More</button>
         </div>
       </div>
      <div className='header-right'>
       <img src={academicals} alt="academicals"/>
      </div>
      </div>
     </section>
  )
}

export default Header