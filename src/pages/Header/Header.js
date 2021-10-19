import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Header.css";
import useAuth from '../../hooks/useAuth';
// import useFirebase from '../../hooks/useFirebase';

const Header = () => {
  const {user,logOut}=useAuth();
  // const {user,logOut}=useFirebase();
  return (
    <div>
      <Navbar  collapseOnSelect expand="lg" className="navbar" fixed="top">
        <Container>
          <NavLink className="logo text-center" to="/home">
            <div className="d-flex align-items-center">
              <span className="logo-text ms-2">Union Medical</span>
            </div>
          </NavLink>
          <Nav className="ms-auto align-items-center">
            <NavLink className="nav-item ms-5" to="/">
              Home
            </NavLink>
            <NavLink className="nav-item ms-5" to="/aboutus">
            AboutUs
            </NavLink>
            <NavLink className="nav-item ms-5" to="/allservices">
              Services
            </NavLink>
            <NavLink className="nav-item ms-5" to="/alldoctors">
             Doctors
            </NavLink>
            <NavLink className="nav-item ms-5" to="/equipments">
              Medical Equipment
            </NavLink>
            <NavLink className="nav-item ms-5" style={{width:"80px"}} to="/my-plans">
              My Plans
            </NavLink>
            { 
              user.displayName ?
              <NavLink to="/login" className="ms-5" >
              <Button className="login" onClick={logOut} >Logout<FontAwesomeIcon className="ms-2" icon={faUser} /></Button>
             </NavLink>
            :
            <NavLink className="ms-5" to="/login">
            <Button className="login">Login<FontAwesomeIcon className="ms-2" icon={faUser} /></Button>
             </NavLink>
            }
            {user.displayName && <span className="text-white"> Hi {user.displayName }</span>}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;