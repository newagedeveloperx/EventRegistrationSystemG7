import React from 'react';
import Welcome from "./Welcome";
import { useEffect } from 'react';

function LogoutPage(props) {
    
useEffect(() => {
    props.onLogout(
        {
            credentials: { username: "", password: "" },
            token: "",
            status: "SIGNED_OUT"
        }
    );
//added hook dependency
}, [props]);
    return (
        <section id="main">
            <Welcome />
            <div className="form">
            <div>
                <h3>Signed out</h3>
            </div>
            </div>
        </section>
    )
}

export default LogoutPage;