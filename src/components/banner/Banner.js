import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import bannerimage1 from '../../images/rev_slidehome1_1.jpg'
import bannerimage2 from '../../images/rev_slidehome2_1.jpg'
import bannerimage3 from '../../images/rev_slidehome2_3.jpg'
import './Banner.css'
 import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
// className="banner1" 
const Banner = () => {
  return (
    <div>
      <Container fluid>
  <Row>
    <Col>
    <Carousel autoPlay="true">
    
                <div>
                    <img src={bannerimage1} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={bannerimage2} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={bannerimage3} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>

                
            
    </Col>
  </Row>
</Container>
    </div>
  );
};

export default Banner;