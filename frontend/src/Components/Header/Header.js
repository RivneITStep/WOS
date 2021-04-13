import React from 'react'
import "../../index.css"
import {Nav, Navbar, NavDropdown, Form,Button, FormControl} from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <header>
        <Navbar className="navbar navbar-expand-lg navbar-dark bg-primary">
            <Navbar.Brand className="navbar-brand">WOS</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link className="nav-link">Home</Nav.Link>
                    <Nav.Link className="nav-link">Profile </Nav.Link>
                    <Nav.Link className="nav-link">Sign In</Nav.Link>
                    <Nav.Link className="nav-link">Cart </Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
        </header>
    )
}

export default Header
