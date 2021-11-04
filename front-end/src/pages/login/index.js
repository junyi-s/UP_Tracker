import React, {useState} from 'react';
import Form from "react-bootstrap/Form";
import './style.css'
import Header from '../../components/BootstrapNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="App">
            <div className = "App-header">
                <Form.Group size="lg" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        autoFocus
                        placeholder= "Enter email"
                        type = "email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        placeholder="Enter password"
                        type = "password"
                        value = {password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
            </div>

        </div>
    );
};
export default Login;