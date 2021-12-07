import React from 'react';
import './style.css'
import Header from '../../components/BootstrapNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import profile from './profile_pic.png'
import alex from './alex.png'
import juana from './juana.png'
import junyi from './junyi.png'
import jade from './jade.png'
import aila from './aila.png'
const About = () => {
    return (
        <div className="App">
            <header className="App-header">
            <div class="about-section">
                <h1>About Us</h1>
                <p>Our team is made up of New York University students and our goal was to create a web application that allows users to
                    track packages across any carrier. Our vision was that if anyone had a tracking number simply type it in our application
                    and it would do the work of finding out the carrier, displaying the information about your package, and giving them 
                    the option of saving it for future reference. We worked on this project for about two and a half months. 
                </p>
                
                {/* <p>Scroll down to find our more about our members!</p> */}
            </div>

            <div style={{width: "90%"}}>
            <h1 style={{textAlign : "center"}}>Our Team</h1>
            <div class="row">
            <div class="column">
                <div class="card">
                <img src={juana} alt="Juana" style={{width:"100%"}}/>
                    <h2>Juana Ng</h2>
                    <p class="title">Member</p>
                    <p>Juana is a senior majoring in computer science. She enjoys playing badminton and watching shows on Netflix in her free time.</p>
                    <p><a href="mailto:jyn229@nyu.edu">Contact Me</a></p>
                </div>
            </div>

            <div class="column">
                <div class="card">
                <img src={aila} alt="Aila" style={{width:"100%"}}/>
                    <h2>Aila Aamir</h2>
                    <p class="title">Member</p>
                    <p>Aila is a senior majoring in computer science. She enjoys photography, baking, and painting in her free time.</p>
                    <p><a href="mailto:aa6310@nyu.edu">Contact Me</a></p>
                </div>
            </div>

            <div class="column">
                <div class="card">
                <img src={alex} alt="Alexander" style={{width:"100%"}}/>
                    <h2>Alexander Bobb</h2>
                    <p class="title">Member</p>
                    <p>Alexander is a senior majoring in computer science. He enjoys playing chess and video games in his free time. </p>
                    <p><a href="mailto:someone@example.com">Contact Me</a></p>
                </div>
            </div>
            </div>
            <div class="row">
            <div class="column1">
                <div class="card">
                <img src={junyi} alt="Junyi" style={{width:"100%"}}/>
                    <h2>Junyi Sim</h2>
                    <p class="title">Member</p>
                    <p>Junyi is a senior majoring in computer science. In his free time he enjoys going to the gym and listening to music.</p>
                    <p><a href="mailto:js9166@nyu.edu">Contact Me</a></p>
                </div>
            </div>
            <div class="column1">
                <div class="card">
                <img src={jade} alt="Jade" style={{width:"100%"}}/>
                    <h2>Jade Wang</h2>
                    <p class="title">Member</p>
                    <p>Jade is a junior majoring in computer science and game design. In her free time she enjoys digital painting, absorbing arts, and sampling local NYC restaurants. </p>
                    <p><a href="mailto:jw5933@nyu.edu">Contact Me</a></p>
                </div>
            </div>
            </div>
            </div>
            </header>            
        </div>
    );
};
export default About;