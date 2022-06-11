import React from 'react'
import Carousel from 'react-material-ui-carousel'
import "./Results.css"

const Results = () => {
  return (
    <section id='results'>
        <div className='results-match'>
      <h1>Our Match Results</h1>
        </div>

        <div className="results__content">
          <Carousel  className='card-container' animation='slider'>
          <div className="result__cards">
            <article className="result__card">
              <h5>Sunday 11 June 2022</h5>
              <small>1:00pm,Besease Primary Park</small>
              <h4>Academica SC    vs   Jesikal</h4>
              <h5> FT  1 :  1</h5>
            </article>
            <article className="result__card">
              <h5>Sunday 11 June 2022</h5>
              <small>2:00pm,Primary Park</small>
              <h4>Bafana FC  vs   Academicas SC</h4>
              <h5> FT  1 :  1</h5>
            </article>
            <article className="result__card">
              <h5>Monday 12 June 2022</h5>
              <small>1:00pm, Primary Park</small>
              <h4>Academica SC    vs   Latitude</h4>
              <h5> FT  1 :  1</h5>
            </article>
            <article className="result__card">
              <h5>Tuesday 13 June 2022</h5>
              <small>1:00pm,Besease Primary Park</small>
              <h4>Young Fighters    vs   Academicas SC</h4>
              <h5> FT  1 :  1</h5>
            </article>
            <article className="result__card">
              <h5>Wednesday 14 June 2022</h5>
              <small>1:00pm,Besease Primary Park</small>
              <h4>Academica SC    vs   No Weapons</h4>
              <h5> FT  1 :  1</h5>
            </article>
            <article className="result__card">
              <h5>Sunday 11 June 2022</h5>
              <small>1:00pm,Besease Primary Park</small>
              <h4>Academica SC    vs   Terpor</h4>
              <h5> FT  1 :  1</h5>
            </article>
            <article className="result__card">
              <h5>Sunday 11 June 2022</h5>
              <small>1:00pm,Besease Primary Park</small>
              <h4>Academica SC    vs   Jesikal</h4>
              <h5> FT  1 :  1</h5>
            </article>
          </div>
          </Carousel>
        </div>
        <div className='results-match'>
        <h1>LEAGUE : JUVENILE</h1>
        </div>
    </section>
  )
}

export default Results