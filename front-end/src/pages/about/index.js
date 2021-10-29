import React, { useEffect } from 'react';
import './style.css'
const About = () => {
    useEffect(() => {
        document.title = 'about';
    });
    return (
        <div>
            <h1>about</h1>
            <p>This is the about page...</p>
        </div>
    );
};
export default About;