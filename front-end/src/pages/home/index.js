import React from 'react';
import './style.css'
import Header from '../../components/BootstrapNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import SimpleForm from '../../components/SimpleForm';

const Home = () => {
    return (
        <div className="App">
            <Header/>
            <header className="App-header"> 
            <SimpleForm/> 

      
                {/* $( document ).ready(function(){

                  let track_btn = document.querySelector("#track_btn");
                    
                    track_btn.onclick = function (event){
                        alert("hello");




                    };
                    
                }); */}
                
           
            
            </header>
            
        </div>
    );
};
export default Home;
