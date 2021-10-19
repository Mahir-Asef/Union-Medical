import logo from './logo.svg';
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from '../src/pages/Header/Header';
import HeroSection from '../src/pages/HeroSection/HeroSection'
import Home from '../src/pages/Home/Home';
import Footer from '../src/pages/Footer/Footer';
import About from '../src//pages/About/About';
import AllDoctors from '../src/pages/AllDoctors/AllDoctors';
import AllServices from '../src/pages/AllServices/AllServices';
import Equipments from '../src/pages/Equipments/Equipments';
import Login from '../src/pages/Login/Login';
import Register from '../src/pages/Register/Register';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import BookedAppointment from './pages/BookedAppointment/BookedAppointment';
import BuyingEquipment from './pages/BuyingEquipment/BuyingEquipment';
import NotFound from '../src/pages/NotFound/NotFound';


function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/aboutus">
          <About></About>
        </Route>
        <Route path="/herosection">
          <HeroSection></HeroSection>
        </Route>
        <Route path="/allservices">
          <AllServices></AllServices>
        </Route>
        <Route path="/alldoctors">
        <AllDoctors></AllDoctors>
        </Route>
        <PrivateRoute path="/equipments">
        <Equipments></Equipments>
        </PrivateRoute>
        <PrivateRoute path="/buyingequipment">
        <BuyingEquipment></BuyingEquipment>
        </PrivateRoute>
        <Route path="/login">
        <Login></Login>
        </Route>
        <Route path="/register">
        <Register></Register>
        </Route>
        <PrivateRoute to="/bookedappointment">
          <BookedAppointment></BookedAppointment>
        </PrivateRoute>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
      <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
