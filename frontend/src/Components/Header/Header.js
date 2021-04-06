import React from 'react'
import { Navbar, Nav, Container, NavDropdown, Form, FormControl, Button } from "react-bootstrap"

const Header = () => {
    return (
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
    )
}

export default Header
