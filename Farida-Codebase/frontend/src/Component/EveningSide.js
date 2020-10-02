import React from 'react';
import './landing.css';
import {Link}  from "react-router-dom";

export default function EveningSide() {
    return (
        <div className ="evening">
            <Link to =  "/evening"><h1> Evening Events</h1></Link>
    

            <figure className = "one">
                <img src = "https://images.pexels.com/photos/2422293/pexels-photo-2422293.jpeg?cs=srgb&dl=pexels-jopwell-2422293.jpg&fm=jpg" alt = "Event" />
                <figcaption> 
                        <a href = "/"><b>Sun, Sep 27, 2020 6:00 PM</b><br/><i>Azubi Africa</i></a>
                </figcaption>
            </figure>

            <figure className = "two">
                <img src ="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt = "Event" />
                <figcaption> 
                        <a href = "/"><b>Tue, Sep 29, 2020 7:00 PM</b><br/><i>Literacy for All</i></a>
                </figcaption>
            </figure>

            <figure className = "three">
                <img src ="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt = "Event" />
                <figcaption> 
                        <a href = "/"><b>Sat, Oct 3, 2020 6:00 PM</b><br/><i>Duocon 2020</i></a>
                </figcaption>
            </figure>

           

            <Link to =  "/evening"><b>See more events....</b></Link>
            
        </div>
    )
}
