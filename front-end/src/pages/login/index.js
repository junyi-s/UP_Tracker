import React, {useState} from 'react';
import styled from "styled-components";
import {Form, Col, Row} from "react-bootstrap";
import './style.css'
import Header from '../../components/BootstrapNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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
        alert("Email: " + email + "\nPassword: " + password);
    }

    return (
        <div className="App">
            <Header/>
            <div className = "App-header">
                <Form horizontal onSubmit={handleSubmit}>
                <Form.Label>Welcome Back</Form.Label>
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
                    <Row>
                        <Col md = "auto">
                            <Button type="submit">
                                Login
                            </Button>
                        </Col>
                        <Col>
                            <Link to = './signup'> Don't have an account yet? </Link>
                        </Col>
                    </Row>
                </Form>
            </div>

        </div>
    );
};
export default Login;