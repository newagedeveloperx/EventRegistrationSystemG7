// importing react & various components
import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";


import Welcome from "./Components/Welcome";
import SignUpForm from'./Components/SignUpForm';
import "./Components/index.css"

function SignUp() {
  return (
    
    <Router>
      <div className="App">
      {/* calling welcome.js and SignUpForm.js */}
        <Welcome/>      
        <SignUpForm/>

        </div>
    </Router>

  );
}

export default SignUp;
