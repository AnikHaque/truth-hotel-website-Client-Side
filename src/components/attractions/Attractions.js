import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Slider from "react-slick";
import bannerimage1 from '../../images/rev_slidehome1_1.jpg'
import attractionimage from '../../images/rev_slider_carousel1.jpg'
import './Attractions.css'
 import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
// className="banner1" 
const Attractions = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    }
  return (
    <div>
      <Container fluid>
  <Row>
    <Col>
    <Slider {...settings}>
          <div className='attractionimg'>
              <div className='bg-white attractiondiv'>
              <p className='px-3 pe-5'>Top Reasons To Stay</p>
       <h2 className='px-3 pe-5'>Midtown Attractions</h2>
       <p className='px-3 pe-5'>Our hotel’s central Lower East Side location is within easy walking distance of many of New York City’s most famous attractions, as well as one-of-a-kind shops,top-rated restaurants,and lively bars</p>
              </div>
      
          </div>
          <div className='attractionimg1'>
            
          </div>
          <div className='attractionimg2'>
            
          </div>
        </Slider>
    </Col>
  </Row>
</Container>
    </div>
  );
};

export default Attractions;