import React from 'react';
import './Doctor.css'
import {Button} from 'react-bootstrap'
import { NavLink}  from "react-router-dom";

const Doctor = (props) => {
    const {name,specialty,ChamberTime,FloorNumber,RoomNumber,img}=props.doctor;
    return (
        <div className="doctor-card mt-5">
            <div>
                <img src={img} className="img-fluid" alt="" srcset="" />
            </div>
            <div>
                <h4>Name: {name}</h4>
                <h5>Specialty:{specialty}</h5>
                <div className="mt-5">
                <p>Chamber-Time:{ChamberTime}</p>
                <p>Floor-Number:{FloorNumber}</p>
                <p>Room-Number:{RoomNumber}</p>
                </div>
            </div>
            <NavLink to="/bookedappointment"><Button > Book Your Appointment</Button></NavLink>
        </div> 
    );
};

export default Doctor;