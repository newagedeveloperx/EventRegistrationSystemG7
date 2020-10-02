import React from 'react';
import NavBar from "../Component/NavBar";
import Footer from "../Component/Footer";
import Sessions from '../Component/Sessions';

export default function LandingPage() {
    return (
        <div>
            <NavBar/>
            <Sessions/>
            <Footer/>
        </div>
    )
}
