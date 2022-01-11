import React from 'react';
import { Card, CardGroup, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './IndividualHotel.css';
const IndividualHotel = (props) => {
    const {_id,name,description,image,price} = props.hotel;
    return (
        <div>
           <div class="col">
    <div class="card h-100 card-bg">
      <img src={image} class="card-img-top img-fluid" alt="..."></img>
      <div class="card-body">
        <h5 class="card-title text-center fw-bold">{name}</h5>
        <b class="card-text text-center">$ {price}</b>
      </div>
      <div class="card-footer">
          
        <Link to={`/roomdetails/${_id}`}>
        <button className="btn button-hotel mx-5 px-5 pe-5">View Details</button>
        </Link>
        
      
    </div>
  </div>
</div>
        </div>
    );
};

export default IndividualHotel;