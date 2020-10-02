import React from 'react';
import "./landing.css";
import navLogo from "./navLogo.png"

export default function NavBar() {
    return (
        <div className = "navBar" style = {{color : "white"}}>
            <header>
                <div>
                    <img src = {navLogo} alt = "Logo" className = "navLogo"/>
                </div>
                <div className = "menuDiv">
                <ul className = "menulist" style = {{color: "white"}}>
                    <li className = "menulistItem" style = {{color: "white"}}> <a href ="/home" style = {{color: "white"}}>Home</a></li>
                    <li className = "menulistItem"><a href  ="/myevents" style = {{color: "white"}}>My Events</a></li>
                    <li className = "menulistItem"><a href  ="/ourteam" style = {{color: "white"}}>Our Team</a></li>
                    <li className = "menulistItem"><a href ="/"style = {{color: "white"}}>Sign Out</a></li>
                </ul>
                </div>
            </header>
        </div>
    )
}
