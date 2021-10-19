import React from 'react';
import img from '../../images/hero/hero.jpg'
import './HeroSection.css'
import {Button} from 'react-bootstrap'
import { NavLink}  from "react-router-dom";
const HeroSection = () => {
    return (
       <div className="hero-head">
            <div className="hero ">
                <div className="hero-img">
                    <img src={img} className="img"  alt="" srcset="" />
                </div>
                 <div className="hero-text">
                    <h1>Welcome to our Union Medical </h1>
                    <h4>“Dr. Sather been a hero to many, helping patients manage complex medical conditions, while  doing the extra things that exemplify his compassion”</h4>
                 </div>
                 <NavLink to="/login"><Button >Please Login</Button></NavLink>
            </div>

        </div>
    );
};

export default HeroSection;