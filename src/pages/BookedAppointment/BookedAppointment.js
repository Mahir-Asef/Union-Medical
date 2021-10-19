import React from 'react';
import './BookedAppointment.css'
const BookedAppointment = () => {
    return (
        <div className="container booked">
            <div>
                <img src="https://img1.wsimg.com/isteam/ip/6a39786f-b040-464b-a73e-9377badc4f6f/2020-03-04%20(4).png/:/cr=t:3.96%25,l:0%25,w:100%25,h:91.18%25/rs=w:600,h:300,cg:true" alt="" />
            </div>
            <div>
             <h3> <span><i class="far fa-check-circle booked-icon"></i></span> successfully your appointment request is booked.</h3>
            </div>
        </div>
    );
};

export default BookedAppointment;