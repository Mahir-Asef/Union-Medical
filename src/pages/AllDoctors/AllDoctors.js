import React from 'react';
import {useState,useEffect} from 'react';
import Doctor from '../../pages/Doctor/Doctor'
import './AllDoctors.css'
const AllDoctors = () => {
    const[allDoctors,setAllDoctors]=useState([]);
    useEffect(()=>{
        fetch('./doctors.json')
        .then(res=>res.json())
        .then(data=>setAllDoctors(data))
    },[])
    return (
        <div className="all-doctors">
            {
             allDoctors.map(doctor=><Doctor key={doctor.id} doctor={doctor} ></Doctor>)

            }
        </div>
    );
};

export default AllDoctors;