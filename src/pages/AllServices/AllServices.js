import React from 'react';
import Service from '../Service/Service'
import {useState,useEffect} from 'react';
import './AllServices.css'
const AllServices = () => {
    const [allServices,setAllServices]=useState([])
    useEffect(()=>{
        fetch('./services.json')
        .then(res=>res.json())
        .then(data=>setAllServices(data))
    },[])
    return (
         <>
        <h1 className=" gx-5 service-text">Our Services</h1>
        <div>
        <div className="container service-class" id="services">
        
        {
            allServices.map(service=><Service key={service.id} service={service}></Service>)

        }
        </div>
    
        </div>
        </>
    );
};

export default AllServices;