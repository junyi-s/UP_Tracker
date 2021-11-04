import React from 'react';
import './style.css'
import Header from '../../components/BootstrapNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import SimpleForm from '../../components/SimpleForm';

const Home = () => {
    return (
        <div className="App">
            <Header/>
            <SimpleForm/>
        </div>
    );
};
export default Home;
