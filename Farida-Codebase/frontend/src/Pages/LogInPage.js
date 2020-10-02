import React from 'react'
import SideLogo from '../Component/SideLogo';
import LogInForm from '../Component/LogInForm';

import {Link} from "react-router-dom";

export default function LogInPage() {
    return (
        <div className = "logInPage">
            <div className = "logo_n_para">
               <SideLogo/> 
               <p>Don't have an account? <Link to = "/" className = "link"><b>Sign Up</b></Link></p>
            </div>
            <LogInForm/>
            
        </div>
    )
}
