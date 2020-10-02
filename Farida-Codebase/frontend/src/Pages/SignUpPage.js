import React from 'react';
import SideLogo from '../Component/SideLogo';
import SignUpForm from '../Component/SignUpForm';

import {Link} from "react-router-dom";

export default function SignUpPage() {
    return (
        <div className = "signUpPage">
            <div className = "logo_n_para">
               <SideLogo/> 
               <p>Already have an account? <Link to = "/login" className = "link"><b>Login</b></Link></p>
            </div>
            <SignUpForm/>
        </div>
    )
}
