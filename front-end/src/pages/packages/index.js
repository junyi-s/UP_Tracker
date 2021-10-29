import React, { useEffect } from 'react';
import './style.css'
const Packages = () => {
    useEffect(() => {
        document.title = 'packages';
    });
    return (
        <div>
            <h1>packages</h1>
            <p>This is the packages page...</p>
        </div>
    );
};
export default Packages;