import React from 'react';
import {Button} from 'react-bootstrap'
import { NavLink}  from "react-router-dom";
import './Equipment.css'
const Equipment = (props) => {
   const {name,price,img}=props.equipment;
    return (
        <div className="mt-5 equipment-class">
        <div>
            <img src={img} className="img-fluid" alt="" srcset="" />
        </div>
        <div>
            <h3>Name:{name}</h3>
            <h4>Price:${price}</h4>
        </div>
        <NavLink to="/buyingequipment"><Button > <span><i class="fas fa-cart-arrow-down"></i></span> Buy Now</Button></NavLink>
    </div>
    );
};

export default Equipment;