import React from 'react';
import {useState,useEffect} from 'react';
import Doctor from '../Doctor/Doctor'
import './Doctors.css'
import {Button} from 'react-bootstrap'
import { NavLink}  from "react-router-dom";
const Doctors = () => {
    const [doctors,setDoctors]=useState([])
    useEffect(()=>{
        fetch('./doctors.json')
        .then(res=>res.json())
        .then(data=>setDoctors(data))
    },[])
    return (
        <div>
            <div className="container mx-auto">
            <h1 className="text-center m-5">Our Expert Doctors </h1>
            <div className="doctors">
            {
                doctors.slice(0,6).map(doctor=><Doctor key={doctor.id} doctor={doctor} ></Doctor>)
            }
        </div>
        </div>
        <NavLink to="alldoctors"><Button className="doctor-btn" >See more Doctors</Button></NavLink>
        </div>
    );
};

export default Doctors;