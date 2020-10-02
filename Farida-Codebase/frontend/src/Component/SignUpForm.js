import React from 'react';
import {Link} from "react-router-dom";

export default function SignUpForm() {
    return (
        <div className ="signUpForm">

            <form>

                <h1 className = "upHeader">Sign Up Here</h1>
                <input type = "text" required = "true" placeholder = "First Name *" id = "firstName" className = "firstName" height = "25px" width = "100px"  ></input>
                
                <input type = "text" required = "true" placeholder = "Last Name *" id = "lastName" className = "lastName" />
                <br/>
                
                <input type = "text" required = "true" placeholder = "Username *" id = "name" className = "name" />
                <input type = "integer" required = "true" placeholder = "Phone Number *" id = "phone" className = "phone" /><br/>
                
                <input type = "email" required = "true" placeholder = "Email *" id = "email" className = "email" />
                <input type = "email" required = "true" placeholder = "Confirm Email *" id = "confirmEmail" className = "confirmEmail" /><br/>
            
                <input type = "password" required = "true" placeholder = "Password *" id = "password" className = "password" />
                <input type = "password" required = "true" placeholder = "Confirm Password *" id = "confirmPassword" className = "confirmPassword" /><br/>

                <input type = "date" required = "true" placeholder = "Date of Birth *" id = "dob" className = "dob" />
                <input type = "text" required = "true" placeholder = "City *" id = "confirmEmail" className = "city" /><br/>

                <Link to = "/login"> <button value = "submit" className = "button" >Sign Up</button></Link>

            </form>
        </div>
    )
}
