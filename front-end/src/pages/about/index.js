import React from 'react';
import './style.css'
import Header from '../../components/BootstrapNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import profile from './profile_pic.png'
const About = () => {
    return (
        <div className="App">
            <header className="App-header">
            <div class="about-section">
                <h1>About Us</h1>
                <p>Some text about who we are and what we do.</p>
                
                <p>Scroll down to find our more about our members!</p>
            </div>

            <div style={{width: "90%"}}>
            <h1 style={{textAlign : "center"}}>Our Team</h1>
            <div class="row">
            <div class="column">
                <div class="card">
                <img src={profile} alt="Juana" style={{width:"100%"}}/>
                <div class="container">
                    <h2>Juana Ng</h2>
                    <p class="title">Member</p>
                    <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                    <p>juana@example.com</p>
                    <p><button class="button">Contact</button></p>
                </div>
                </div>
            </div>

            <div class="column">
                <div class="card">
                <img src={profile} alt="Aila" style={{width:"100%"}}/>
                <div class="container">
                    <h2>Aila Aamir</h2>
                    <p class="title">Member</p>
                    <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                    <p>aila@example.com</p>
                    <p><button class="button">Contact</button></p>
                </div>
                </div>
            </div>

            <div class="column">
                <div class="card">
                <img src={profile} alt="Alexander" style={{width:"100%"}}/>
                <div class="container">
                    <h2>Alexander Bobb</h2>
                    <p class="title">Member</p>
                    <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                    <p>alex@example.com</p>
                    <p><button class="button">Contact</button></p>
                </div>
                </div>
            </div>
            </div>
            <div class="row">
            <div class="column1">
                <div class="card">
                <img src={profile} alt="Junyi" style={{width:"100%"}}/>
                <div class="container">
                    <h2>Junyi Sim</h2>
                    <p class="title">Member</p>
                    <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                    <p>alex@example.com</p>
                    <p><button class="button">Contact</button></p>
                </div>
                </div>
            </div>
            <div class="column1">
                <div class="card">
                <img src={profile} alt="Jade" style={{width:"100%"}}/>
                <div class="container">
                    <h2>Jade Wang</h2>
                    <p class="title">Member</p>
                    <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                    <p>alex@example.com</p>
                    <p><button class="button">Contact</button></p>
                </div>
                </div>
            </div>
            </div>
            </div>
            </header>            
        </div>
    );
};
export default About;