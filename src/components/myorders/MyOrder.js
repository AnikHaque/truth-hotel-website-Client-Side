import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const MyOrder = () => {
    const [rooms, setRooms] = useState([])
    const {user} = useAuth();
    useEffect(() => {
        fetch(`http://localhost:5000/room?email=${user.email}`)
            .then(res => res.json())
            .then(data => setRooms(data));
    }, [])
    return (
        <div>
            <h1 className="fw-bold mt-2 text-center mb-5">MyOrder Placed : {rooms.length}</h1>
              <div className="service-container  pt-4 pb-4">
                <div className="container">
            <div class="row row-cols-1 row-cols-md-3 g-4">
            {rooms.map((pd, index) => (

<div class="col">
    <div class="card h-100">
      <img src={pd.img} class="card-img-top" alt="..."></img>
      <div class="card-body">
          <img src={pd.image} className='img-fluid'></img>
        <h6 class="card-title text-center"><b>Ordered Room:</b>{pd.name}</h6>
        <h4 className="text-center"><b>Room Price:</b> {pd.price} Taka</h4>
      </div>
      <form onSubmit="handleUpdateUser">
       
    </form>
       
</div>
</div>
  ))}
                </div>
                </div>
             </div>
</div>
    );
};

export default MyOrder;