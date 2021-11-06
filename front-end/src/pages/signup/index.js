import React, {useState} from 'react';
import styled from "styled-components";
import {Form} from "react-bootstrap";
import Header from '../../components/BootstrapNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");

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

    function handleSubmit(event){
        event.preventDefault();
        confirmPassword();
        alert("Email: " + email + "\nPassword: " + password);
    }
    function confirmPassword(){
        if (password !== rePassword) alert("passwords are not the same");
    }
    // function validateForm(){

    // }

    return (
        <div className="App">
            <Header/>
            <div className = "App-header">
                <Form horizontal onSubmit={handleSubmit}>
                <Form.Label>Create a new account</Form.Label>
                    <Form.Group size="lg" controlId="email">
                        <Form.Control
                            placeholder= "Email"
                            type = "email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group size="lg" controlId="password">
                        <Form.Control
                            placeholder="Password"
                            type = "password"
                            value = {password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group size="lg" controlId="password">
                        <Form.Control
                            placeholder="Re-enter password"
                            type = "password"
                            value = {rePassword}
                            onChange={(e) => setRePassword(e.target.value)}
                        />
                    </Form.Group>
                        <Button type="submit">
                            Sign Up
                        </Button>
                </Form>
            </div>

        </div>
    );
};
export default SignUp;