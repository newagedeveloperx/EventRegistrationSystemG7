import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import AfternoonEvents from './Pages/AfternoonEvents';
import EveningEvents from './Pages/EveningEvents';
import LandingPage from './Pages/LandingPage';
import MorningEvents from './Pages/MorningEvents';


export default function Routes() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path ="/evening">
                        <EveningEvents/>
                    </Route>

                    <Route path ="/afternoon">
                        <AfternoonEvents/>
                    </Route>

                    <Route path ="/morning">
                        <MorningEvents/>
                    </Route> 

                    <Route path ="/">
                        <LandingPage/>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}
