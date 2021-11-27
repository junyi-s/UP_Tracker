import React, {useState} from 'react';
import styled from "styled-components";
import {Form, Col, Row} from "react-bootstrap";
// import Header from '../../components/BootstrapNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import Register from '../../components/auth/Register';
const Button = styled.button`
        background-color: #2196f3;
        color: white;
        padding: 2px 15px;
        border-radius: 0px;
        border: 0px solid #1565c0;
        text-transform: uppercase;
        margin: 4px 0px;
        transition: ease background-color 400ms;

        &:hover {
            background-color: #0d47a1;
        }
        `;

    const StyledLink = styled(Link)`
        color: #2196f3;
        margin: 7px 0px;
        transition: ease color 200ms;
        font-size: 16px;

        &:hover{
            color: #0d47a1;
        }
    `;

const SignUp = () => {
    return(
        <div className="App">
            <div className = "App-header">
               <Register>
                   
               </Register>
            </div>

        </div>
    );
};
export default SignUp;
