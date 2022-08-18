import React from 'react'
import academicals from "../../assests/academicals.png"
import {BiFootball} from "react-icons/bi"
import "./header.css"

const Header = () => {
  return (
     <section id='header'>
      <div className='container header'>
       <div className='header-left'>
         <h1>
           <span className='welcome'>WELCOME TO ACADEMICAS</span>
           <span className='sporting'>SPORTING CLUB</span>
           <span className='motto'>MOTTO: Os ESTUDANTE</span>
         </h1>
         <div className='header-cta'>
           <button className='btn header-btn'>Know More</button>
         </div>
       </div>
    
        <div className='header-right'>
       <img  src={academicals} alt="academicals"/>
      </div>

      </div>

      <div className='floating-icon'>
        <a href='#features'>
        <BiFootball  color='#fff' size={50} className="football"/>
        </a>
      </div>

     </section>
  )
}

export default Header