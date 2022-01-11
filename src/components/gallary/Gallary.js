import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Gallary = () => {
    return (
        <div>
            <Container>
            <h1 className='about-title text-center mb-5 fw-bold'>Our Gallary</h1>
  <Row>
    <Col sm={12} xs={12} md={3} lg={4} className='mb-5'>
        <img src='https://preview.colorlib.com/theme/suites/images/ximg_1.jpg.pagespeed.ic.1H3zXpM6hU.webp' className='img-fluid'></img>
    </Col>
    <Col sm={12} xs={12} md={3} lg={4} className='mb-5'><img src='https://preview.colorlib.com/theme/suites/images/ximg_2.jpg.pagespeed.ic.jAvfEkr8MX.webp' className='img-fluid'></img></Col>
    
    <Col sm={12} xs={12} md={3} lg={4} className='mb-5'>
        <img src='https://preview.colorlib.com/theme/suites/images/ximg_3.jpg.pagespeed.ic.osxKtu1h5b.webp' className='img-fluid'></img>
    </Col>  
  </Row>
  <Row>
  <Col sm={12} xs={12} md={3} lg={4} className='mb-5'><img src='https://preview.colorlib.com/theme/suites/images/ximg_4.jpg.pagespeed.ic.W0Sf100aYJ.webp' className='img-fluid'></img></Col>
  
    <Col sm={12} xs={12} md={3} lg={4} className='mb-5'>
        <img src='https://preview.colorlib.com/theme/suites/images/ximg_4.jpg.pagespeed.ic.W0Sf100aYJ.webp' className='img-fluid'></img>
    </Col>
    <Col sm={12} xs={12} md={3} lg={4} className='mb-5'><img src='https://preview.colorlib.com/theme/suites/images/ximg_5.jpg.pagespeed.ic.ukxhsi_Cev.webp' className='img-fluid'></img></Col>

    <Col sm={12} xs={12} md={3} lg={4} className='mb-5'>
        <img src='https://preview.colorlib.com/theme/suites/images/ximg_6.jpg.pagespeed.ic.CxW8F7eoKg.webp' className='img-fluid'></img>
    </Col>
    <Col sm={12} xs={12} md={3} lg={4}><img src='https://preview.colorlib.com/theme/suites/images/ximg_7.jpg.pagespeed.ic.diCdyxy0He.webp' className='img-fluid'></img></Col>
    
    
  </Row>

  
</Container>
        </div>
    );
};

export default Gallary;