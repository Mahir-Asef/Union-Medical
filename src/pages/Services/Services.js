import React from 'react';
import './Services.css';
import {useState,useEffect} from 'react';
import Service from '../Service/Service';
import {Button} from 'react-bootstrap'
import { NavLink}  from "react-router-dom";

const Services = () => {
    const [services,setServices]=useState([])
    useEffect(()=>{
        fetch('./services.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <>
        <h1 className="service-text">Our Services</h1>
        <div>
        <div className="container service-class">
        
        {
            services.slice(0,6).map(service=><Service key={service.id} service={service}></Service>)

        }
        </div>
        <NavLink to="/allservices"><Button className="mb-5" >See more Services</Button></NavLink>
        </div>
        </>
    );
};

export default Services;