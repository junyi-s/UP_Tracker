import React, { useEffect } from 'react';
import './style.css';
import TrackingInfo from '../../components/trackingInfo';

const Packages = () => {
    useEffect(() => {
        document.title = 'packages';
    });
    return (
        <div>
            <h1>My Packages</h1>
            <TrackingInfo />
        </div>
    );
};
export default Packages;