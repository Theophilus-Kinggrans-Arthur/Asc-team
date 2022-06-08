import React from 'react'
import Carousel from 'react-material-ui-carousel'
import "./features.css"

import f1 from "../../assests/f1.png"
import f2 from "../../assests/f2.png"
import f0 from "../../assests/f0.png"
import f4 from "../../assests/f4.png"


const Features = () => {
  return (
    <section id='features'>
     <div className='feature-container'>
         <h2>Our Team</h2>
         <p>Football Is Our Talent and We can Do it </p>
     </div>
      <Carousel className="main-container" animation='slide'>
            <img  src={f1} height="500px" width="800px" alt="badges"/>
            <img  src={f2} height="500px" width="800px" alt="badges"/>
            <img  src={f0} height="500px" width="800px" alt="badges"/>
            <img  src={f4} height="500px" width="900px" alt="badges"/>
      </Carousel>
    </section>
  )
}

export default Features