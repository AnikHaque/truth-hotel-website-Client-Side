import React, { useRef } from 'react';
import useAuth from '../../hooks/useAuth';

const AddHotel = () => {
const {user} = useAuth();
    const nameRef=useRef();
    const descriptionRef=useRef()
    const imageRef=useRef();
    const priceRef=useRef()
   
const handleAddHotel = e => {
    const name = nameRef.current.value;
    const description = descriptionRef.current.value;
    const image = imageRef.current.value;
    const price = priceRef.current.value;
    const newHotel = {name,description,image,price};
    fetch('https://infinite-spire-72927.herokuapp.com/hotels',{
        method:'POST',
        headers:{
            'content-type':"application/json"
        },
        body:JSON.stringify(newHotel)
    })
    .then(res=>res.json())
    .then(data=> {
        if(data.insertedId){
            alert('Added Successfully');
            e.target.reset();
        }
    })
    e.preventDefault();
}


    return (
        <div>
            <h1>Please add an hotel</h1>
            {/* <form onSubmit={handleAddHotel}>
<input type="text" placeholder='Add image' ref={imageRef}></input>
<input type="text" placeholder='Add room name' ref={nameRef}></input>
<input type="text" placeholder='Short description' ref={descriptionRef}></input>
<input type="text" placeholder='Room price' ref={priceRef}></input>

<input type="submit" value="Add"></input>
            </form> */}

<form onSubmit={handleAddHotel}>
<input type="text" placeholder='Add image' ref={imageRef}></input>
<input type="text" placeholder='Add room name' ref={nameRef}></input>
<input type="text" placeholder='Short description' ref={descriptionRef}></input>
<input type="text" placeholder='Room price' ref={priceRef}></input>

<input type="submit" value="Add"></input>
            </form>
        </div>
    );
};

export default AddHotel;