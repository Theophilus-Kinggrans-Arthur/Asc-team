import React from 'react'
import Carousel from 'react-material-ui-carousel/dist/components/Carousel'
import trophy from "../../assests/trophy.png"
import "./trophies.css"

const TeamTrophies = () => {
  return (
    <section id='teamtrophies'>
      <div className='trophies'>
        <h1>Our Trophies</h1>
      </div>

      <Carousel className="main-container" animation='slide'>
        <div className='trophy-community'>
            <h2>This trophy was won in the year 2012</h2>
            <p>League: Community Championship</p>
            <h3>U 13</h3>
            <img  src={trophy} height="300px" width="300px" alt="trophy"/>
        </div>
        <div className='trophy-community'>
            <h2>This trophy was won in the year 2016</h2>
            <p>League: Inter Community Cup</p>
            <h3>Senior Team</h3>
            <img  src={trophy} height="300px" width="300px" alt="trophy"/>
        </div>
        <div className='trophy-community'>
            <h2>This trophy was won in the year 2016</h2>
            <p>League: Golden Consult Unity</p>
            <h3>U 15</h3>
            <img  src={trophy} height="300px" width="300px" alt="trophy"/>
        </div>
        <div className='trophy-community'>
            <h2>This trophy was won in the year 2021</h2>
            <p>League: Feature Hope Championship</p>
            <h3>U 15</h3>
            <img  src={trophy} height="300px" width="300px" alt="trophy"/>
        </div>
        <div className='trophy-community'>
            <h2>This trophy was won in the year 2021</h2>
            <p>League: Juvenile</p>
            <h3>U 15</h3>
            <img  src={trophy} height="300px" width="300px" alt="trophy"/>
        </div>
      </Carousel>
    </section>
  )
}

export default TeamTrophies