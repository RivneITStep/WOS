import React from 'react'
import { Navbar, Nav, Container, NavDropdown, Form, FormControl, Button } from "react-bootstrap"

import {Nav, Navbar, NavDropdown, Form,Button, FormControl} from 'react-bootstrap';


const Header = () => {
    return (
<<<<<<< HEAD
        <header>
            <Navbar bg="light" className="navbar navbar-expand-lg navbar-dark bg-primary" expand="lg">
                <Navbar.Brand className="navbar-brand" href="#home">WOShop</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto navbar-nav">
                        <Nav.Link className="nav-link" href="#home">Home</Nav.Link>
                        <Nav.Link className="nav-link" href="#profile">Profile</Nav.Link>
                        <Nav.Link className="nav-link" href="#cart">Cart</Nav.Link>
                        <Nav.Link className="nav-link" href="#signIn">Sign In</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="form-control mr-sm-2" />
                        <Button className="btn btn-secondary my-2 my-sm-0" >Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </header>
=======
        <Navbar className="navbar navbar-expand-lg navbar-dark bg-primary">
            <Navbar.Brand >WOS</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link >Home</Nav.Link>
                    <Nav.Link >Profile </Nav.Link>
                    <Nav.Link >Sign In</Nav.Link>
                    <Nav.Link >Cart </Nav.Link>
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
>>>>>>> origin/VH
    )
}

export default Header
