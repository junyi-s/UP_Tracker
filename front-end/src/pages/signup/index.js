import React, {useState} from 'react';
import styled from "styled-components";
import {Form, Col, Row} from "react-bootstrap";
// import Header from '../../components/BootstrapNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';

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
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [errors] = useState({});

    function handleSubmit(event){
        event.preventDefault();
        const newUser = {
            name: name,
            email: email,
            password: password,
            password2: password2
          };
      console.log("hello "+ newUser.email);
    }

    return(
        <div className="App">
            <div className = "App-header">
                <Form horizontal onSubmit={handleSubmit}>
                <Form.Label>Create a new account</Form.Label>
                    <Form.Group size="lg" controlId="name">
                        <Form.Control
                            placeholder="Name"
                            type = "text"
                            value = {name}
                            error = {errors.name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group size="lg" controlId="email">
                        <Form.Control
                            placeholder= "Email"
                            type = "email"
                            value={email}
                            error = {errors.email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group size="lg" controlId="password">
                        <Form.Control
                            placeholder="Password"
                            type = "password"
                            value = {password}
                            error = {errors.password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group size="lg" controlId="password2">
                        <Form.Control
                            placeholder="Re-enter password"
                            type = "password"
                            value = {password2}
                            error = {errors.password2}
                            onChange={(e) => setPassword2(e.target.value)}
                        />
                    </Form.Group>
                    <Row>
                        <Col md = "auto">
                            <Button type="submit">
                                Sign Up
                            </Button>
                        </Col>
                        <Col>
                            <StyledLink to = './login'> Already have an account?</StyledLink>
                        </Col>
                    </Row>
                </Form>
            </div>

        </div>
    );
};
export default SignUp;
