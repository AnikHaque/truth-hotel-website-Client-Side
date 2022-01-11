import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Navigation from './components/navigation/Navigation';
import Home from './components/home/Home';
import AddHotel from './components/addhotel/AddHotel';
import Hotel from './components/hotel/Hotel';
import About from './components/about/About';
import PrivateRoute from './components/login/privateRoute/PrivateRoute';
import RoomDetails from './components/roomdetails/RoomDetails';
import Login from './components/login/Login';
import AuthProvider from './context/authprovider/AuthProvider';
import Register from './components/login/register/Register';
import MakeAdmin from './components/makeadmin/MakeAdmin';
import Orders from './components/orders/Orders';
import Gallary from './components/gallary/Gallary';
import Footer from './components/footer/Footer';
import MyOrder from './components/myorders/MyOrder';
import AddReview from './components/addreview/AddReview';

function App() {
  return (
    <div className="App">
       <AuthProvider>
      <BrowserRouter>
      <Navigation></Navigation>
      <Switch>
        <Route exact path="/">
           <Home></Home>
        </Route>
        <Route exact path="/home">
           <Home></Home>
        </Route>
        <Route exact path="/about">
           <About></About>
        </Route>
        <Route exact path="/hotels">
           <Hotel></Hotel>
        </Route>
        <Route exact path="/addhotel">
           <AddHotel></AddHotel>
        </Route>
        <Route exact path="/gallary">
          <Gallary></Gallary>
        </Route>
        <PrivateRoute exact path="/AddReviews">
       <AddReview></AddReview>
        </PrivateRoute>
        
        <PrivateRoute exact path="/orders">
           <Orders></Orders>
        </PrivateRoute>
        <PrivateRoute exact path="/myorders">
           <MyOrder></MyOrder>
        </PrivateRoute>
        <Route exact path="/makeadmin">
          <MakeAdmin></MakeAdmin>
        </Route>
        <PrivateRoute exact path="/roomdetails/:id">
           <RoomDetails></RoomDetails>
        </PrivateRoute>
        <Route exact path="/login">
           <Login></Login>
        </Route>
        <Route exact path="/register">
           <Register></Register>
        </Route>
      </Switch>
      <Footer></Footer>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
