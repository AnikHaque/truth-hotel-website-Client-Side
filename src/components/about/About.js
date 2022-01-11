import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import aboutimage from '../../images/rev_slidehome2_2.jpg';
import Footer from '../footer/Footer';
import './About.css';
const About = () => {
    return (
        <div className='mt-5'>
            <Container className='mb-5'>
  <Row>
    <Col xs={12} sm={12} md={5} lg={5}>
    <h6 className='fw-bold mx-5'>Welcome</h6>
    <h4 className='fw-bold about-title'>Upgrade Your <br></br> Experience</h4>
    <br></br>
    <p className='text-secondary'>Enjoy sweeping water views when you reserve a Hudson River View Suite. Spread out in an Executive or Luxury Suite with over 700 square feet of lavish living areas with integrated technology. Live the New York lifestyle in the Conrad Suite, featuring an office and separate living and dining areas.</p>
    <br></br>
    <Button variant="warning" className='about-button'>Read More</Button>

    </Col>
    <Col xs={12} sm={12} md={7} lg={7}>
    <Container>
  <Row>
    <Col xs={12} sm={12} md={12} lg={12}>
        <img src='http://demo2.themelexus.com/erios/wp-content/uploads/elementor/thumbs/home1_erios01-oi3iurl7hi42p6iwwud5qx914wvlujy9epdncooseo.jpg' className='img-fluid aboutimage1'></img>
    </Col>
  </Row>
</Container>
    </Col>
  </Row>
</Container>
        </div>
    );
};

export default About;