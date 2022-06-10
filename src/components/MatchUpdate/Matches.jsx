import React from 'react'
import {Card, ListGroup, ListGroupItem} from "react-bootstrap";
import jersey from "../../assests/jersey.png"
import jersey2 from "../../assests/jersey2.png"
import "./matches.css"

const Matches = () => {
  return (
    <section id='matches'>
     <div className='match-results'>
       <h2>FIXTURES</h2>
     </div>
     <div className='match-container'>
     <div className="container-left">
       <Card style={{ width: '15rem' , height: "20rem" }}>
  <Card.Body className="card-title">
    <Card.Title>HOME LINE UP</Card.Title>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>John Forson DF</ListGroupItem>
    <ListGroupItem>Dan WF</ListGroupItem>
    <ListGroupItem>Kompany   DF</ListGroupItem>
  </ListGroup>
</Card>
     </div>
     <div className="container-center">
       <h2>SUNDAY   LIVE</h2>
       <h3>Jun 11 2022, Sat</h3>
       <h3> Time: 3:00pm</h3>
       <div className="container-box">
           <div className='img-left'>
           <img src={jersey} alt="academicas"/>
           </div>
          <h3>Academicas SC</h3>
           <br/>
           <h4>Vs</h4>
           <br/>
          <h3>Jesikal FC</h3>
          <div className='img-right'>
          <img src={jersey2} alt="jesikal" />
          </div>
       </div>
     </div>
     <div className="container-right">
     <Card style={{ width: '15rem' , height: "20rem" }}>
  <Card.Body>
    <Card.Title>AWAY LINE UP</Card.Title>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>John Forson DF</ListGroupItem>
    <ListGroupItem>Dan WF</ListGroupItem>
    <ListGroupItem>Kompany   DF</ListGroupItem>
  </ListGroup>
</Card>
     </div>
     </div>
    </section>
  )
}

export default Matches