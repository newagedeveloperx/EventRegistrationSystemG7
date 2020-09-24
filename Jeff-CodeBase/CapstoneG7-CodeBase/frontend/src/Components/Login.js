import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            credentials: { username: "", password: "" },
            redirect: null 
        }
    }
    
    postLogin = async (event) => {
        console.log(JSON.stringify(this.state.credentials))

        event.preventDefault();
        let data = await fetch("http://127.0.0.1:8000/auth/",
            ///fetch("http://40.77.23.159:8080/auth/",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(this.state.credentials)
            }
        )
        try {
            if (!data.ok) {
                let err = await data.json()
                let errorArr = []
                Object.keys(err).map(key =>
                    errorArr.push(key + " : " + err[key].pop())
                )
                this.props.onErrors({ errors: errorArr })
            } else {
                let d = await data.json()
                this.props.onLogin({ 
                    token: d.token,
                     credentials: this.state.credentials,
                      status: "ATTENDEE_SIGNED_IN",
                      requestedComponent:"home",
                      message:"Successfuly logged in"
                    })
           
            }
        }
        catch (error) { console.log(error) }


        // console.log(JSON.stringify(this.state.credentials))
        // fetch("http://127.0.0.1:8000/auth/",
        //     ///fetch("http://40.77.23.159:8080/auth/",
        //     {
        //         method: "POST",
        //         headers: { "Content-Type": "application/json" },
        //         body: JSON.stringify(this.state.credentials)
        //     }
        // ).then(

        //     //400
        //     data => {

        //         if (!data.ok) {
        //             //         console.log(data.text())
        //             data.json().then((err) => {
        //                 let errorArr = []
        //                 Object.keys(err).map(key =>
        //                     errorArr.push(key + " : " + err[key].pop())
        //                 )
        //                 this.props.onErrors({ errors: errorArr })
        //             });
        //         } else {
        //             data.json().then(
        //                 data => {
        //                     this.props.onLogin({ token: data.token, credentials: this.state.credentials, status: "ATTENDEE_SIGNED_IN", requestedComponent: "profile" })
        //                 }

        //             ).catch(error => console.log(error)
        //                 // this.props.onLogin({token:"abc",credentials:this.state.credentials,errors:error.text})
        //             )
        //         }
        //     }
        // )

    }
    handleChange = (event) => {
        const cred = this.state.credentials
        cred[event.target.name] = event.target.value
        this.setState({ credentials: cred });
    }

    render() {

        return (
            <>
                <div className="form" style ={{height: "auto", left:""}}>
                    <form method="post" id="form">
                        <h2>Login</h2>

                        <p>
                            <label htmlFor="id_username">Username:</label>
                            <input type="text" name="username" autoFocus autoCapitalize="none" autoComplete="username" maxLength="150" required id="id_username"
                                value={this.state.credentials.username} onChange={this.handleChange} />
                        </p>
                        <p><label htmlFor="id_password">Password:</label>
                            <input type="password" name="password" autoComplete="current-password" required id="id_password"
                                value={this.state.credentials.password} onChange={this.handleChange} />
                        </p>
                        <input  onClick={this.postLogin} className="button" type="submit" value="Login" style={{width: "90%", color: "white", fontWeight:"bold",
                     backgroundColor: "#270949", borderRadius:"5px",  cursor:"pointer"  }}/>
                    </form>
                </div>
            </>
        );
    }
}
export default Login;