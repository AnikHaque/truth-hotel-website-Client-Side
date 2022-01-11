import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Events = () => {
    return (
        <div>
            <Container>
            <h1 className='about-title'>Our Events</h1>
  <Row>
    <Col sm={12} xs={12} md={4} lg={4} className='mb-5'>
        <img src='https://preview.colorlib.com/theme/suites/images/ximg_1.jpg.pagespeed.ic.1H3zXpM6hU.webp' className='img-fluid'></img>
        <h5 className='mx-5'>Lorem Ipsum</h5>
        <small>8th December 2021</small>
        <p>
        A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
       </p>
    </Col>
    <Col sm={12} xs={12} md={4} lg={4} className='mb-5'><img src='https://preview.colorlib.com/theme/suites/images/ximg_2.jpg.pagespeed.ic.jAvfEkr8MX.webp' className='img-fluid'></img>
    
    <h5 className='mx-5'>Lorem Ipsum</h5>
        <small>8th December 2021</small>
        <p>
        A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
       </p>
    </Col>
    
    <Col sm={12} xs={12} md={4} lg={4} className='mb-5'>
        <img src='https://preview.colorlib.com/theme/suites/images/ximg_3.jpg.pagespeed.ic.osxKtu1h5b.webp' className='img-fluid'></img>

        <h5 className='mx-5'>Lorem Ipsum</h5>
        <small>8th December 2021</small>
        <p>
        A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
       </p>
    </Col>
   
    
    
  </Row>
  

  
</Container>
        </div>
    );
};

export default Events;