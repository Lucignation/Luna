import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

import './Navigation.css';


const Navigation = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="/">Don Casino Paris.</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    </Nav>
                    <Nav>
                    <Nav.Link href="/music">Music</Nav.Link>
                    <Nav.Link href="/photos">Photos</Nav.Link>
                    <Nav.Link href="/#video">Videos</Nav.Link>
                    <Nav.Link href="/tour">Tour</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default Navigation;