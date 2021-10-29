import React from 'react';
import logo from '/Users/abobb/Desktop/UP_Tracker/front-end/src/logo.png'
import './style.css'

const Home = () => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} alt="Logo" width="330" />
                <p>
                    Homepage
                </p>
                <a href="about" >About</a>
                <a href="login" >Login</a>
                <a href="packages" >Packages</a>
            </header>
        </div>
    );
};
export default Home;