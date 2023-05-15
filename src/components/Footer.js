import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer bg-dark">
      <Container>
        <Row>
          <Col className="text-center">
            <a
              href="https://github.com/bucknorris336"
              target="_blank"
              rel="noreferrer"
              className="footer-icon"
            >
              <FaGithub size={24} color="white" className="hover-link" />
            </a>
            <a
              href="https://www.linkedin.com/in/buck-blocker-802a9124b"
              target="_blank"
              rel="noreferrer"
              className="footer-icon"
            >
              <FaLinkedin size={24} color="white" className="hover-link" />
            </a>
            <a
              href="mailto:buckblocker90@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="footer-icon"
            >
              <FaEnvelope size={24} color="white" className="hover-link" />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
