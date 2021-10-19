import React from 'react';
import img from '../../images/notfound/notfound.jpg';
import  './NotFound.css' ;
const NotFound = () => {
    return (
        <div className="container mt-5 h-50 w-50 ">
            <div>
            <h1>Page not found <span><i class="far fa-sad-tear sad-icon"></i></span> </h1>
            </div>
            <div>
                <img className="img-fluid" src={img} alt="" srcset="" />
            </div>
        </div>
    );
};

export default NotFound;