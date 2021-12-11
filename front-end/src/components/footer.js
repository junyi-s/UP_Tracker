import React from "react"
import './styles.css'
import {Col, Row} from "react-bootstrap";
import {BrowserRouter, Link} from 'react-router-dom';
import github from "./icons/github.png";
import confluence from "./icons/confluence.png";
import aboutus from "./icons/aboutus.png";

const Footer = () => (
  <div className="footer">
    <Row>
      <Col>
      <a href="https://github.com/junyi-s/UP_Tracker">
        <img src={github} className="github" style={{height: "33px", left:"5%"}}/>
      </a>
      </Col>
      <Col>
      <a href="https://u-package-tracker.atlassian.net/wiki/spaces/PT/pages/393219/User+Guide">
        <img src={confluence} className="confluence" style={{height: "40px"}}/>
      </a>      
      </Col>
      <Col>
      <a href="/about">
        <img src={aboutus} className="about us" style={{height: "35px"}}/>
      </a>        
      </Col>
    </Row>
  </div>
);

export default Footer;