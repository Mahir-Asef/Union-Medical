import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from '@fortawesome/free-solid-svg-icons';
import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Header.css";
import useAuth from '../../hooks/useAuth';
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";


const Header = () => {
  const {user,logOut}=useAuth();
  return (
    <div>
      <Navbar  collapseOnSelect expand="lg" variant="dark" className="navbar" sticky="top">
        <Container>
          <NavLink className="logo text-center" to="/home">
            <div className="d-flex align-items-center">
              <span className="logo-text ms-2">Union Medical</span>
            </div>
          </NavLink>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <NavbarCollapse className="mx-auto align-items-center">
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
            {user.displayName && <span className="text-white"> <span className="mx-3">Hi</span> {user.displayName }</span>}
          </Nav>
          </NavbarCollapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;