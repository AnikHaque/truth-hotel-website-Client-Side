import { Box } from '@mui/material';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Navigation.css';

const Navigation = () => {
  const {user, logOut, admin} = useAuth();
    return (
        <div>
           <Navbar collapseOnSelect expand="lg" bg="" variant="dark" className='navbarmenu'>
  <Container>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link as={Link} to="/home" className='text-dark fs-5 me-3'>Home</Nav.Link>
      <Nav.Link as={Link} to="/about" className='text-dark fs-5 me-3'>About</Nav.Link>
      <Nav.Link as={Link} to="/hotels" className='text-dark fs-5 me-3'>Rooms</Nav.Link>
      <Nav.Link as={Link} to="/blog" className='text-dark fs-5 me-5'>Blog</Nav.Link>
      
      

      <Navbar.Brand href="#home" className='text-dark fw-bold fs-3'>Truth-Hotel</Navbar.Brand>
    </Nav>
    <Nav>
     {
       !admin && !user.email && <Box>
<Nav.Link as={Link} to="/gallary" className='text-dark fs-5 me-3'>Gallary</Nav.Link>
       </Box>
       
      
     }
     
  
         {
            admin &&
            <Nav.Link as={Link} to="/makeadmin" className='text-dark fs-5'>Make Admin</Nav.Link> 
          } 

         {
            admin && 
            <Nav.Link as={Link} to="/addhotel" className='text-dark fs-5 '>Add Hotel</Nav.Link>  
          } 
         
          {
            !admin ? user.email && <Box>
               <Nav.Link as={Link} to="/AddReviews" className='text-dark  fs-5'>Add Review</Nav.Link>  
               
               
              </Box>
              :
              <Box>
<Nav.Link as={Link} to="/orders" className='text-dark fs-5 '>Orders</Nav.Link> 
              </Box>    
          }

          {
            !admin && user.email && <Box>
               <Nav.Link as={Link} to="/myorders" className='text-dark fs-5'>My Order</Nav.Link>  
               
               
              </Box>
             
          }
          {
            user.email && <Box>
              <Nav.Link as={Link} to="/" className='text-dark'><b className='fs-5'>{user.displayName}</b></Nav.Link> 
              
            </Box>   
          }
          
          {
            user?.email ?
            <Nav.Link as={Link} to="/">
      <Button onClick={logOut} variant="warning" className='text-dark'>LogOut</Button>
      </Nav.Link>
        
            :
            <Nav.Link as={Link} to="/login">
      <Button  variant="warning" className='text-dark'>Login</Button>
      </Nav.Link>
          } 
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Navigation;