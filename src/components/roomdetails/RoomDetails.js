 import React, { useEffect, useRef, useState } from 'react';
 import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useForm, useWatch } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
import './RoomDetails.css'

const headingService={
    textAlign:'center',
    fontSize:'40px',
    fontWeight:'bolder'
}
 const RoomDetails = () => {
    const {user} = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data =>{
        console.log(data);
        axios.post("http://localhost:5000/room",data)
        .then(res=>{
            if(res.data.insertedId){
                alert("Added Successfully");
                reset();
                
            }
        })
    } 
      const {id} = useParams();
     const [hotel,setHotel] = useState({})
      useEffect(()=>{
          fetch(`http://localhost:5000/hotels/${id}`)
        .then(res=>res.json())
         .then(data=>setHotel(data))

      },[])
     return (
         <div className='mt-5'>
 <Container>
   <Row>
     <Col sm={12} md={12} lg={6}><img src={hotel.image} className='img-fluid'></img></Col>
     <Col sm={12} md={12} lg={6}>
         
         <h2 className='fw-bold'>** {hotel.name} **</h2>
         <br></br>
         <h2>Room Details:</h2>
        <p>{hotel.description}</p>
         <br></br>
        <h2>Room Price:</h2>
        <button className='btn btn-warning px-5 pe-5'>$ <b>{hotel.price}</b></button>
     </Col>
   </Row>
 </Container>

 <form onSubmit={handleSubmit(onSubmit)} className="bg-dark text-center pt-3 pb-5 mt-5 mb-5">
 <h1 className='text-center mt-5 mb-5 text-white fw-bold'>Please Book a Room</h1>
      <input {...register("email", { required: true, maxLength: 120 })} placeholder="email" className='w-50 p-2' defaultValue={user.email} />
<br></br>
<br></br>
      <input {...register("name", { required: true, maxLength: 120 })} placeholder="name" className='w-50 p-2' defaultValue={user.displayName} />
      <br></br>
<br></br>
      <input {...register("room", { required: true, })} placeholder="Room Name" className='w-50 p-2' />
<br></br>
<br></br>
      <input {...register("image", { required: true, })} placeholder="Room image" className='w-50 p-2'  />
      <br></br>
<br></br>
      <input type="text" {...register("price")}placeholder="Room Price" className='w-50 p-2' />
      <br></br>
<br></br>
      <input {...register("address", { required: true, })} placeholder="address" className='w-50 p-2'/>
      <br></br>
<br></br>
      <input type="submit" className='w-50' />
    </form>     
         </div>
     );

     }
export default RoomDetails;