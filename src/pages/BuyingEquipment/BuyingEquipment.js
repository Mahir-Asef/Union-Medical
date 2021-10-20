import React from 'react';
import './BuyingEquipment.css';
import {Button} from 'react-bootstrap'
import { NavLink}  from "react-router-dom";
const BuyingEquipment = () => {
    return (
        <div className="container buy-container ">
            <div cla>
                <h2>Thank you for being with Union Medical <span><i class="far fa-smile smile-icon"></i></span></h2>
            </div>
            <div>
                <img className="buy-img" src="https://image.shutterstock.com/shutterstock/photos/221638402/display_1500/stock-vector-sold-out-vector-stamp-221638402.jpg" alt="" srcset="" />
            </div>
            <NavLink to="/equipments" className="buy-button"><Button className="buy-btn text-white btn-warning ms-3" >See Equipment</Button></NavLink> 
            
            <NavLink to="/home"><Button className="buy-btn btn-danger" >Back Home</Button></NavLink>
        </div>
    );
};

export default BuyingEquipment;