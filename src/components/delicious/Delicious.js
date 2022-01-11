import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import aboutimage from '../../images/rev_slidehome2_2.jpg'
import './Delicious.css'
const Delicious = () => {
    return (
        <div>
            <Container>
  <Row>
  <Col xs={12} sm={12} md={6} lg={6}>
    <Container>
  <Row>
    <Col xs={12} sm={12} md={12} lg={12}>
        <img src='http://demo2.themelexus.com/erios/wp-content/uploads/2019/07/home1_erios02.jpg' className='img-fluid '></img>
    </Col>
  </Row>
</Container>
    </Col>

    <Col xs={12} sm={12} md={6} lg={6}>
    <h6 className='fw-bold mx-5'>RESTAURANTS </h6>
    <h1 className='fw-bold about-title'>Deliciously From <br></br> Our Chefs
</h1>
    <br></br>
    <p className='text-secondary fs-5'>The restaurant and lounge offerings at Erios Hotel are guaranteed to please even the most discerning palates. Whether you’re looking to satisfy a late-night craving at Tick Tock Diner</p>
    <br></br>
    <Button variant="warning" className='about-button'>Read More</Button>

    </Col>
   
  </Row>
</Container>
        </div>
    );
};

export default Delicious;