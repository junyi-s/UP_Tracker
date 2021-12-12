import React from "react"
import './styles.css'
import {Col, Row} from "react-bootstrap";

const Footer = () => (
  <div className="footer">
    <Row>
      <Col>
        <a href="https://github.com/junyi-s/UP_Tracker" target="_blank" class = "footer-link">GitHub</a>
      </Col>
      <Col>
        <a href="https://u-package-tracker.atlassian.net/l/c/ip6C681r" target="_blank" class = "footer-link">Run A Local Site</a>
      </Col>
      <Col>
        <a href="/about" class = "footer-link">Let's Chat!</a>
      </Col>
    </Row>
  </div>
);

export default Footer;