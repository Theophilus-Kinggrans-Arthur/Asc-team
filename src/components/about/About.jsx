import React from 'react'
import "./about.css"
import manager from "../../assests/manager.png"

const About = () => {
  return (
    <section id="manager">
      <div className='asc'>
      <h2>the manager's profile</h2>
      </div>
     <div className='manager-img'>
      <img src={manager} alt='the coach of the team Samuel Hamulton' />
      <div className='fairtale'>
      <p>I Samuel Hamulton started coaching the club since 2011, and for now i have taken the team forward. We are now into " 3rd Division with the SeniorTeam and also Juvenile with the U13, U15, AND U17. </p>
      <p>Trophies won under my coaching is 5 trophies for now although it wasn't easy but i pass with the team for a successful mission</p>
      <p>I say Thank you to the all the team players who made me today </p>
     </div>
      </div>
      <div className='manager'>
     <h3>Samuel Hamulton</h3>
     </div>
    </section>
  )
}

export default About