import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import IndividualHotel from '../individualhotel/IndividualHotel';

const Hotel = () => {
    const [hotels, setHotels] = useState([])
    useEffect(()=>{
fetch('https://infinite-spire-72927.herokuapp.com/hotels')
.then(res => res.json())
.then(data => setHotels(data))
    },[])


    return (
        <div className='mt-5 mb-5'>
            <h1 className="text-center about-title mb-5 fw-bold">Our Hote Rooms</h1>
            <div className="service-container">
                <div className="container">
            <div class="row row-cols-1 row-cols-md-3 g-4">
                {
                    hotels.slice(0,8).map(hotel => <IndividualHotel
                        key={hotel._id}
                        hotel={hotel}
                    ></IndividualHotel>)
                }
                </div>
                </div>
            </div>
  </div>
    )}     


export default Hotel;