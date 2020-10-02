import React from 'react';
import LandingPage from './Pages/LandingPage';
import LogInPage from './Pages/LogInPage';
import SignUpPage from './Pages/SignUpPage';
import MorningEvents from './Pages/MorningEvents';
import AfternoonEvents from './Pages/AfternoonEvents';
import EveningEvents from './Pages/EveningEvents';
import OurTeam from './Pages/OurTeam';


import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import MyEvents from './Pages/MyEvents';

export default function Routes() {
    return (
        <div>
            <Router>
                <Switch>

                    <Route path = "/myevents">
                        <MyEvents/>
                    </Route>

                    <Route path = "/ourteam">
                        <OurTeam/>
                    </Route>

                    <Route path = "/evening">
                        <EveningEvents/>
                    </Route>
                        
                    <Route path = "/afternoon">
                        <AfternoonEvents/>
                    </Route>

                    <Route path = "/morning">
                        <MorningEvents/>
                    </Route>

                    <Route path = "/home">
                        <LandingPage/>
                    </Route>

                    <Route path = "/login">
                        <LogInPage/>
                    </Route>

                    <Route path = "/">
                        <SignUpPage/>
                    </Route>

                </Switch>
            </Router>
        </div>
    )
}
