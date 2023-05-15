import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  const { Brand, Toggle, Collapse } = Navbar;

  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      sticky="top"
      color="white"
      style={{ padding: "0 20px" }}
    >
      <Brand>
        <Link to={"AboutMe"}>
          <h1>Buck Blocker</h1>
        </Link>
      </Brand>
      <Toggle aria-controls="basic-navbar-nav" />
      <Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="ml-auto">
          <Link className="nav-link" to={"AboutMe"}>
            <h4>About Me</h4>
          </Link>
          <Link className="nav-link" to={"Portfolio"}>
            <h4>Portfolio</h4>
          </Link>
          <Link className="nav-link" to={"Contact"}>
            <h4>Contact</h4>
          </Link>
          <Link className="nav-link" to={"Resume"}>
            <h4>Resume</h4>
          </Link>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
