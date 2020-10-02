import React from 'react'
import Footer from '../Component/Footer'
import NavBar from '../Component/NavBar'
import  "./ourteam.css"

export default function OurTeam() {
    return (
        <div className = "ourTeam">

            <NavBar/>

            <div>
            <h1>MEET OUR TEAM</h1>
            
            </div>

           <div className = "ourTeampix">
               
           <figure className = "adams">
                <img className = "amisu" src = "https://media-exp1.licdn.com/dms/image/C4E03AQFcR7WYAXaA6g/profile-displayphoto-shrink_800_800/0?e=1606953600&v=beta&t=2fxvvw83CeLYA8nMJzUQHGzIVQ4wZSxA4wA8HiV8SiA" alt = "Adams Amisu"/>
                <figcaption>
                <b>Adams Amisu</b><br/>
                    Project Manager
                </figcaption>
            </figure>

            <figure className = "rheeda">
                <img className = "boo" src = "https://lh3.googleusercontent.com/vfNm4vVfSRtK0mVQSJL4w1GRYZdDwsUyMpGiJiEa1AlxoHGn_0FSSyiDPSpuZVgELrEWUeao5OHzFsyElOw-rmZLKY41r6xUboBJ4LOdcKqlOvaBfdmhGJGzVAQ3aohUqSo6XubSdPk2lNBcB5aag19cWT771-lmqtzfwGig7zuccIrxJnsWIOHVba6PHo-gJbTv72I3QwRhRLgITveUEIq63cJ_HRsfYT_n0kRQe_yogwdhutjH9XsdQDsrC31WufaE07k2xI1IIAYWcnatMlgJ1L1g0u-rGgNXbAmNGEcqFhUSe9c5RJDZ5I-PYp72Da9B_0tSIMQri65tCjjU1zVkMlcOPDUNM5uar5_S59tFOwqV2CG615SDH0r_SGfTvkytJRpUDlDhiu5ufopzjcsTvUA_eDrxrc96ksmv6SAac91OU8joqRP13v4avaIfAiP4m8BEhxPW9gqludIrLiD1aM-gYvsfYgd-YeX1pbOe5W6ZRFl0boKW9Io1xJEn8fuLz4I9j92YrPP_PaPjRu69G11sU2fvJUJiQRdoCBBqzmKaxN9Ls4KJlVpv7DuFPAaLdpJkSjo2xApm98rA_pMqeTf_mWuVOVl2VlJjejiPbs1-cMvcWNabMj2sj_S0Gx2icVtfibRmuidZTFbGUaBP6vhugP8wxwwJu0YNiTQpBvvHRtJP6Ydj7ik2SQ=s903-no?authuser=0" alt = "Rheeda Boo"/>
                <figcaption>
                    <b>Farida Baberin-Yor Beacher</b><br/>
                    Front-end Developer
                </figcaption>
            </figure>

            <figure className = "jeff">
                <img className = "asmah" src = "" alt = "Jeff Asmah"/>
                <figcaption>
                <b>Jeff Asmah</b><br/>
                    Back-end Developer
                </figcaption>
            </figure>

            <figure className = "jocelyn">
                <img className = "bal" src = "" alt = "Jocelyn Balangtaa"/>
                <figcaption>
                <b>Jocelyn Balangtaa</b><br/>
                    Back-end Developer
                </figcaption>
            </figure>

            <figure className = "pierre">
                <img className = "annan" src = "" alt = "Pierre Annan"/>
                <figcaption>
                <b>Pierre Annan</b><br/>
                    Back/Front-end Developer
                </figcaption>
            </figure>
           </div>

           <Footer/> 
            
        </div>
    )
}
