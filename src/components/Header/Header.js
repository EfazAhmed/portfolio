import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./Header.css";

const Header = () => {
    return (
        <Navbar expand="lg" variant="dark" bg="dark">
            <Container>
                <Navbar.Brand className="navbar-brand">Efaz Ahmed</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse id="navbarSupportedContent">
                    <Nav>
                        <Nav.Link className="ms-5" href="#home">Home</Nav.Link>
                        <Nav.Link className="mx-5" href="#experience">Experience</Nav.Link>
                        <Nav.Link className="me-5" href="#skills">Skills</Nav.Link>
                        <Nav.Link className="" href="#projects">Projects</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};

export default Header;