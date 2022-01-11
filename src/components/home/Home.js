import React from 'react';
import About from '../about/About';
import Banner from '../banner/Banner';
import Events from '../events/Events';
import Gallary from '../gallary/Gallary';
import Attractions from '../attractions/Attractions';
import Delicious from '../delicious/Delicious';
import Join from '../join/Join';
import Hotel from '../hotel/Hotel';
import Footer from '../footer/Footer';
import ManageReview from '../managereview/ManageReview';
const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <br></br> 
           <br></br> 
           <br></br> 
           <About></About>
           <br></br> 
           <br></br> 
           <br></br> 
           <Hotel></Hotel>
           <br></br> 
           <br></br> 
           <br></br> 
           <Gallary></Gallary>
           <br></br> 
           <br></br> 
           <br></br> 
           <Attractions></Attractions>
           <br></br> 
           <br></br> 
           <br></br> 
           <Delicious></Delicious>
           <br></br> 
           <br></br> 
           <br></br> 
           <ManageReview></ManageReview>
           <br></br> 
           <br></br> 
           <br></br> 
           <Join></Join>
           <br></br> 
           <br></br> 
           <br></br>
          
        </div>
    );
};

export default Home;