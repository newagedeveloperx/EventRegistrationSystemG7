import React from 'react';
import Footer from '../Component/Footer';
import NavBar from '../Component/NavBar';
import "./events.css"

export default function AfternoonEvents() {
    return (
        <div>
            <div><NavBar/></div>
            
            <div>
            <h1>Upcoming Afternoon Events</h1>
            </div>

            <div className = "afternoonEvents">
            <figure className = "morn">
                    <img className = "event"  src ="https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt = "Event" />
                <   figcaption className = "eventCaption"> 
                            {/* <a href = "/"><b>Sat, Sep 26, 2020 2:00 AM </b><br/><i>Hold On We're Coming</i></a> */}
                            <b>Event: Literacy for All <br/></b>
                            Speaker: Katey Perry<br/>
                            Date: Sun, Oct 10, 2020<br/>
                            Time: 8:00 AM<br/>
                            Tagline: It'a all about you<br/><br/>
                    </figcaption>
                    <button value = "submit" className = "btn">Register</button>
                </figure>

                <figure className = "morn">
                    <img className = "event"  src ="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?cs=srgb&dl=pexels-fauxels-3184418.jpg&fm=jpg" alt = "Event" />
                    <figcaption className = "eventCaption"> 
                                {/* <a href = "/"><b>Fri, Sep 25, 2020 11:00 PM</b><br/><i>Baking with Our Buds</i></a> */}
                                <b>Event: Baking with Our Buds <br/></b>
                            Speaker: Rihanna<br/>
                            Date: Mon, Oct 11, 2020<br/>
                            Time: 8:00 AM<br/>
                            Tagline: It'a all about you<br/><br/>
                        </figcaption>
                        <button value = "submit" className = "btn">Register</button>
                </figure>

                <figure className = "morn">
                    <img className = "event"  src ="https://images.pexels.com/photos/2740956/pexels-photo-2740956.jpeg?cs=srgb&dl=pexels-prateek-katyal-2740956.jpg&fm=jpg" alt = "Event" />
                    <figcaption className = "eventCaption"> 
                                {/* <a href = "/"><b>Fri, Oct 2, 2020 12:00 AM </b><br/><i>Comedy Crossing</i></a> */}
                                <b>Event: Comedy Crossing <br/></b>
                            Speaker: Rihanna<br/>
                            Date: Mon, Oct 11, 2020<br/>
                            Time: 8:00 AM<br/>
                            Tagline: It'a all about you<br/><br/>
                        </figcaption>
                        <button value = "submit" className = "btn">Register</button>
                </figure>

                <figure className = "morn">
                    <img className = "event"  src ="https://images.pexels.com/photos/7096/people-woman-coffee-meeting.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt = "Event" />
                    <figcaption className = "eventCaption"> 
                            {/* <a href = "/"><b>Sat, Oct 3, 2020 4:00 PM</b><br/><i>Everygirls Rise</i></a> */}
                            <b>Event: Everygirls Rise <br/></b>
                            Speaker: Rihanna<br/>
                            Date: Mon, Oct 11, 2020<br/>
                            Time: 8:00 AM<br/>
                            Tagline: It'a all about you<br/><br/>
                    </figcaption>
                    <button value = "submit" className = "btn">Register</button>
                </figure>

                <figure className = "morn">
                <img className = "event"  src = "https://images.pexels.com/photos/2422293/pexels-photo-2422293.jpeg?cs=srgb&dl=pexels-jopwell-2422293.jpg&fm=jpg" alt = "Event" />
                <figcaption className = "eventCaption"> 
                        {/* <a href = "/"><b>Sun, Sep 27, 2020 4:00 PM</b><br/><i>Azubi Africa</i></a> */}
                        <b>Event: Azubi Africa <br/></b>
                            Speaker: Rihanna<br/>
                            Date: Mon, Oct 11, 2020<br/>
                            Time: 8:00 AM<br/>
                            Tagline: It'a all about you<br/><br/>
                </figcaption>
                <button value = "submit" className = "btn">Register</button>
            </figure>

            <figure className = "morn">
                <img src ="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt = "Event" />
                <figcaption className = "eventCaption"> 
                        {/* <a href = "/"><b>Tue, Sep 29, 2020 12:00 AM</b><br/><i>Literacy for All</i></a> */}
                        <b>Event: Literacy for All <br/></b>
                            Speaker: Rihanna<br/>
                            Date: Fr, Oct 8, 2020<br/>
                            Time: 9:00 AM<br/>
                            Tagline: It'a all about you<br/><br/>
                </figcaption>
                <button value = "submit" className = "btn">Register</button>
            </figure>

            <figure className = "morn">
                <img className = "event" src ="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt = "Event" />
                <figcaption className = "eventCaption"> 
                        {/* <a href = "/"><b>
                            Sat, Oct 3, 2020 4:00 PM</b><br/><i>Duocon 2020</i></a> */}
                            <b>Event: Duocon 2020 <br/></b>
                            Speaker: P!nk<br/>
                            Date: Sat, Oct 3, 2020<br/>
                            Time: 9:00 AM<br/>
                            Tagline: It'a all about you<br/><br/>
                </figcaption>
                <button value = "submit" className = "btn">Register</button>
            </figure>

            <figure className = "morn">
                <img className = "event" src ="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt = "Event" />
                <figcaption className = "eventCaption"> 
                        {/* <a href = "/"><b>Sat, Sep 26, 2020 4:00 PM BST</b><br/><i>SocietyX</i></a> */}
                        <b>Event: Duocon 2020 <br/></b>
                            Speaker: P!nk<br/>
                            Date: Sat, Oct 3, 2020<br/>
                            Time: 9:00 AM<br/>
                            Tagline: It'a all about you<br/><br/>
                </figcaption>
                <button value = "submit" className = "btn">Register</button>
            </figure>

            <figure className = "morn">
                <img className = "event" src ="https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt = "Event" />
                <figcaption className = "eventCaption"> 
                            {/* <a href = "/"><b>Sat, Sep 26, 2020 2:00 AM </b><br/><i>Hold On We're Coming</i></a> */}
                            <b>Event: Hold On We're Coming<br/></b>
                            Speaker: P!nk<br/>
                            Date: Sat, Oct 3, 2020<br/>
                            Time: 9:00 AM<br/>
                            Tagline: It'a all about you<br/><br/>
                    </figcaption>
                    <button value = "submit" className = "btn">Register</button>
            </figure>

            <figure className = "morn">
                <img className = "event" src ="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?cs=srgb&dl=pexels-fauxels-3184418.jpg&fm=jpg" alt = "Event" />
               <figcaption className = "eventCaption"> 
                            {/* <a href = "/"><b>Fri, Sep 25, 2020 11:00 PM</b><br/><i>Baking with Our Buds</i></a> */}
                            <b>Event: Baking with Our Buds <br/></b>
                            Speaker: P!nk<br/>
                            Date: Sat, Oct 3, 2020<br/>
                            Time: 9:00 AM<br/>
                            Tagline: It'a all about you<br/><br/>
                            <button value = "submit" className = "btn">Register</button>
                    </figcaption>
            </figure>

            <figure className = "morn">
                <img className = "event" src ="https://images.pexels.com/photos/2740956/pexels-photo-2740956.jpeg?cs=srgb&dl=pexels-prateek-katyal-2740956.jpg&fm=jpg" alt = "Event" />
                <figcaption className = "eventCaption"> 
                            {/* <a href = "/"><b>Fri, Oct 2, 2020 12:00 AM </b><br/><i>Comedy Crossing</i></a> */}
                            <b>Event: Comedy Crossing <br/></b>
                            Speaker: P!nk<br/>
                            Date: Sat, Oct 3, 2020<br/>
                            Time: 9:00 AM<br/>
                            Tagline: It'a all about you<br/><br/>
                    </figcaption>
                    <button value = "submit" className = "btn">Register</button>
            </figure>

            <figure className = "morn">
                <img className = "event" src ="https://images.pexels.com/photos/7096/people-woman-coffee-meeting.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt = "Event" />
                <figcaption className = "eventCaption"> 
                        {/* <a href = "/"><b>Sat, Oct 3, 2020 4:00 PM</b><br/><i>Everygirls Rise</i></a> */}
                        <b>Event: Everygirls Rise<br/></b>
                            Speaker: P!nk<br/>
                            Date: Sat, Oct 3, 2020<br/>
                            Time: 9:00 AM<br/>
                            Tagline: It'a all about you<br/><br/>
                </figcaption>
                <button value = "submit" className = "btn">Register</button>
            </figure>
            </div>

            <div><Footer/></div>
        </div>
    )
}
