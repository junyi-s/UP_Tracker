import React from 'react'
import { Navbar, Nav } from "react-bootstrap";
import Logo from '../logo.png'
import './styles.css'
const Header = () => {
    return (
        <div>
            <Navbar bg="dark" expand="lg" variant="dark" className="py-2">
                <a class="navbar-brand" href="/">
                    <img src={Logo} width="60" height="60" alt="" />
                </a>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="m-auto topnav" >
                        <Nav.Link className="nav" href="/" style={{ color: "#feb633" }}>
                            Home
                        </Nav.Link>
                        <Nav.Link className="nav" href="/packages">
                            Packages
                        </Nav.Link>
                        <Nav.Link className="nav" href="/About">
                            About
                        </Nav.Link>
                    </Nav>
                    <ul class="nav navbar-nav navbar-right">
                            <li>
                                <div class="btn-nav"><a class="btn btn-primary btn-small navbar-btn" href="/login">Login</a>
                                </div>
                            </li>
                        </ul>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;