import { Container, Grid, Typography,Button, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Link,useLocation,useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css';

const loginImage = {
    width:'580px'
}
const Login = () => {
    const [loginData,setLoginData] = useState({})
    const {user,loginUser,isLoading,authError,signInWithGoogle}=useAuth()
    const location = useLocation();
    const history = useHistory();

 const handleOnChange = e => {
      const field = e.target.name;
     const value = e.target.value;
      const newLoginData = {...loginData};
     newLoginData[field] = value;
      setLoginData(newLoginData);
}

    const handleLoginSubmit = e => {
        loginUser(loginData.email,loginData.password,location,history);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(useLocation,useHistory);
     }
    return (
        <Container>
 <Grid container spacing={2}>
        <Grid item sx={{mt:8}} xs={12} md={6}>
          <Typography variant="body1" gutterBottom>
<h1 className="text-center fw-bold">Please Login</h1>
          </Typography>

<form onSubmit={handleLoginSubmit} className="login text-white p-5 login">
<TextField 
sx={{width:'75%', m:1}}
name="email"
id="standard-basic" 
label="Your Email"
onChange={handleOnChange}
 variant="standard"

  />
<TextField
sx={{width:'75%', m:1}}
name="password"
          id="standard-basic"
          label="Your Password"
          onChange={handleOnChange}
          type="password"
          variant="standard"
/>
<Button sx={{width:'75%', m:1}} variant="contained" type="submit" className='bg-warning text-dark'>Login</Button>
<Link style={{textDecoration:'none', }} to="/register">
<Button variant="text" className="text-dark">First Time Here??? Please Register</Button>

</Link>

</form>
<p>.................................</p>
    
 <Button onClick={handleGoogleSignIn} className="bg-warning text-dark px-2 pe-4  pt-3 pb-2 mb-5"><i class="fab fa-google px-3 fs-3"></i>Sign In With Google</Button>
 {
    isLoading && <CircularProgress color="inherit" />

}
{
    user?.email && <Alert severity="success">Successfully Logged In</Alert>

}
{
    authError && <Alert severity="error">Login Failed!!!</Alert>


}  

        </Grid>
        <Grid item xs={12} md={6}>
       
        </Grid>
        
        
      </Grid>
        </Container>
    );
};

export default Login;