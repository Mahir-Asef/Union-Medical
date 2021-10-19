import React from 'react';
import {useState,useEffect} from 'react';
import Equipment from '../Equipment/Equipment';
import './Equipments.css'
const Equipments = () => {
    const [equipments,setEquipments]=useState([])
    useEffect(()=>{
        fetch('./equipment.json')
        .then(res=>res.json())
        .then(data=>setEquipments(data))
    },[])
    return (
     <div className="container">
         <h1 className="text-center text">Our Equipments</h1>
         <div className="equipments-class">
         {
             equipments.map(equipment=><Equipment key={equipment.id} equipment={equipment} ></Equipment>)
         }
     </div>
     </div>
    );
};

export default Equipments;