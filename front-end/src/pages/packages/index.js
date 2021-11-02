import React, { useEffect } from 'react';
import './style.css';
import TrackingInfo from '../../components/trackingInfo';

const Packages = () => {
    useEffect(() => {
        document.title = 'packages';
    });
    return (
        <div>
            <h1>packages</h1>
            <p>This is the packages page...</p>
            <TrackingInfo />
        </div>
    );
};
export default Packages;