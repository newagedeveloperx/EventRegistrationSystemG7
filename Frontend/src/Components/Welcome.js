// importing react & logo(image)
import React from 'react';
import {BrowserRouter as Router, Link} from "react-router-dom";
import Route from "react-router-dom/Route";


import logo from "./logo.png";
import LogIn from './LogIn';

const Welcome = () => {
    return (
        <Router>
           
            <div className = "Welcome">
            
                <img src={logo} className="logo" alt="logo" /><br/>
                {/* <h1>Welcome to Events and more</h1>
                Register for the Event of your choice with just a few clicks.<br/>
                <h2>ENJOY!!! </h2>  */}
                <p className = "para">Already have an account?  
                    <Link to = "/LogIn" exact strict className = "log"><b> Login</b></Link>
                    <Route path ="/login" exact strict render  componenent = {LogIn}/>
                        
                                {/* <LogIn/> */}
        
                </p>
            </div>

        </Router>
    )
};

export default Welcome;
