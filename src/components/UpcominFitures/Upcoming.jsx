import Carousel  from 'react-material-ui-carousel'
import React from 'react'
import "./upcoming.css"

const Upcoming = () => {
  return (
    <section id='upcoming'>
      <h2>Upcoming Matches</h2>
      <h3>All Matches</h3>

        <div className="about__content">
          <Carousel  className='card-container' animation='slider'>
          <div className="about__cards">
            <article className="about__card">
              <h5>Saturday 2 July 2022</h5>
              <small>2:00pm,Primary Park</small>
              <h4>Bafana FC  vs   Academicas SC</h4>
            </article>
            <article className="about__card">
              <h5>Sunday 10 July 2022</h5>
              <small>1:00pm</small>
              <small>U13 , U15 , U17</small>
              <h4>Academica SC    vs   Latitude</h4>
            </article>
            <article className="about__card">
              <h5>Saturday 16 July 2022</h5>
              <small>1:00pm</small>
              <h4>Young Fighters    vs   Academicas SC</h4>
            </article>
            <article className="about__card">
              <h5>Sunday 24 July 2022</h5>
              <small>1:00pm</small>
              <h4>Academica SC    vs   No Weapons</h4>
            </article>
            <article className="about__card">
              <h5>Sunday 30 July 2022</h5>
              <small>1:00pm</small>
              <h4>Academica SC    vs   Terpor</h4>
            </article>
            <article className="about__card">
              <h5>Sunday 26 June 2022</h5>
              <small>1:00pm</small>
              <h4>Academica SC    vs   Jesikal</h4>
            </article>
          </div>
          </Carousel>
        </div>
        <div className='upcoming-round'>
        <h1>LEAGUE : JUVENILE                 (ROUND ONE)</h1>
        </div>
    </section>
  )
}

export default Upcoming