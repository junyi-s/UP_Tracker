import React from 'react';
import './style.css'
import Header from '../../components/BootstrapNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import TrackingInfo from '../../components/trackingInfo';

const Packages = () => {
    return (
        <div className="App">
            <Header/>
            <header className="App-header">
                Packages
            </header>
            <TrackingInfo />
        </div>
    );
};
export default Packages;