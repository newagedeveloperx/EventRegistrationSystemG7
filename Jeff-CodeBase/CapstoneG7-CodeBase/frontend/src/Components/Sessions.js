import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import "./index.css";
import EventListing from '../Pages1/EventListing';

export default function Sessions() {
    return (
        <Router>   
                <div className="Session-title" style={{fontSize:"14px"}}>
                  <h1>Please Choose Your Preferred Event Session</h1>
                </div>

                <div className= "button">
                  <Link to = "/eventlisting">  <button>MORNING</button></Link><br/><br/>
                  <Link to = "/eventlisting">  <button>AFTERNOON</button> </Link><br/><br/> 
                  <Link to = "/eventlisting"> <button>EVENING</button> </Link><br/><br/>
                </div>

            <Switch>
            <Route exact strict path="/eventlisting">
            <EventListing />
          </Route>
            </Switch>    
        </Router>         
    )
}
