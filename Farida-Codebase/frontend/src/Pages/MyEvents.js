import React from 'react'
import Footer from '../Component/Footer'
import NavBar from '../Component/NavBar'

export default function MyEvents() {
    return (
        <div >
            <NavBar/>
                <h1>Registered Events</h1>
                <div className = "myEvents">

                </div>

            <Footer/>
        </div>
    )
}
