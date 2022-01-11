import React from 'react';
import { Col, Container, Row,Button } from 'react-bootstrap';
import bannerimage1 from '../../images/rev_slidehome1_1.jpg'
import './Join.css'
 import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
// className="banner1" 
const Join = () => {
  return (
    <div>
      <Container fluid>
  <Row>
    <Col>
    <Carousel autoPlay="true">
                <div className="join1">
                    <h1 className='fw-bold join'>Join Us</h1>
                    <Button variant="warning" className='about-button'>Join Us Now</Button>  
                </div>   
            </Carousel>
    </Col>
  </Row>
</Container>
    </div>
  );
};

export default Join;