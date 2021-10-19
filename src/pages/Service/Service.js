import React from 'react';
import './Service.css';
import {Button} from 'react-bootstrap'
import { NavLink}  from "react-router-dom";
const Service = (props) => {
    const {id,icon,ServiceName,description}=props.service;
    return (
        <div>
            <div className="service-class">
            <div className="d-flex service-card">
                <div className="icon"><i class={icon}></i></div>
                <div className="text-class">
                    <h3>{ServiceName}</h3>
                    <p>{description.slice(0,150)}...</p>
                    <NavLink to={`/servicedetails/${id}`}><Button >See Details</Button></NavLink>
                </div>
            </div>
            </div>
            
        </div>
    );
};

export default Service;