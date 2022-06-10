import React from 'react'
import {Card, ListGroup, ListGroupItem} from "react-bootstrap";
import { Box } from '@material-ui/core';
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
  <Card.Body>
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
       <h2>THE MATCH OF THE WEEK</h2>
       <h3>Jun 11 2022, Sat</h3>
       <h3> Time: 3:00pm</h3>
       <div>
         <Box>
           <li>ACADEMICAS</li>
         </Box>
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